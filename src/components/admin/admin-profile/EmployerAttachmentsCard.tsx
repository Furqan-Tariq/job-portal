"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

interface EmployerAttachmentsCardProps {
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
}

export function EmployerAttachmentsCard({ isEditing, onEdit, onCancel }: EmployerAttachmentsCardProps) {
  if (isEditing) {
    return (
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Edit Attachments form will go here.</h3>
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
        <CardTitle className="text-xs font-semibold uppercase text-foreground leading-tight">
          Attachments with more information about your organization
        </CardTitle>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8 rounded-full" onClick={onEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Upload additional documents about your organization here. Adding employee benefits helps you show candidates
          what additional benefits your organization offers.
        </p>
      </CardContent>
    </Card>
  )
}
