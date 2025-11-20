// src/components/employer-home/EmployerHeader.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { UserMenu } from "@/components/employer-home/UserMenu"

export function EmployerHeader() {
  return (
    <header className="bg-white border-b border-border">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo + nav */}
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3 mr-4">
            <Link href="/employer/home" className="flex items-center">
                <Image
                src="/logo.png" // or /oberland-jobs-logo.png
                alt="Oberland JOBS"
                width={140}
                height={40}
                className="cursor-pointer"
                />
            </Link>
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
          {/* Circular FB button with orange background */}
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
  )
}
