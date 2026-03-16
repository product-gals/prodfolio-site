import type { VercelRequest, VercelResponse } from "@vercel/node";

const BEEHIIV_API_URL = "https://api.beehiiv.com/v2";
const PUBLICATION_ID = "pub_3f97a0d0-154d-4468-a352-b17a9b790029";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    console.error("BEEHIIV_API_KEY is not configured");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
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
          utm_medium: "footer_form",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Beehiiv API error:", errorData);
      return res.status(response.status).json({ error: "Subscription failed" });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
