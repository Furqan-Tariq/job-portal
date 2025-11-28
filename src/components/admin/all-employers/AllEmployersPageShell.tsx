"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdminEmployer } from "@/components/admin/all-employers/types"
import { EmployerCard } from "@/components/admin/all-employers/EmployerCard"
import { apiFetch } from "@/lib/api"

function mapApiUserToAdminEmployer(apiUser: any): AdminEmployer {
  return {
    id: String(apiUser.id ?? ""),
    name:
      apiUser.name ??
      apiUser.full_name ??
      apiUser.username ??
      "Unnamed employer",
    email: apiUser.email ?? "No email",
    companyName: apiUser.organization?.title ?? undefined,
    status: apiUser.status ?? undefined,
    createdAt: apiUser.created_at ?? undefined,
    country: apiUser.organization?.country ?? undefined,
    city: apiUser.organization?.area ?? undefined,
  }
}

export function AllEmployersPageShell() {
  const [employers, setEmployers] = useState<AdminEmployer[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    let cancelled = false

    async function loadEmployers() {
      try {
        setIsLoading(true)
        setError(null)

        const data = await apiFetch("/admin/users", {
          method: "GET",
        })

        // 🔍 Log raw API response for debugging field names
        console.log("🔍 /admin/users raw response:", data)

        const usersArray: any[] = Array.isArray(data?.data) ? data.data : []

        // ❌ Filter out admins: role_names[0] === "admin"
        const nonAdminUsers = usersArray.filter((user) => {
          const roleNames: string[] = Array.isArray(user.role_names)
            ? user.role_names
            : []
          return roleNames[0] !== "admin"
        })

        const mapped = nonAdminUsers.map(mapApiUserToAdminEmployer)

        if (!cancelled) {
          setEmployers(mapped)
        }
      } catch (err: any) {
        console.error("Failed to load employers:", err)
        if (!cancelled) {
          setError(
            err?.message ?? "Failed to load employers. Please try again.",
          )
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadEmployers()

    return () => {
      cancelled = true
    }
  }, [])

  const filteredEmployers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return employers

    return employers.filter((emp) => {
      return (
        emp.name.toLowerCase().includes(term) ||
        emp.email.toLowerCase().includes(term) ||
        (emp.companyName ?? "").toLowerCase().includes(term) ||
        (emp.city ?? "").toLowerCase().includes(term) ||
        (emp.country ?? "").toLowerCase().includes(term)
      )
    })
  }, [employers, searchTerm])

//   function handleDeleteClick(employer: AdminEmployer) {
//     // TODO: integrate real DELETE /admin/users/{id} later
//     console.log("🗑️ Delete employer clicked:", employer)
//     alert(
//       `TODO: implement delete for employer ID ${employer.id}. See console for full object.`,
//     )
//   }

  return (
    <main className="min-h-screen bg-muted flex-1">
      {/* Header / Title */}
      <div className="w-full py-8">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            All Employers
          </h1>
          <p className="text-muted-foreground">
            View and manage employer accounts in the system.
          </p>
        </div>
      </div>

      {/* Filters bar – simple search for now */}
      <div className="pb-4">
        <div className="container-custom max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-border p-4 md:p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 flex flex-col gap-2 md:flex-row md:items-center">
              <Input
                placeholder="Search Employers"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSearchTerm("")}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content: employers list */}
      <div className="pb-10">
        <div className="container-custom max-w-5xl mx-auto px-4 space-y-4">
          {isLoading && (
            <p className="text-sm text-muted-foreground">
              Loading employers…
            </p>
          )}

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          {!isLoading && !error && filteredEmployers.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No employers found.
            </p>
          )}

          {filteredEmployers.map((employer) => (
            <EmployerCard
              key={employer.id}
              employer={employer}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
