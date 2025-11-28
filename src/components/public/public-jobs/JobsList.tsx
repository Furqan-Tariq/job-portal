"use client"

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { JobListItem } from "./JobListItem"
import type { Job } from "./JobsPageShell"

type JobsListProps = {
  jobs: Job[]
  selectedJobId: string | null
  onSelectJob: (id: string) => void
}

export function JobsList({ jobs, selectedJobId, onSelectJob }: JobsListProps) {
  if (jobs.length === 0) {
    return (
      <Card className="p-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">No jobs match your filters.</p>
          <p className="text-sm text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <ScrollArea className="h-[600px]">
        <div className="divide-y">
          {jobs.map((job) => (
            <JobListItem
              key={job.id}
              job={job}
              isSelected={job.id === selectedJobId}
              onClick={() => onSelectJob(job.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
