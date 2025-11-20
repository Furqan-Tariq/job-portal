"use client"

import { useState } from "react"
import { EmployerSidebar } from "@/components/employer-home/EmployerSidebar"
import { EmployerHeader } from "@/components/employer-home/EmployerHeader"
import { EmployerFooter } from "@/components/employer-home/EmployerFooter"
import { UserMenu } from "@/components/employer-home/UserMenu"
import { EmployerProfileHeaderCard } from "@/components/employer-profile/EmployerProfileHeaderCard"
import { EmployerAboutCard } from "@/components/employer-profile/EmployerAboutCard"
import { EmployerContactCard } from "@/components/employer-profile/EmployerContactCard"
import { EmployerAttachmentsCard } from "@/components/employer-profile/EmployerAttachmentsCard"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EmployerProfilePage() {
  const [activeSection, setActiveSection] = useState<null | "profile" | "about" | "contact" | "attachments">(null)

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <EmployerSidebar />

      <div className="flex flex-1 flex-col">
        {/* Header */}
        <EmployerHeader />

        {/* Main Content */}
        <main className="flex-1 bg-muted">
          {/* Top grey banner */}
          <div className="bg-slate-600 h-32 w-full" />

          <div className="w-full -mt-16 pb-8">
            <div className="container-custom max-w-6xl mx-auto space-y-6">
              {/* Profile Header Card */}
              {(activeSection === null || activeSection === "profile") && (
                <EmployerProfileHeaderCard
                  isEditing={activeSection === "profile"}
                  onEdit={() => setActiveSection("profile")}
                  onCancel={() => setActiveSection(null)}
                />
              )}

              {/* Lower section cards */}
              {activeSection === null && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left column - About (wider) */}
                  <div className="lg:col-span-2">
                    <EmployerAboutCard
                      isEditing={false}
                      onEdit={() => setActiveSection("about")}
                      onCancel={() => setActiveSection(null)}
                    />
                  </div>

                  {/* Right column - Contact and Attachments */}
                  <div className="space-y-6">
                    <EmployerContactCard
                      isEditing={false}
                      onEdit={() => setActiveSection("contact")}
                      onCancel={() => setActiveSection(null)}
                    />
                    <EmployerAttachmentsCard
                      isEditing={false}
                      onEdit={() => setActiveSection("attachments")}
                      onCancel={() => setActiveSection(null)}
                    />
                  </div>
                </div>
              )}

              {/* Edit mode - show only the active section */}
              {activeSection === "about" && (
                <EmployerAboutCard
                  isEditing={true}
                  onEdit={() => setActiveSection("about")}
                  onCancel={() => setActiveSection(null)}
                />
              )}

              {activeSection === "contact" && (
                <EmployerContactCard
                  isEditing={true}
                  onEdit={() => setActiveSection("contact")}
                  onCancel={() => setActiveSection(null)}
                />
              )}

              {activeSection === "attachments" && (
                <EmployerAttachmentsCard
                  isEditing={true}
                  onEdit={() => setActiveSection("attachments")}
                  onCancel={() => setActiveSection(null)}
                />
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <EmployerFooter />
      </div>
    </div>
  )
}
