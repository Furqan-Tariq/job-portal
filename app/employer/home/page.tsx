import { EmployerSidebar } from "@/components/employer-home/EmployerSidebar"
import { EmployerFooter } from "@/components/employer-home/EmployerFooter"
import { WelcomeBanner } from "@/components/employer-home/WelcomeBanner"
import { VerificationCard } from "@/components/employer-home/VerificationCard"
import { EmptyJobsCard } from "@/components/employer-home/EmptyJobsCard"
import { UserMenu } from "@/components/employer-home/UserMenu"

import { Button } from "@/components/ui/button"
import { Facebook, BriefcaseBusiness } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EmployerDashboard() {
  return (
    // (1) & (2) Sidebar goes to very top, header starts AFTER sidebar
    <div className="min-h-screen flex bg-muted">
      {/* Left sidebar, full height */}
      <EmployerSidebar />

      {/* Right side: header + main content + footer */}
      <div className="flex flex-1 flex-col">
        {/* HEADER */}
        <header className="bg-white border-b border-border">
          <div className="container-custom flex items-center justify-between py-4">
            {/* Logo + nav */}
            {/* (3) Increase gap between logo and nav links via gap-10 */}
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-3 mr-4">
                <Image
                  src="/logo.png"
                  alt="Oberland JOBS"
                  width={140}
                  height={40}
                />
              </div>

              <nav className="flex items-center gap-6 text-sm font-medium text-text-secondary">
                <Link href="#" className="hover:text-text-primary">
                  Product
                </Link>
                <Link href="#" className="hover:text-text-primary">
                  Shop
                </Link>
              </nav>
            </div>

            {/* Right header controls */}
            <div className="flex items-center gap-4">
              {/* (4) FB button has primary (orange) background by default */}
              <Button
                size="icon"
                className="bg-primary text-text-white hover:bg-primary-dark rounded-full h-10 w-10 flex items-center justify-center"
                aria-label="Facebook"
                >
                <Facebook className="h-4 w-4" />
            </Button>

              <Button className="bg-primary text-text-white hover:bg-primary-dark">
                For Employers
              </Button>

              <UserMenu />
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {/* (5) Centered/narrower content: extra padding + max-w-5xl */}
          <div className="w-full py-8">
            <div className="container-custom max-w-5xl mx-auto space-y-8">
              {/* Welcome banner */}
              <WelcomeBanner />

              {/* Overview of job advertisements */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-text-primary">
                  Overview of job advertisements
                </h2>

                <VerificationCard />
                <EmptyJobsCard />
              </section>

              {/* Your applications */}
              <section className="space-y-4 pb-10">
                <h2 className="text-2xl font-semibold text-text-primary">
                  Your applications
                </h2>

                <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <BriefcaseBusiness className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-text-secondary">
                    You have not received any applications yet.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* FOOTER (already starts after sidebar, like header now) */}
        <EmployerFooter />
      </div>
    </div>
  )
}
