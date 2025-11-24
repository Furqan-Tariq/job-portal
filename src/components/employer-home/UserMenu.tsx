"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { apiFetch } from "@/lib/api"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserMenu() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)

    try {
      // 🔥 Automatically sends Authorization: Bearer <token>
      await apiFetch("/logout", {
        method: "POST",
      })
    } catch (err) {
      console.error("Logout error:", err)
      // Continue anyway
    } finally {
      // ❌ Remove token no matter what
      if (typeof window !== "undefined") {
        localStorage.removeItem("token")
      }

      // Redirect user to login page
      router.push("/employer/login")

      setIsLoggingOut(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center hover:bg-primary-dark">
          UF
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 bg-white border border-border shadow-lg rounded-md"
      >
        <DropdownMenuLabel className="text-text-primary">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("/employer/settings")}>
          Settings
        </DropdownMenuItem>

        {/* LOGOUT BUTTON */}
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-destructive cursor-pointer"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
