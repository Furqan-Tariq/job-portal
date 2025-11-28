"use client"

import "./globals.css"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { Footer } from "@/components/layout/SiteFooter"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Hide header/footer for both employer + admin routes
  const isEmployerRoute = pathname.startsWith("/employer")
  const isAdminRoute = pathname.startsWith("/admin")

  const hideLayout = isEmployerRoute || isAdminRoute

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Show header only on public pages */}
        {!hideLayout && <SiteHeader />}

        {children}

        {/* Show footer only on public pages */}
        {!hideLayout && <Footer />}
      </body>
    </html>
  )
}
