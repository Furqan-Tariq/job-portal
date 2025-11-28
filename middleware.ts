// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const employerToken = request.cookies.get("employer_token")?.value
  const adminToken = request.cookies.get("admin_token")?.value

  // 🔹 EMPLOYER AREA
  if (pathname.startsWith("/employer")) {
    const publicEmployerPaths = [
      "/employer/login",
      "/employer/register",
      "/employer/forgot-password",
    ]

    const isPublic = publicEmployerPaths.some((publicPath) =>
      pathname.startsWith(publicPath),
    )

    if (isPublic) {
      // Optional: prevent logged-in employers from seeing login/register again
      if (employerToken && pathname.startsWith("/employer/login")) {
        return NextResponse.redirect(new URL("/employer/home", request.url))
      }
      return NextResponse.next()
    }

    // ❌ No employer cookie → force employer login
    if (!employerToken) {
      const loginUrl = new URL("/employer/login", request.url)
      loginUrl.searchParams.set("redirectTo", pathname + request.nextUrl.search)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 🔹 ADMIN AREA
  if (pathname.startsWith("/admin")) {
    const publicAdminPaths = ["/admin/login"]

    const isPublic = publicAdminPaths.some((publicPath) =>
      pathname.startsWith(publicPath),
    )

    if (isPublic) {
      // Optional: prevent logged-in admins from seeing login again
      if (adminToken && pathname.startsWith("/admin/login")) {
        return NextResponse.redirect(new URL("/admin/home", request.url))
      }
      return NextResponse.next()
    }

    // ❌ No admin cookie → force admin login
    if (!adminToken) {
      const loginUrl = new URL("/employer/login", request.url)
      loginUrl.searchParams.set("redirectTo", pathname + request.nextUrl.search)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/employer/:path*", "/admin/:path*"],
}
