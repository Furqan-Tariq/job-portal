"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"
import { DISCIPLINE_OPTIONS, INDUSTRY_OPTIONS, SUBJECT_OPTIONS } from "./EmployersListPageShell"

type EmployersFiltersProps = {
  searchTerm: string
  onSearchTermChange: (value: string) => void
  location: string
  onLocationChange: (value: string) => void
  discipline: string
  onDisciplineChange: (value: string) => void
  industry: string
  onIndustryChange: (value: string) => void
  subject: string
  onSubjectChange: (value: string) => void
  onReset: () => void
  onSubmitSearch: () => void
}

export function EmployersFilters({
  searchTerm,
  onSearchTermChange,
  location,
  onLocationChange,
  discipline,
  onDisciplineChange,
  industry,
  onIndustryChange,
  subject,
  onSubjectChange,
  onReset,
  onSubmitSearch,
}: EmployersFiltersProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4 md:p-6">
        {/* Mobile and tablet: stacked layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Location input */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Discipline dropdown */}
          <Select value={discipline} onValueChange={onDisciplineChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Discipline" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {DISCIPLINE_OPTIONS.map((option) => (
                <SelectItem key={option || "any"} value={option}>
                  {option || "Any"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Industry dropdown */}
          <Select value={industry} onValueChange={onIndustryChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {INDUSTRY_OPTIONS.map((option) => (
                <SelectItem key={option || "any"} value={option}>
                  {option || "Any"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Subject dropdown */}
          <Select value={subject} onValueChange={onSubjectChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {SUBJECT_OPTIONS.map((option) => (
                <SelectItem key={option || "any"} value={option}>
                  {option || "Any"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button onClick={onSubmitSearch} className="flex-1 bg-[#FDB714] hover:bg-[#FDB714]/90">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" onClick={onReset} className="flex-1 bg-transparent">
              Reset search
            </Button>
          </div>
        </div>

        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Top row: Search and Location */}
          <div className="flex gap-4">
            {/* Search input - takes more space */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>

            {/* Location input */}
            <div className="relative w-64">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => onLocationChange(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>

          {/* Bottom row: Dropdowns and Buttons */}
          <div className="flex gap-4 items-center">
            {/* Discipline dropdown */}
            <Select value={discipline} onValueChange={onDisciplineChange}>
              <SelectTrigger className="bg-white w-48">
                <SelectValue placeholder="Discipline" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {DISCIPLINE_OPTIONS.map((option) => (
                  <SelectItem key={option || "any"} value={option}>
                    {option || "Any"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Industry dropdown */}
            <Select value={industry} onValueChange={onIndustryChange}>
              <SelectTrigger className="bg-white w-52">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {INDUSTRY_OPTIONS.map((option) => (
                  <SelectItem key={option || "any"} value={option}>
                    {option || "Any"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Subject dropdown */}
            <Select value={subject} onValueChange={onSubjectChange}>
              <SelectTrigger className="bg-white w-48">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {SUBJECT_OPTIONS.map((option) => (
                  <SelectItem key={option || "any"} value={option}>
                    {option || "Any"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Action buttons */}
            <div className="flex gap-2 ml-auto">
              <Button onClick={onSubmitSearch} className="bg-[#FDB714] hover:bg-[#FDB714]/90">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" onClick={onReset}>
                Reset search
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
