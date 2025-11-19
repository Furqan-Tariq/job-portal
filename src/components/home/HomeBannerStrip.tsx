import { Region } from '@/lib/types'
// import { Button } from '@/components/ui/Button'

interface HomeBannerStripProps {
  regions: Region[]
}

export function HomeBannerStrip({ regions }: HomeBannerStripProps) {
  return (
    <section className="bg-primary py-8">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font text-black mb-6">
          Job board for Oberland <span className="font-bold text-white">Regional job offers, apprenticeships and mini-jobs</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <button
              key={region.id}
              className="bg-white text-gray-800 px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Jobs in {region.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
