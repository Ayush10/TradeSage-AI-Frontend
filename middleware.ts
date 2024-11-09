import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth/");
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isApiRoute = request.nextUrl.pathname.startsWith("/api/");

  // Allow API routes to handle their own authentication
  if (isApiRoute) {
    return NextResponse.next();
  }

  // Redirect to login if no token and trying to access protected route
  if (!token && isDashboardRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Redirect to dashboard if token exists and trying to access auth pages
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};