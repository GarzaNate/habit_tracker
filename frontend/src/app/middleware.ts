import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Check if the user is trying to access a protected route
  const protectedRoutes = ["/dashboard", "/habits", "/settings"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If the route is protected and no token is found, redirect to login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in, allow access to the protected routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/habits/:path*", "/settings/:path*"],
};