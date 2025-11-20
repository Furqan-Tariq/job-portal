"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { JobsSearchFilters } from "./JobsSearchFilters"
import { JobAlertBanner } from "./JobAlertBanner"
import { JobsList } from "./JobsList"
import { JobDetailPanel } from "./JobDetailPanel"
import { JobsPagination } from "./JobsPagination"

export type HomeOfficeOption = "Any" | "On-site" | "Hybrid" | "Remote"
export type EmploymentType = "Any" | "Full-time" | "Part-time" | "Mini-job"
export type Industry = "Any" | "Health service" | "Finance" | "Retail" | "Tourism, hospitality and gastronomy"
export type Discipline = "Any" | "Sales" | "Nursing" | "IT" | "Medicine"
export type WorkExperience = "Any" | "No experience" | "1-3 years" | "3-5 years" | "5+ years"
export type EnterpriseSize = "Any" | "Small" | "Medium" | "Large"

export type Job = {
  id: string
  title: string
  companyName: string
  location: string
  street: string
  city: string
  zip: string
  country: string
  isTopJob?: boolean
  isExpressApplication?: boolean
  homeOfficeOption: HomeOfficeOption
  employmentType: EmploymentType
  industry: Industry
  discipline: Discipline
  workExperience: WorkExperience
  enterpriseSize: EnterpriseSize
  teaser: string
  logoSrc?: string
  headerImageSrc?: string
  publishedAt: string
  salary?: string
}

const JOBS: Job[] = [
  {
    id: "1",
    title: "Medical pedicure (m/f/d)",
    companyName: "Dermatologist Oberland",
    location: "Tegernseer Str. 3, 83703 Gmund am Tegernsee, Germany",
    street: "Tegernseer Str. 3",
    city: "Gmund am Tegernsee",
    zip: "83703",
    country: "Germany",
    isTopJob: true,
    isExpressApplication: true,
    homeOfficeOption: "On-site",
    employmentType: "Full-time",
    industry: "Health service",
    discipline: "Medicine",
    workExperience: "1-3 years",
    enterpriseSize: "Small",
    teaser: "We are looking for you - Foot care (m/f/d) full-time/part-time - Cosmetic experience welcome",
    logoSrc: "/dermatology-clinic-logo.jpg",
    headerImageSrc: "/job-image1.png",
    publishedAt: "2025-01-15",
  },
  {
    id: "2",
    title: "E-Commerce & Order Processing",
    companyName: "Promed GmbH",
    location: "82490 Farchant, Germany",
    street: "Hauptstraße 45",
    city: "Farchant",
    zip: "82490",
    country: "Germany",
    isTopJob: false,
    isExpressApplication: false,
    homeOfficeOption: "Hybrid",
    employmentType: "Full-time",
    industry: "Retail",
    discipline: "Sales",
    workExperience: "1-3 years",
    enterpriseSize: "Medium",
    teaser: "Join our growing e-commerce team and help us process orders efficiently.",
    logoSrc: "/promed-company-logo.jpg",
    headerImageSrc: "/job-image1.png",
    publishedAt: "2025-01-14",
  },
  {
    id: "3",
    title: "Financial Accountant (m/f/d)",
    companyName: "Royal Aero GmbH",
    location: "83714 Miesbach, Germany",
    street: "Industriestraße 12",
    city: "Miesbach",
    zip: "83714",
    country: "Germany",
    isTopJob: false,
    isExpressApplication: true,
    homeOfficeOption: "Remote",
    employmentType: "Full-time",
    industry: "Finance",
    discipline: "IT",
    workExperience: "3-5 years",
    enterpriseSize: "Large",
    teaser: "Experienced financial accountant wanted for growing aviation company.",
    logoSrc: "/royal-aero-logo.jpg",
    headerImageSrc: "/job-image1.png",
    publishedAt: "2025-01-13",
    salary: "€4,000 - €5,000 per month",
  },
]

