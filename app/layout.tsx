'use client'

import "./globals.css"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { Footer } from "@/components/layout/SiteFooter"   // ⬅️ add this
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isEmployerRoute = pathname.startsWith("/employer")

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {!isEmployerRoute && <SiteHeader />}

        {children}

        {!isEmployerRoute && <Footer />}               {/* ⬅️ add this */}
      </body>
    </html>
  )
}
