export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  content: string;
}

export const helpArticles: HelpArticle[] = [
  {
    slug: "creating-account",
    title: "Creating Your Prodfolio Account",
    category: "Getting Started",
    content: `
Let's get you set up! Creating your Prodfolio account takes about two minutes, and then you're ready to start building your PM portfolio.

## How to Sign Up

**Step 1: Head to Prodfolio**
Visit [prodfolio.io](https://prodfolio.io) and click "Get Started" — you'll see it right there on the homepage.

**Step 2: Enter Your Details**
Drop in your email address and create a password. (Pro tip: Make it something you'll actually remember, but keep it secure!)

**Step 3: Verify Your Email**
We'll send a quick verification email to your inbox. Click the link inside to activate your account. If you don't see it, check your spam folder — sometimes it sneaks in there.

**Step 4: You're In!**
Once verified, you're automatically logged in and ready to roll. You'll land on your dashboard, where the magic happens.

## What You Get Right Away

When you sign up, you get instant access to:
- **1 portfolio** to build and customize
- **1 publish** to make your work live on a prodfolio.io link
- **1 AI generation** to jumpstart a case study with our AI assistant
- The **Professional Default** theme (clean, modern, and hiring-manager-approved)

This is our Free tier — think of it as a test drive. You can build a complete portfolio, experiment with our SIGNAL framework, and share your work with hiring managers. No credit card required.

## Ready for More?

Once you've built your first portfolio and want to unlock more features — like unlimited publishing, custom domains, advanced themes, and password protection — you can upgrade to Starter ($19/mo) or Pro ($29/mo) anytime. No pressure, though. Start free and upgrade when it makes sense for you.

## Stuck? We've Got You

If something's not working:
- Double-check that you're using a valid email address
- Look in your spam folder for the verification email
- Try a different browser if the page isn't loading
- Reach out to us at support@prodfolio.io — we're here to help

Now let's build something you're proud to share.
    `
  }
];

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find(article => article.slug === slug);
}
