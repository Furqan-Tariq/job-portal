"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type JobsPaginationProps = {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

export function JobsPagination({ currentPage, totalPages, onNext, onPrev }: JobsPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="outline" size="icon" onClick={onPrev} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium">
        {currentPage} / {totalPages}
      </span>
      <Button variant="outline" size="icon" onClick={onNext} disabled={currentPage === totalPages}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
