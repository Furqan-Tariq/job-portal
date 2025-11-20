"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Users } from "lucide-react"

interface EmployerAboutCardProps {
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
}

export function EmployerAboutCard({ isEditing, onEdit, onCancel }: EmployerAboutCardProps) {
  if (isEditing) {
    return (
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Edit About Us form will go here.</h3>
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
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase text-foreground">About Us</CardTitle>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 rounded-full" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Number of employees</span>
          <span className="font-medium text-foreground">0 - 5 employees</span>
        </div>
      </CardContent>
    </Card>
  )
}
