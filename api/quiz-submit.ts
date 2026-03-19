import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";

const BEEHIIV_API_URL = "https://api.beehiiv.com/v2";
const PUBLICATION_ID = "pub_3f97a0d0-154d-4468-a352-b17a9b790029";
const SHEET_NAME = "Responses";

interface QuizSubmission {
  firstName: string;
  email: string;
  marketingOptIn: boolean;
  journeyStage: string;
  answers: Record<number, string>;
  multiAnswers: Record<number, string[]>;
  archetype: string;
}

async function appendToGoogleSheets(data: QuizSubmission) {
  let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
  // Handle all possible formats of the private key:
  // 1. Literal \n strings (from JSON) -> replace with real newlines
  privateKey = privateKey.replace(/\\n/g, "\n");
  // 2. No newlines at all (Vercel strips them) -> reconstruct PEM format
  if (!privateKey.includes("\n")) {
    const header = "-----BEGIN PRIVATE KEY-----";
    const footer = "-----END PRIVATE KEY-----";
    const body = privateKey.replace(header, "").replace(footer, "").trim();
    const wrapped = body.match(/.{1,64}/g)?.join("\n") || body;
    privateKey = `${header}\n${wrapped}\n${footer}\n`;
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const row = [
    new Date().toISOString(),
    data.firstName,
    data.email,
    data.marketingOptIn ? "Yes" : "No",
    data.journeyStage,
    data.answers[0] || "",
    data.answers[1] || "",
    data.answers[2] || "",
    (data.multiAnswers[3] || []).join("; "),
    data.answers[4] || "",
    data.answers[5] || "",
    data.archetype || "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:L`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

async function subscribeToBeehiiv(email: string, firstName: string) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    throw new Error("BEEHIIV_API_KEY is not configured");
  }

  const response = await fetch(
    `${BEEHIIV_API_URL}/publications/${PUBLICATION_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "website",
        utm_medium: "quiz",
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Beehiiv API error: ${JSON.stringify(errorData)}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, email, marketingOptIn, journeyStage, answers, multiAnswers, archetype } =
    req.body as QuizSubmission;

  if (!firstName || !email || !journeyStage) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const results: { sheets: boolean; beehiiv: boolean | null; errors: string[] } = {
    sheets: false,
    beehiiv: null,
    errors: [],
  };

  // Always append to Google Sheets
  try {
    await appendToGoogleSheets({ firstName, email, marketingOptIn, journeyStage, answers, multiAnswers, archetype });
    results.sheets = true;
  } catch (error) {
    console.error("Google Sheets error:", error);
    results.errors.push("Failed to save to spreadsheet");
  }

  // Conditionally subscribe to Beehiiv
  if (marketingOptIn) {
    try {
      await subscribeToBeehiiv(email, firstName);
      results.beehiiv = true;
    } catch (error) {
      console.error("Beehiiv error:", error);
      results.beehiiv = false;
      results.errors.push("Failed to subscribe to newsletter");
    }
  }

  return res.status(200).json({
    success: true,
    sheets: results.sheets,
    beehiiv: results.beehiiv,
    errors: results.errors.length > 0 ? results.errors : undefined,
  });
}
