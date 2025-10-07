# Allowlist Testing Guide

## Test Cases

### Test A (Allowlisted User)
- **Setup**: Mock user with email "meag.glenn@gmail.com" 
- **Expected**: 
  - No "beta-only" toast appears
  - User successfully logs in and lands on `/app/portfolios`
  - `data-testid="main-app-container"` is accessible

### Test B (Non-allowlisted User)  
- **Setup**: Mock user with email "blocked@example.com"
- **Expected**:
  - Toast appears with message "Our beta is invite-only right now"
  - URL does not change (no navigation)
  - User is signed out
  - Toast has accessible content for testing

## Manual Testing Steps

1. **Test allowlisted email**:
   ```
   1. Go to login
   2. Enter: meag.glenn@gmail.com / any password
   3. Verify: No toast, successful login to /app/portfolios
   ```

2. **Test non-allowlisted email**:
   ```
   1. Go to login  
   2. Enter: test@blocked.com / any password
   3. Verify: Toast shows, URL unchanged, user signed out
   ```

## Debugging Console Logs

When testing, check browser console for these logs:
- "allowlist check: checking email [email]"
- "allowlist check result: {email, isAllowed, foundData}"
- "useAllowlistCheck: result for [email]: [boolean]"
- "Auth state effect: {hasUser, userEmail, isAllowed, isChecking}"
- "User is allowlisted - setting logged in to true" OR "User is NOT allowlisted - showing toast and signing out"