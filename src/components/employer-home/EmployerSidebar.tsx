"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, Briefcase, Users, FileText, Building2, UserCircle, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/employer", active: true },
  { icon: Briefcase, label: "Jobs", href: "/employer/jobs", active: false },
  { icon: Users, label: "Candidacies", href: "/employer/candidacies", active: false },
  { 
    icon: FileText, 
    label: "Contract & Products", 
    href: "/employer/contracts", 
    active: false, 
    hasSubmenu: true 
  },
  { icon: Building2, label: "Enterprise", href: "/employer/enterprise", active: false },
  { icon: UserCircle, label: "Employer Profile", href: "/employer/profile", active: false },
]

export function EmployerSidebar() {
  const [isContractOpen, setIsContractOpen] = useState(false)

  return (
    <aside className="hidden lg:flex w-64 bg-white border-r border-border flex-col">
      <nav className="flex-1 py-6">
        {navItems.map((item) => (
          <div key={item.label}>
            <Link
              href={item.href}
              onClick={(e) => {
                if (item.hasSubmenu) {
                  e.preventDefault()
                  setIsContractOpen(!isContractOpen)
                }
              }}
              className={cn(
                "flex items-center gap-3 px-6 py-3 text-sm transition-colors",
                item.active
                  ? "text-primary bg-primary/5 border-l-4 border-primary"
                  : "text-foreground hover:bg-muted hover:text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1">{item.label}</span>
              {item.hasSubmenu && (
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isContractOpen && "rotate-180"
                  )} 
                />
              )}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  )
}