export function JobsPageShell() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [homeOfficeFilter, setHomeOfficeFilter] = useState<HomeOfficeOption>("Any")
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState<EmploymentType>("Any")
  const [industryFilter, setIndustryFilter] = useState<Industry>("Any")
  const [disciplineFilter, setDisciplineFilter] = useState<Discipline>("Any")
  const [workExperienceFilter, setWorkExperienceFilter] = useState<WorkExperience>("Any")
  const [enterpriseSizeFilter, setEnterpriseSizeFilter] = useState<EnterpriseSize>("Any")

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      // Search term filter
      if (searchTerm) {
        const search = searchTerm.toLowerCase()
        const matchesTitle = job.title.toLowerCase().includes(search)
        const matchesCompany = job.companyName.toLowerCase().includes(search)
        if (!matchesTitle && !matchesCompany) return false
      }

      // Location filter
      if (locationTerm) {
        const location = locationTerm.toLowerCase()
        const matchesCity = job.city.toLowerCase().includes(location)
        const matchesLocation = job.location.toLowerCase().includes(location)
        if (!matchesCity && !matchesLocation) return false
      }

      // Dropdown filters
      if (homeOfficeFilter !== "Any" && job.homeOfficeOption !== homeOfficeFilter) return false
      if (employmentTypeFilter !== "Any" && job.employmentType !== employmentTypeFilter) return false
      if (industryFilter !== "Any" && job.industry !== industryFilter) return false
      if (disciplineFilter !== "Any" && job.discipline !== disciplineFilter) return false
      if (workExperienceFilter !== "Any" && job.workExperience !== workExperienceFilter) return false
      if (enterpriseSizeFilter !== "Any" && job.enterpriseSize !== enterpriseSizeFilter) return false

      return true
    })
  }, [
    searchTerm,
    locationTerm,
    homeOfficeFilter,
    employmentTypeFilter,
    industryFilter,
    disciplineFilter,
    workExperienceFilter,
    enterpriseSizeFilter,
  ])

  const [selectedJobId, setSelectedJobId] = useState<string | null>(filteredJobs.length > 0 ? filteredJobs[0].id : null)

  // Update selected job when filtered jobs change
  useMemo(() => {
    if (filteredJobs.length === 0) {
      setSelectedJobId(null)
    } else if (!filteredJobs.find((job) => job.id === selectedJobId)) {
      setSelectedJobId(filteredJobs[0].id)
    }
  }, [filteredJobs, selectedJobId])

  const selectedJob = filteredJobs.find((job) => job.id === selectedJobId) || null

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by real-time filtering, but this prevents page refresh
  }

  return (
    <main className="min-h-[calc(100vh-160px)] bg-muted py-8">
      <section className="container-custom max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{filteredJobs.length.toLocaleString()} Jobs</h1>
          <p className="text-sm text-muted-foreground">Find your next opportunity in the Oberland region.</p>
        </div>

        {/* Search + Filters */}
        <JobsSearchFilters
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          locationTerm={locationTerm}
          onLocationTermChange={setLocationTerm}
          homeOfficeFilter={homeOfficeFilter}
          onHomeOfficeFilterChange={setHomeOfficeFilter}
          employmentTypeFilter={employmentTypeFilter}
          onEmploymentTypeFilterChange={setEmploymentTypeFilter}
          industryFilter={industryFilter}
          onIndustryFilterChange={setIndustryFilter}
          disciplineFilter={disciplineFilter}
          onDisciplineFilterChange={setDisciplineFilter}
          workExperienceFilter={workExperienceFilter}
          onWorkExperienceFilterChange={setWorkExperienceFilter}
          enterpriseSizeFilter={enterpriseSizeFilter}
          onEnterpriseSizeFilterChange={setEnterpriseSizeFilter}
          onSubmitSearch={handleSubmitSearch}
        />

        {/* Jobs layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] gap-6">
          {/* Left: job list */}
          <div className="space-y-4">
            <JobAlertBanner />
            <JobsList jobs={filteredJobs} selectedJobId={selectedJobId} onSelectJob={setSelectedJobId} />
            <JobsPagination currentPage={1} totalPages={1} onNext={() => {}} onPrev={() => {}} />
          </div>

          {/* Right: job detail */}
          <JobDetailPanel job={selectedJob} />
        </div>
      </section>
    </main>
  )
}
