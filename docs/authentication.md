# Authentication

All authentication in this app is handled by **Clerk** (`@clerk/nextjs`). No other auth method, library, or custom session/token/password logic may be introduced.

## Rules

- Use only Clerk components, hooks, and helpers (`ClerkProvider`, `SignInButton`, `SignUpButton`, `UserButton`, `Show`, `auth()`, `currentUser()`).
- Get the current user id server-side via `auth()` from `@clerk/nextjs/server`. Never accept a user id from the client.
- Clerk is configured in `app/layout.tsx` (`ClerkProvider`) and `proxy.ts` (`clerkMiddleware`). Keep `proxy.ts` as the middleware entry point (Next.js 16).
- Secrets (`CLERK_SECRET_KEY`, etc.) come from environment variables only.

## Route Protection

| Route        | Rule                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `/dashboard` | Protected. Signed-out users must not be able to access it.           |
| `/` (home)   | Signed-in users must be redirected to `/dashboard`.                  |

- Enforce protection in `proxy.ts` with `clerkMiddleware` + `createRouteMatcher`, calling `auth.protect()` for protected routes. Any new route under `/dashboard` is protected too.
- Redirect signed-in users away from `/` in `proxy.ts` (or with `redirect("/dashboard")` in the page after checking `auth()`).
- Pages and Server Actions that touch user data must still call `auth()` and handle a missing `userId`; do not rely on the middleware alone.

```ts
// proxy.ts (pattern)
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (isProtectedRoute(req)) await auth.protect();
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});
```

## Sign In / Sign Up

- Sign in and sign up must **always open as a modal**. Use `mode="modal"` on every trigger:

```tsx
<SignInButton mode="modal" />
<SignUpButton mode="modal" />
```

- Do not link to or navigate users to a full-page sign-in/sign-up flow from app UI. Any `SignInButton`/`SignUpButton` without `mode="modal"` is a bug.
- Use `Show` (`when="signed-in"` / `when="signed-out"`) to toggle auth UI; use `UserButton` for the signed-in account menu.
