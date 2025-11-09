export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  content: string;
}

export const helpArticles: HelpArticle[] = [
  {
    slug: "creating-account",
    title: "Creating your Prodfolio account",
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
  },
  {
    slug: "troubleshooting",
    title: "FAQ: Troubleshooting",
    category: "Getting Started",
    content: `
Common troubleshooting questions and solutions.

## Login & Access Issues

### I can't log in to my account

**Possible solutions:**

1. **Check your email and password**
   - Make sure you're using the correct email address
   - Check for typos in your password
   - Try copy/pasting your password to avoid typing errors

2. **Reset your password**
   - Click "Forgot Password?" on the login page
   - Check your email (and spam folder)
   - Follow the reset link

3. **Clear your browser cache and cookies**
   - Go to your browser settings
   - Clear browsing data for the past 24 hours
   - Try logging in again

4. **Try a different browser**
   - Sometimes browser extensions can interfere
   - Try incognito/private mode first

5. **Check if you signed up with a social account**
   - You may have created your account with Google/GitHub
   - Try "Continue with Google" or other social login options

**Still can't log in?** Contact support@prodfolio.com

### I didn't receive my verification email

1. **Check your spam/junk folder**
   - Sometimes verification emails get filtered

2. **Wait a few minutes**
   - Email delivery can take up to 10 minutes

3. **Request a new verification email**
   - Go to Settings → Account → Resend Verification Email

4. **Check if your email is correct**
   - Settings → Account → Update email if needed

5. **Whitelist our emails**
   - Add noreply@prodfolio.com to your contacts
   - Add prodfolio.com to your email whitelist

### I keep getting logged out

**Common causes:**

1. **Session expiration** - Sessions expire after 30 days of inactivity
2. **Browser settings** - Check if cookies are being cleared automatically
3. **Multiple devices** - Logging in on another device can log you out elsewhere
4. **Browser extensions** - Privacy/security extensions may interfere

**Solutions:**
- Enable "Remember me" when logging in
- Check browser cookie settings
- Disable browser extensions temporarily
- Clear cache and cookies, then log in fresh

### The editor won't load

**Troubleshooting steps:**

1. **Check your internet connection**
   - Make sure you're online
   - Try loading other websites

2. **Refresh the page**
   - Press Cmd+R (Mac) or Ctrl+R (Windows)
   - Or click the refresh button

3. **Clear browser cache**
   - Clear cache and reload the page

4. **Try a different browser**
   - Test in Chrome, Firefox, or Safari
   - Update your browser to the latest version

5. **Disable browser extensions**
   - Ad blockers and privacy extensions can interfere
   - Try using incognito/private mode

6. **Check browser console for errors**
   - Press F12 to open developer tools
   - Look for error messages in the Console tab
   - Send error messages to support if you find any

**Still not loading?** Check status.prodfolio.com for any ongoing issues.

## Image & Media Issues

### My images won't upload

**Common causes and solutions:**

1. **File size too large**
   - Maximum file size: 10MB per image
   - Solution: Compress your image using TinyPNG or similar

2. **Unsupported file format**
   - Supported formats: JPG, PNG, GIF, WebP
   - Solution: Convert your image to a supported format

3. **Slow internet connection**
   - Large images take time to upload
   - Solution: Wait for upload to complete, don't refresh page

4. **Browser issues**
   - Solution: Try a different browser
   - Clear cache and try again

5. **File name issues**
   - Avoid special characters in file names
   - Use letters, numbers, hyphens, underscores only

**Quick fix:** Drag and drop files instead of using the file picker.

### My images look blurry or pixelated

**Causes:**
- Image resolution is too low
- Image was over-compressed
- Browser is displaying cached version

**Solutions:**

1. **Upload higher resolution images**
   - Minimum recommended: 1920px wide for hero images
   - Project images: 1200px wide minimum

2. **Use PNG for graphics with text**
   - JPG can make text look blurry
   - PNG preserves sharp edges and text

3. **Clear browser cache**
   - You might be seeing an old, compressed version

4. **Re-upload the original file**
   - Don't upload an image that was already compressed

### Images aren't showing on my published portfolio

**Troubleshooting:**

1. **Check if images uploaded successfully**
   - Go to Media Library
   - Confirm images appear there

2. **Refresh your published portfolio**
   - It can take a few minutes for changes to propagate
   - Try a hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

3. **Check image visibility settings**
   - Make sure images aren't set to "hidden"

4. **Try a different browser/device**
   - Could be a caching issue

5. **Check file format**
   - Ensure you're using supported formats (JPG, PNG, GIF, WebP)

**Still not showing?** The image URL might be broken. Try re-uploading.

## Saving & Publishing Issues

### My changes aren't saving

**Immediate actions:**

1. **Don't close the editor!**
2. **Copy any unsaved text to a safe place**
3. **Check your internet connection**

**Then try:**

1. **Manual save**
   - Click the Save button explicitly
   - Look for a "Saved" confirmation message

2. **Wait for autosave**
   - Autosave happens every 30 seconds
   - Look for the autosave indicator

3. **Check browser console**
   - Press F12 → Console tab
   - Look for error messages

4. **Try saving individual sections**
   - Save each section one at a time
   - This can help identify which section has an issue

5. **Refresh and try again**
   - As a last resort, refresh the page
   - You may lose recent unsaved changes

**Prevention:** Save frequently and check for the "Saved" confirmation!

### I published my portfolio but can't see the changes

**This is usually a caching issue:**

1. **Hard refresh the page**
   - Mac: Cmd+Shift+R
   - Windows: Ctrl+Shift+R
   - Mobile: Pull down to refresh

2. **Clear your browser cache**
   - Or try in incognito/private mode

3. **Check on a different device**
   - See if changes appear on another device
   - Try mobile vs desktop

4. **Wait a few minutes**
   - CDN updates can take 2-5 minutes to propagate globally

5. **Verify you're looking at the right URL**
   - Make sure you're viewing the live site, not the editor preview

**Tip:** Test in incognito mode to see changes without cache interference.

### My portfolio URL isn't working

**Common issues:**

1. **URL not available**
   - Someone else might have claimed that subdomain
   - Try a different URL

2. **Typo in the URL**
   - Double-check spelling
   - URLs are case-sensitive

3. **Portfolio not published**
   - Make sure you clicked "Publish"
   - Check Settings → Privacy → Ensure it's set to "Public"

4. **Custom domain not configured correctly**
   - Check your domain settings

5. **Recent URL change**
   - DNS changes can take up to 24-48 hours
   - Use your old URL until the new one propagates

**Test your URL:** Try accessing it in incognito mode.

## Editor & Performance Issues

### The editor is slow or laggy

**Common causes:**

1. **Too many browser tabs open**
   - Close unnecessary tabs
   - Restart your browser

2. **Large images**
   - Optimize images before uploading

3. **Low memory**
   - Close other applications
   - Restart your computer

4. **Browser extensions**
   - Disable extensions temporarily
   - Try incognito mode

5. **Outdated browser**
   - Update to the latest browser version
   - We recommend Chrome for best performance

**Quick fixes:**
- Refresh the page
- Clear browser cache
- Use a modern browser (Chrome, Firefox, Safari, Edge)

### Undo isn't working

**Possible reasons:**

1. **You've reached the undo limit**
   - We store up to 50 undo steps

2. **You refreshed the page**
   - Refreshing clears the undo history

3. **Browser issue**
   - Try Cmd+Z (Mac) or Ctrl+Z (Windows)
   - Some browsers have keyboard shortcut conflicts

**Tip:** Save frequently so you can revert to a known good state!

### Text formatting isn't working

**Troubleshooting:**

1. **Use the toolbar buttons**
   - Instead of keyboard shortcuts
   - Different browsers handle shortcuts differently

2. **Copy plain text**
   - When pasting from Word/Google Docs
   - Use "Paste as Plain Text" option

3. **Clear formatting**
   - Select text → Click "Clear Formatting" button
   - Reapply formatting manually

4. **Check for character limits**
   - Some fields have maximum character counts
   - Try shortening your text

5. **Avoid special characters**
   - Stick to standard characters
   - Emojis are fine, but some special symbols may not work

## Display & Styling Issues

### Colors look different on my published portfolio

**Common reasons:**

1. **Color profile differences**
   - Different devices display colors differently
   - This is normal

2. **Monitor calibration**
   - Your screen might not be calibrated
   - Check on multiple devices

3. **Dark mode**
   - Some browsers/devices use dark mode
   - Test in both light and dark mode

4. **Browser rendering**
   - Different browsers render colors slightly differently
   - This is normal and usually minimal

**Tip:** Test your portfolio on multiple devices and browsers.

### My custom CSS isn't working

**Pro feature troubleshooting:**

1. **Check CSS syntax**
   - Even small typos break CSS
   - Use a CSS validator

2. **Specificity issues**
   - Your CSS might be overridden by default styles
   - Use more specific selectors

3. **Cached styles**
   - Clear browser cache
   - Hard refresh the page

4. **Unsupported properties**
   - Some CSS properties are restricted for security
   - Check the custom CSS documentation

### Layout is broken on mobile

**Troubleshooting:**

1. **Test in mobile view**
   - Use browser dev tools (F12)
   - Toggle device toolbar

2. **Check image sizes**
   - Large images can break mobile layouts
   - Use responsive image sizes

3. **Clear mobile cache**
   - Mobile browsers cache aggressively
   - Clear cache or use private browsing

4. **Report the issue**
   - If it's a template issue, let us know
   - Email: support@prodfolio.com with screenshots

## Account Issues

### I can't change my email address

**Steps:**

1. **Verify current email first**
   - Settings → Account → Verify Email
   - Check verification email in your current inbox

2. **Update email**
   - Settings → Account → Change Email
   - Enter new email address

3. **Verify new email**
   - Check new inbox for verification email
   - Click verification link

**Troubleshooting:**
- Email might already be in use by another account
- Check spam folder for verification email
- Wait a few minutes and try again

### I can't delete my account

**Required steps before deletion:**

1. **Cancel active subscription**
   - Settings → Billing → Cancel Subscription
   - Wait for cancellation to process

2. **Download your data (optional)**
   - Settings → Privacy → Request Data Export
   - Save your data before deleting

3. **Confirm deletion**
   - Settings → Account → Delete Account
   - Type "DELETE" to confirm
   - This action cannot be undone

**Still can't delete?** Contact support@prodfolio.com

## Billing Issues

### My payment failed

**Common causes:**

1. **Insufficient funds**
2. **Expired card**
3. **Bank declined the transaction**
4. **Incorrect card details**

**Solutions:**

1. **Update payment method**
   - Settings → Billing → Update Card
   - Enter correct card details

2. **Try a different card**
   - Use another payment method

3. **Contact your bank**
   - They may have flagged the transaction as suspicious
   - Authorize the charge and try again

4. **Use a different payment method**
   - Try Apple Pay or Google Pay

### I was charged twice

**This is usually:**
- An authorization hold that will drop off
- Or an actual duplicate charge (rare)

**What to do:**

1. **Wait 3-5 business days**
   - Authorization holds usually resolve automatically

2. **Check your billing history**
   - Settings → Billing → Billing History
   - See if both charges are confirmed

3. **Contact support**
   - Email: support@prodfolio.com
   - Include:
     - Your email address
     - Transaction dates
     - Amount charged
     - Last 4 digits of card

We'll investigate and issue a refund if needed.

## Performance Issues

### My portfolio loads slowly

**Optimization steps:**

1. **Optimize images**
   - Compress images before uploading
   - Use appropriate file formats (WebP when possible)

2. **Reduce number of projects**
   - Consider pagination or featured projects only

3. **Minimize custom code**
   - Heavy custom CSS/scripts can slow things down

4. **Check your internet connection**
   - Test your portfolio on a fast connection
   - Mobile data can be slower

5. **Use fewer large videos**
   - Consider linking to Vimeo/YouTube instead of hosting

**Run a speed test:**
- Use Google PageSpeed Insights
- Enter your portfolio URL
- Follow optimization recommendations

## Data & Content Issues

### My content disappeared

**Don't panic! Try this:**

1. **Check if you're logged in**
   - You might have been logged out
   - Log back in

2. **Check the correct account**
   - Make sure you're in the right account
   - You might have multiple accounts

3. **Check portfolio visibility**
   - Settings → Privacy
   - Make sure it's not set to "Private"

4. **Check revision history**
   - We auto-save frequently
   - You may be able to restore a previous version

5. **Contact support immediately**
   - support@prodfolio.com
   - We keep backups and can often recover data

**Prevention:** Regularly export your data as a backup!

### I can't find my project

**Check:**

1. **Search your projects**
   - Use the search bar in the editor

2. **Check filters**
   - You might have active filters hiding the project

3. **Check archived projects**
   - Projects → Archived
   - Unarchive if needed

4. **You might have deleted it**
   - Check trash/recently deleted
   - Contact support if it was deleted accidentally

## Getting More Help

### When should I contact support?

Contact us if:
- You've tried the troubleshooting steps above
- You're experiencing a bug
- You need help with a technical issue
- You have billing questions
- You want to report a security issue

### What information should I include?

**Help us help you faster:**

1. **Your account email**
2. **Description of the problem**
3. **What you were trying to do**
4. **Steps to reproduce the issue**
5. **Browser and operating system**
6. **Screenshots** (if helpful)
7. **Error messages** (if any)

### How long until I get a response?

- **Email support:** Within 24-48 hours
- **Pro chat support:** Usually within a few hours during business hours
- **Urgent issues:** Mark as "Urgent" in your email subject

**Still need help?** Contact support@prodfolio.com
    `
  }
];

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find(article => article.slug === slug);
}
