"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Users } from "lucide-react"

interface EmployerContactCardProps {
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
}

export function EmployerContactCard({ isEditing, onEdit, onCancel }: EmployerContactCardProps) {
  if (isEditing) {
    return (
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Edit Contact form will go here.</h3>
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
        <CardTitle className="text-sm font-semibold uppercase text-foreground">Contact</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 h-8 text-xs bg-transparent"
          onClick={onEdit}
        >
          <Plus className="h-3 w-3 mr-1" />
          Add
        </Button>
      </CardHeader>
      <CardContent className="py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">This employer hasn't added any contacts yet.</p>
        </div>
      </CardContent>
    </Card>
  )
}
