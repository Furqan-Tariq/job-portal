"use client"

import { useEffect, useState } from "react"
import { BriefcaseBusiness } from "lucide-react"

// Adjust to match your backend base URL (same as other places)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

type Application = {
  id: string
  name: string
  email: string
  phoneNumber?: string
  coverLetter?: string
  cvFile?: string
  jobTitle?: string
  createdAt?: string
}

function mapApiApplication(apiApp: any): Application {
  return {
    id: String(apiApp.id ?? ""),
    name: apiApp.name ?? "Unknown applicant",
    email: apiApp.email ?? "No email",
    phoneNumber: apiApp.phone_number ?? apiApp.phone ?? undefined,
    coverLetter: apiApp.cover_letter ?? undefined,
    cvFile: apiApp.cv_file ?? apiApp.cv_path ?? undefined,
    jobTitle:
      apiApp.job_title ??
      apiApp.job?.title ??
      undefined,
    createdAt: apiApp.created_at ?? undefined,
  }
}

async function fetchApplications(): Promise<Application[]> {
  if (!API_BASE_URL) {
    console.error(
      "NEXT_PUBLIC_API_BASE_URL is not set. Add it to your .env and Vercel project."
    )
    return []
  }

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null

  if (!token) {
    console.warn(
      "[EmployerApplicationsSection] No auth token in localStorage. User might not be logged in."
    )
    return []
  }

  try {
    const res = await fetch(`${API_BASE_URL}/applications`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    // console.log("Raw data: ", res);

    if (!res.ok) {
      let message = `Request failed with status ${res.status}`
      try {
        const body = (await res.json()) as { message?: string }
        if (body?.message) message = body.message
      } catch {
        // ignore parse error
      }
      throw new Error(message)
    }

    const data = await res.json()

    // 🔥 Log everything coming from the API so you can inspect fields
    // console.log("🔥 RAW /applications API RESPONSE:", data)

    const rawApps: any[] = Array.isArray(data) ? data : data.data ?? []

    return rawApps.map(mapApiApplication)
  } catch (error) {
    console.error("Failed to fetch applications:", error)
    return []
  }
}

export function EmployerApplicationsSection() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    ;(async () => {
      setLoading(true)
      setError(null)

      try {
        const apps = await fetchApplications()
        if (isMounted) {
          setApplications(apps)
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message ?? "Failed to load applications.")
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    })()

    return () => {
      isMounted = false
    }
  }, [])

  const hasApps = applications.length > 0

  return (
    <section className="space-y-4 pb-10">
      <h2 className="text-2xl font-semibold text-text-primary">
        Your applications
      </h2>

      {/* Loading state */}
      {loading && (
        <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <BriefcaseBusiness className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-text-secondary">
            Loading applications…
          </p>
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="bg-white rounded-lg shadow-sm p-10 text-center space-y-3">
          <p className="text-sm text-destructive font-medium">
            Failed to load applications.
          </p>
          <p className="text-xs text-text-secondary break-words">
            {error}
          </p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && !hasApps && (
        <div className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <BriefcaseBusiness className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-text-secondary">
            You have not received any applications yet.
          </p>
        </div>
      )}

      {/* List of applications */}
      {!loading && !error && hasApps && (
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <ul className="divide-y divide-muted">
            {applications.map((app) => (
              <li key={app.id} className="py-4 flex flex-col gap-1">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">
                      {app.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {app.email}
                      {app.phoneNumber ? ` · ${app.phoneNumber}` : ""}
                    </p>
                  </div>

                  {app.createdAt && (
                    <p className="text-xs text-text-secondary whitespace-nowrap">
                      Applied on{" "}
                      {app.createdAt.slice(0, 10)}
                    </p>
                  )}
                </div>

                {app.jobTitle && (
                  <p className="text-xs text-text-secondary">
                    Job: <span className="font-medium">{app.jobTitle}</span>
                  </p>
                )}

                {app.coverLetter && (
                  <p className="text-xs text-text-secondary line-clamp-2">
                    <span className="font-semibold">Cover letter: </span>
                    {app.coverLetter}
                  </p>
                )}

                {app.cvFile && (
                  <p className="text-xs text-text-secondary">
                    <span className="font-semibold">CV file: </span>
                    {app.cvFile}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
