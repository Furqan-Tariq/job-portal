"use client";
import { useState } from "react"
import { Employer } from "@/lib/types"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface HomeTopEmployersProps {
  employers: Employer[]
}

export function HomeTopEmployers({ employers }: HomeTopEmployersProps) {
  const featured = employers.slice(0, 3)
  const rest = employers.slice(3) // all remaining employers

  const pageSize = 12 // 2 rows * 6 logos
  const pageCount = Math.max(1, Math.ceil(rest.length / pageSize))
  const [page, setPage] = useState(0)

  const startIndex = page * pageSize
  const visibleEmployers = rest.slice(startIndex, startIndex + pageSize)

  const handlePrev = () => {
    if (pageCount <= 1) return
    setPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  const handleNext = () => {
    if (pageCount <= 1) return
    setPage((prev) => (prev + 1) % pageCount)
  }

  return (
    <section className="py-16 bg-[#eef2f5]">
      <div className="container-custom relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9aa2ad] text-center mb-12">
          Top Employer
        </h2>

        {/* Featured Employers (smaller height) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {featured.map((employer) => (
            <Link key={employer.id} href={`/employers/${employer.slug}`}>
              <Card hover className="overflow-hidden bg-white rounded-md shadow-sm">
                <div className="relative h-36 md:h-52">
                  {/* use real backend hero/banner image when available */}
                  <Image
                    src={employer.featuredImage || employer.logo || "/placeholder.svg"}
                    alt={employer.name}
                    fill
                    className="object-cover"
                  />
                  {/* Logo badge */}
                  <div className="absolute bottom-3 right-3 bg-white px-3 py-2 rounded-md shadow-md">
                    <Image
                      src={employer.logo || "/placeholder.svg"}
                      alt={`${employer.name} logo`}
                      width={90}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Logo Grid + Carousel Controls */}
        <div className="relative">
          {/* Left Arrow */}
          {pageCount > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous employers"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                         flex items-center justify-center w-8 h-8 rounded-full 
                         border border-gray-300 text-gray-500 bg-white shadow-sm hover:bg-gray-50"
            >
              ‹
            </button>
          )}

          {/* Right Arrow */}
          {pageCount > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next employers"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                         flex items-center justify-center w-8 h-8 rounded-full 
                         border border-gray-300 text-gray-500 bg-white shadow-sm hover:bg-gray-50"
            >
              ›
            </button>
          )}

          {/* 2-Row Logo Grid (12 per page) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-10">
            {visibleEmployers.map((employer) => (
              <Link key={employer.id} href={`/employers/${employer.slug}`}>
                <Card
                  hover
                  className="h-24 md:h-28 flex items-center justify-center 
                             rounded-md bg-white shadow-sm"
                >
                  <Image
                    src={employer.logo || "/placeholder.svg"}
                    alt={employer.name}
                    width={130}
                    height={60}
                    className="max-h-14 max-w-full object-contain"
                  />
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === page ? "bg-gray-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to employers page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
