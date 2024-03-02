import { NextResponse, NextRequest } from "next/server"

export const config = {
  matcher: [
    "/",
    "/login",
    "/courses/:path*",
    "/calender",
    "/profile",
    "/tools/:path*",
  ],
}

export function middleware(req: NextRequest) {
  const isPublicPath = req.nextUrl.pathname === "/login"
  const token = req.cookies.get("user-token")?.value

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  // redirect to login page if token was not found
  // handle csrf token in the client side
  if (!isPublicPath && !token) {
    const destination = req.nextUrl.href.split(
      `${process.env.NEXT_PUBLIC_URL}/`
    )[1]
    const url = destination ? `/login?callback=${destination}` : "/login"

    return NextResponse.redirect(new URL(url, req.nextUrl))
  }
}
