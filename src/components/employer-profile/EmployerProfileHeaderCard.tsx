"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Crown } from "lucide-react"
import Image from "next/image"

interface EmployerProfileHeaderCardProps {
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
}

export function EmployerProfileHeaderCard({ isEditing, onEdit, onCancel }: EmployerProfileHeaderCardProps) {
  if (isEditing) {
    return (
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Edit Employer Profile form will go here.</h3>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white shadow-sm relative">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Company image placeholder */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Company Logo"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Company info */}
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Xx</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Crown className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Head office</span>
              <span>Xx</span>
            </div>
            <p className="text-sm text-muted-foreground">xx xx</p>
            <p className="text-sm text-muted-foreground">Germany</p>
          </div>

          {/* Edit button - top right */}
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 rounded-full" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
