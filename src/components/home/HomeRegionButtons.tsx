import { Region } from '@/lib/types'
import Link from 'next/link'

interface HomeRegionButtonsProps {
  regions: Region[]
}

export function HomeRegionButtons({ regions }: HomeRegionButtonsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {regions.map((region) => (
        <Link
          key={region.id}
          href={`/regions/${region.slug}`}
          className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-md transition-all duration-200"
        >
          <h3 className="font-bold text-lg text-gray-800">{region.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{region.jobCount} jobs</p>
        </Link>
      ))}
    </div>
  )
}
