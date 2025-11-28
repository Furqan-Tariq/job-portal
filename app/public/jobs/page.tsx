// app/public/jobs/page.tsx
import { Suspense } from "react"
import { JobsPageShell } from "@/components/public/public-jobs/JobsPageShell"

// Note: no "use client" here – this stays a Server Component

export default function JobsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-muted-foreground">
          Loading jobs…
        </div>
      }
    >
      <JobsPageShell />
    </Suspense>
  )
}
