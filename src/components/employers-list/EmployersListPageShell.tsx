"use client"

import { useEffect, useState, useMemo } from "react"
import { EmployerCard } from "./EmployerCard"
import { EmployersFilters } from "./EmployersFilters"
import { EmployersPagination } from "./EmployersPagination"

// Type definition for Employer
export type Employer = {
  id: number
  name: string
  street: string
  postalCode: string
  city: string
  country: string
  industry: string
  employeeRange: string
  openPositions: number
  isHighlighted?: boolean
  imageUrl?: string | null
  logoUrl?: string | null
  discipline?: string
  subject?: string
  location?: string
  searchIndex: string
}

// Mock data - single employer template
const BASE_EMPLOYER: Omit<Employer, "id" | "searchIndex"> = {
  name: "AGROBS GmbH & Co. KG",
  street: "Angerbreite 27",
  postalCode: "82541",
  city: "Degerndorf",
  country: "Germany",
  industry: "Retail and wholesale",
  employeeRange: "100 - 149 employees",
  openPositions: 8,
  isHighlighted: false,
  imageUrl: null,
  logoUrl: null,
  discipline: "Healthcare",
  subject: "Dermatology",
  location: "Degerndorf",
}

// Create 20 mock employers with the same data but unique IDs
const MOCK_EMPLOYERS: Employer[] = Array.from({ length: 20 }, (_, index) => ({
  ...BASE_EMPLOYER,
  id: index + 1,
  // Build search index from all searchable fields (lowercased for case-insensitive search)
  searchIndex: [
    BASE_EMPLOYER.name,
    BASE_EMPLOYER.street,
    BASE_EMPLOYER.city,
    BASE_EMPLOYER.country,
    BASE_EMPLOYER.industry,
    BASE_EMPLOYER.employeeRange,
  ]
    .join(" ")
    .toLowerCase(),
  // Highlight every 5th card for visual variety
  isHighlighted: (index + 1) % 5 === 0,
}))

// Filter options for dropdowns
export const DISCIPLINE_OPTIONS = [ "Healthcare", "Engineering", "IT", "Other"]
export const INDUSTRY_OPTIONS = [ "Retail and wholesale", "Other industry", "Crafts/trade"]
export const SUBJECT_OPTIONS = [ "Dermatology", "Podiatry", "Cosmetics"]

/**
 * Data fetching function - FUTURE: Replace with real API call
 * Example: const response = await fetch("/api/employers")
 * For now returns mock data to make the UI plug-and-play ready
 */
async function getEmployersFromApiLikeSource(): Promise<Employer[]> {
  // Simulate API delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 100))
  return MOCK_EMPLOYERS
}

export function EmployersListPageShell() {
  // State for employers data
  const [employers, setEmployers] = useState<Employer[]>([])

  // Filter state
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [discipline, setDiscipline] = useState("")
  const [industry, setIndustry] = useState("")
  const [subject, setSubject] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const PAGE_SIZE = 12 // 4 rows * 3 columns

  // Load employers on mount
  useEffect(() => {
    getEmployersFromApiLikeSource().then((data) => {
      setEmployers(data)
      setCurrentPage(1) // Reset to first page when data loads
    })
  }, [])

  // Filter employers based on all filter criteria
  const filteredEmployers = useMemo(() => {
    return employers.filter((employer) => {
      // Free-text search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase().trim()
        if (!employer.searchIndex.includes(searchLower)) {
          return false
        }
      }

      // Location filter
      if (location) {
        const locationLower = location.toLowerCase().trim()
        const locationMatch =
          employer.city.toLowerCase().includes(locationLower) ||
          employer.postalCode.toLowerCase().includes(locationLower) ||
          employer.country.toLowerCase().includes(locationLower) ||
          (employer.location && employer.location.toLowerCase().includes(locationLower))
        if (!locationMatch) {
          return false
        }
      }

      // Discipline filter
      if (discipline && employer.discipline !== discipline) {
        return false
      }

      // Industry filter
      if (industry && employer.industry !== industry) {
        return false
      }

      // Subject filter
      if (subject && employer.subject !== subject) {
        return false
      }

      return true
    })
  }, [employers, searchTerm, location, discipline, industry, subject])

  // Pagination calculations
  const totalEmployers = filteredEmployers.length
  const totalPages = Math.max(1, Math.ceil(totalEmployers / PAGE_SIZE))

  // Clamp current page to valid range when total pages changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [totalPages, currentPage])

  // Get employers for current page
  const pageStartIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedEmployers = filteredEmployers.slice(pageStartIndex, pageStartIndex + PAGE_SIZE)

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("")
    setLocation("")
    setDiscipline("")
    setIndustry("")
    setSubject("")
    setCurrentPage(1)
  }

  // Search button handler - resets to page 1 for better UX
  const handleSearch = () => {
    setCurrentPage(1)
  }

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <section className="container-custom py-8 md:py-10">
      {/* Page title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Enterprise</h1>

      {/* Filters section */}
      <EmployersFilters
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        location={location}
        onLocationChange={setLocation}
        discipline={discipline}
        onDisciplineChange={setDiscipline}
        industry={industry}
        onIndustryChange={setIndustry}
        subject={subject}
        onSubjectChange={setSubject}
        onReset={handleResetFilters}
        onSubmitSearch={handleSearch}
      />

      {/* Employers grid - 3 columns on large screens */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {paginatedEmployers.map((employer) => (
          <EmployerCard key={employer.id} employer={employer} />
        ))}
      </div>

      {/* Pagination */}
      <EmployersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalEmployers}
        pageSize={PAGE_SIZE}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </section>
  )
}
