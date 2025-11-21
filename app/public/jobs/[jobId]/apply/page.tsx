import { JobApplicationForm } from "@/components/apply/JobApplicationForm"

type PageProps = {
  params: Promise<{ jobId: string }>
}

type JobSummary = {
  id: string
  title: string
  company: string
}

const MOCK_JOBS: Record<string, JobSummary> = {
  "housekeeping-maid": {
    id: "housekeeping-maid",
    title: "Housekeeping / Maid",
    company: "Kesma Establishment",
  },
  "dermatology-assistant": {
    id: "dermatology-assistant",
    title: "Medical pedicure (m/f/d)",
    company: "Dermatologist Oberland",
  },
  "e-commerce-order-processing": {
    id: "e-commerce-order-processing",
    title: "E-Commerce & Order Processing",
    company: "Promed GmbH",
  },
}

async function getJobSummary(jobId: string): Promise<JobSummary> {
  // Mock data for now - easy to swap with real API call later
  const job = MOCK_JOBS[jobId] ?? MOCK_JOBS["housekeeping-maid"]
  return job

  // LATER (real backend):
  // const res = await fetch(`${process.env.API_URL}/jobs/${jobId}`, { cache: "no-store" })
  // if (!res.ok) throw new Error("Job not found")
  // return res.json()
}

export default async function ApplyPage({ params }: PageProps) {
  const resolvedParams = await params
  const job = await getJobSummary(resolvedParams.jobId)

  return <JobApplicationForm job={job} />
}
