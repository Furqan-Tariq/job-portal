"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { AdminEmployer } from "@/components/admin/all-employers/types"
import { MapPin, Edit, Trash2, Info } from "lucide-react"
import Link from "next/link"
import { apiFetch } from "@/lib/api"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

type EmployerCardProps = {
  employer: AdminEmployer
  // onDeleteClick?: (employer: AdminEmployer) => void  // optional, not used now
}

export function EmployerCard({ employer }: EmployerCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const statusLabel = employer.status || "unknown"
  const createdDate =
    employer.createdAt && typeof employer.createdAt === "string"
      ? employer.createdAt.slice(0, 10)
      : ""

  const locationPieces = [employer.city, employer.country].filter(Boolean)
  const location = locationPieces.join(", ") || "Location not specified"

  const handleDeleteConfirmed = async () => {
    if (isDeleting) return

    try {
      setIsDeleting(true)

      // 🔥 DELETE /admin/users/{id} – admin token comes from apiFetch (admin cookie)
      await apiFetch(`/admin/users/${employer.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      })

      // Simplest way to refresh list after delete
      if (typeof window !== "undefined") {
        window.location.reload()
      }
    } catch (err) {
      console.error("Failed to delete employer:", err)
      alert("Failed to delete employer. Please try again.")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card className="shadow-sm border border-gray-200">
      <CardContent className="p-5 md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start">
          <div className="flex-1">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-md bg-[#FDB714] text-white px-3 py-1 text-xs font-semibold">
              <Info className="w-3 h-3" />
              <span>{statusLabel}</span>
            </div>

            {/* Name */}
            <div className="mt-2 text-sm text-gray-800">
              <span className="font-semibold">Employer: </span>
              <span className="text-[#FDB714] font-semibold">
                {employer.name || "Unnamed employer"}
              </span>
            </div>

            {/* Company */}
            <div className="mt-1 text-sm text-gray-800">
              <span className="font-semibold">Company: </span>
              <span>{employer.companyName || "—"}</span>
            </div>

            {/* Email */}
            <div className="mt-1 text-sm text-gray-800">
              <span className="font-semibold">Email: </span>
              <span>{employer.email}</span>
            </div>

            {/* Location */}
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="w-4 h-4" />
              <span>
                <span className="font-semibold">Location: </span>
                {location}
              </span>
            </div>

            {/* Created at */}
            {createdDate && (
              <div className="mt-2 text-xs text-gray-500">
                <span className="font-semibold">Created at: </span>
                <span>{createdDate}</span>
              </div>
            )}
          </div>

          {/* Right side: Edit + Delete */}
          <div className="mt-2 flex items-start gap-3 md:mt-0 md:flex-col md:items-end">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-1 md:mt-2"
            >
              <Link href={`/admin/employers/${employer.id}/edit`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            {/* DELETE with confirmation dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-1 md:mt-2"
                  disabled={isDeleting}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  {isDeleting ? "Deleting…" : "Delete"}
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Delete this employer?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">
                      {employer.name || employer.email}
                    </span>
                    ? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isDeleting}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      e.preventDefault()
                      handleDeleteConfirmed()
                    }}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting…" : "Delete"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
