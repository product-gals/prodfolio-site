# Marketing Site Conversion Summary

## Overview
Converted Prodfolio from a full-stack app to a marketing-only website. All CTAs now redirect to the external app at `app.prodfolio.io`.

## Changes Made

### 1. Updated CTAs to External Links
- **Landing Page**: All "Get started free" buttons now link to `https://app.prodfolio.io/signup`
- **Navbar**: 
  - "Log In" → `https://app.prodfolio.io/login`
  - "Sign Up" / "Start your portfolio" → `https://app.prodfolio.io/signup`
- All buttons use `<a href>` tags (no client-side modals or auth logic)

### 2. Removed Authentication & Session Code
**Deleted Files:**
- `src/components/AuthModal.tsx`
- `src/hooks/useAllowlistCheck.ts`
- `src/hooks/useUserRole.ts`
- `src/lib/allowlistUtils.ts`
- `src/utils/accountRegression.ts`

**Cleaned from App.tsx:**
- All auth state management (useState for user, session, login state)
- Supabase auth listeners and session checks
- Auth modal handlers
- Allowlist checking logic
- Protected route guards

### 3. Removed App Routes & Pages
**Deleted:**
- `/app/*` - All authenticated app routes
- `/dashboard` - Legacy dashboard
- `/editor` - Portfolio editor
- `/builder` - Portfolio builder
- `/settings` - User settings
- `/onboarding` - User onboarding
- `/projects` - Project management
- `/uploads` - File uploads
- `/portfolio/preview/:draftId` - Draft previews

**Deleted Files:**
- `src/pages/Settings.tsx`
- `src/pages/Portfolios.tsx`
- `src/pages/EditPortfolio.tsx`
- `src/pages/NewPortfolio.tsx`
- `src/pages/PortfolioPreview.tsx`
- `src/components/portfolio/PortfolioBuilder.tsx`
- `src/components/portfolio/builder/*` (all builder step components)
- `src/components/layout/AppLayout.tsx`
- `src/components/app-sidebar.tsx`
- `src/lib/resetEditorState.ts`

### 4. Public Routes (Kept)
- `/` - Homepage/Landing
- `/p/:slug` - Public portfolio view (read-only)
- `/p/:slug/case-study/:caseStudySlug` - Public case study view (read-only)
- `*` - 404 page for all undefined routes

### 5. Updated SEO & Robots
**sitemap.xml:**
- Updated domain to `https://prodfolio.io/`
- Removed demo portfolio entries
- Only includes homepage

**robots.txt:**
- Explicitly disallows all app paths: `/app`, `/dashboard`, `/editor`, `/builder`, `/account`, `/settings`, `/onboarding`, `/projects`, `/uploads`, `/api/`
- Updated sitemap URL to `https://prodfolio.io/sitemap.xml`

**Landing page SEO:**
- Updated canonical URL to `https://prodfolio.io/`
- Updated structured data URLs

### 6. Remaining Supabase Usage
**Kept for public data access only:**
- `src/integrations/supabase/client.ts` - Used for reading published portfolios
- `src/pages/PortfolioView.tsx` - Reads public portfolio data
- `src/pages/CaseStudyView.tsx` - Reads public case study data

These are **read-only** operations for publicly visible portfolios. No authentication required.

## Verification Checklist

✅ All CTAs redirect to `app.prodfolio.io/(login|signup)`  
✅ No auth/session code references in codebase  
✅ No user state management  
✅ No protected routes or auth guards  
✅ All app paths (``/app`, `/dashboard`, etc.) return 404  
✅ Visiting app paths shows NotFound page with link to home  
✅ robots.txt blocks app paths from indexing  
✅ sitemap.xml only includes public marketing pages  
✅ Canonical URLs use marketing domain  
✅ No localStorage/sessionStorage token usage  

## Test Instructions

1. **Homepage**: Visit `/` - should show landing page with external CTAs
2. **CTAs**: Click "Get started free" - opens `app.prodfolio.io/signup` in same tab
3. **Login**: Click "Log In" - opens `app.prodfolio.io/login` in same tab
4. **App paths**: Visit `/app`, `/dashboard`, `/editor`, etc. - all return 404
5. **DevTools**: Check Network tab - no auth API calls
6. **Console**: No session/auth errors
7. **Public portfolios**: `/p/:slug` still works for viewing published portfolios

## Architecture Notes

This is now a **pure marketing site**. No backend functionality except:
- Reading published portfolios from Supabase (public, no RLS)
- Static content serving

All user actions (signup, login, portfolio creation) happen in the separate app at `app.prodfolio.io`.
