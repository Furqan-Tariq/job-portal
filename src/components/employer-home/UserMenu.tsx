"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center hover:bg-primary-dark">
          UF
        </button>
      </DropdownMenuTrigger>

      {/* FIX FOR ISSUE #1 → Added bg-white and border */}
      <DropdownMenuContent
        align="end"
        className="w-44 bg-white border border-border shadow-lg rounded-md"
      >
        <DropdownMenuLabel className="text-text-primary">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
