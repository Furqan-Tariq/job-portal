import { VideoHighlight } from "@/lib/types"
import { Card } from "@/components/ui/card"

interface HomeVideoHighlightsProps {
  videos: VideoHighlight[]
}

export function HomeVideoHighlights({ videos }: HomeVideoHighlightsProps) {
  return (
    <section className="py-16 bg-background-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Jobs at a glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="flex flex-col h-full overflow-hidden bg-background-darker border-gray-700"
            >
              {/* Fixed aspect ratio video area */}
              <div className="relative aspect-video w-full">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content area fills the remaining height */}
              <div className="flex-1 bg-white p-4 flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">
                  {video.employer}
                </p>
                <p className="text-sm text-gray-600">
                  {video.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
