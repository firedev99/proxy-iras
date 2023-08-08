import { NextResponse, NextRequest } from "next/server"

export const config = {
  matcher: ["/", "/login", "/courses/:path*", "/works/:path*", "/profile"],
}

export function middleware(req: NextRequest) {
  const isPublicPath = req.nextUrl.pathname === "/login"
  const token = req.cookies.get("user-token")?.value

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  // redirect to login page if token was not found
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }
}
