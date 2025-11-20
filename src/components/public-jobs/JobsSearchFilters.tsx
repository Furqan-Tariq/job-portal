"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { MapPin, Search } from "lucide-react"
import type {
  HomeOfficeOption,
  EmploymentType,
  Industry,
  Discipline,
  WorkExperience,
  EnterpriseSize,
} from "./JobsPageShell"

type JobsSearchFiltersProps = {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  locationTerm: string
  onLocationTermChange: (value: string) => void
  homeOfficeFilter: HomeOfficeOption
  onHomeOfficeFilterChange: (value: HomeOfficeOption) => void
  employmentTypeFilter: EmploymentType
  onEmploymentTypeFilterChange: (value: EmploymentType) => void
  industryFilter: Industry
  onIndustryFilterChange: (value: Industry) => void
  disciplineFilter: Discipline
  onDisciplineFilterChange: (value: Discipline) => void
  workExperienceFilter: WorkExperience
  onWorkExperienceFilterChange: (value: WorkExperience) => void
  enterpriseSizeFilter: EnterpriseSize
  onEnterpriseSizeFilterChange: (value: EnterpriseSize) => void
  onSubmitSearch: (e: React.FormEvent) => void
}

export function JobsSearchFilters({
  searchTerm,
  onSearchTermChange,
  locationTerm,
  onLocationTermChange,
  homeOfficeFilter,
  onHomeOfficeFilterChange,
  employmentTypeFilter,
  onEmploymentTypeFilterChange,
  industryFilter,
  onIndustryFilterChange,
  disciplineFilter,
  onDisciplineFilterChange,
  workExperienceFilter,
  onWorkExperienceFilterChange,
  enterpriseSizeFilter,
  onEnterpriseSizeFilterChange,
  onSubmitSearch,
}: JobsSearchFiltersProps) {
  return (
    <div className="bg-background rounded-xl shadow-sm p-6 space-y-4">
      {/* Row 1: Search inputs */}
      <form onSubmit={onSubmitSearch} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter location"
            value={locationTerm}
            onChange={(e) => onLocationTermChange(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button type="submit" className="bg-[#FDB714] hover:bg-[#FDB714]/90 text-primary-foreground md:w-32">
          Search
        </Button>
      </form>

      {/* Row 2: Filter dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <Select value={homeOfficeFilter} onValueChange={onHomeOfficeFilterChange}>
          <SelectTrigger>
            <SelectValue placeholder="Home office options" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Home Office Options</SelectItem>
            <SelectItem value="On-site">On-site</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
          </SelectContent>
        </Select>

        <Select value={employmentTypeFilter} onValueChange={onEmploymentTypeFilterChange}>
          <SelectTrigger>
            <SelectValue placeholder="Type of employment" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Type of Employment</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Mini-job">Mini-job</SelectItem>
          </SelectContent>
        </Select>

        <Select value={industryFilter} onValueChange={onIndustryFilterChange}>
          <SelectTrigger>
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Indstry</SelectItem>
            <SelectItem value="Health service">Health service</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Retail">Retail</SelectItem>
            <SelectItem value="Tourism, hospitality and gastronomy">Tourism, hospitality and gastronomy</SelectItem>
          </SelectContent>
        </Select>

        <Select value={disciplineFilter} onValueChange={onDisciplineFilterChange}>
          <SelectTrigger>
            <SelectValue placeholder="Discipline" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Discipline</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Nursing">Nursing</SelectItem>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="Medicine">Medicine</SelectItem>
          </SelectContent>
        </Select>

        <Select value={workExperienceFilter} onValueChange={onWorkExperienceFilterChange}>
          <SelectTrigger>
            <SelectValue placeholder="Work experience" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Work Experience</SelectItem>
            <SelectItem value="No experience">No experience</SelectItem>
            <SelectItem value="1-3 years">1-3 years</SelectItem>
            <SelectItem value="3-5 years">3-5 years</SelectItem>
            <SelectItem value="5+ years">5+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Row 3: Enterprise size */}
      <div className="flex justify-center">
        <Select value={enterpriseSizeFilter} onValueChange={onEnterpriseSizeFilterChange}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Enterprise" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Any">Enterprise</SelectItem>
            <SelectItem value="Small">Small (0-50 employees)</SelectItem>
            <SelectItem value="Medium">Medium (50-250 employees)</SelectItem>
            <SelectItem value="Large">Large (250+ employees)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
