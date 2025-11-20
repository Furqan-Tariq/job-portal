import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReleaseDatesCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              RELEASE DATE &amp; DURATION
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Provide information about the publication date and duration of the job advertisement.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-5">
            {/* Release date */}
            <div className="space-y-2">
              <Label htmlFor="release-date" className="text-base font-semibold">
                Release date
              </Label>
              <Input
                id="release-date"
                type="date"
                defaultValue="2025-11-20"
                className="text-base w-full sm:w-[220px]"
              />
              <p className="text-sm text-muted-foreground">
                Please select the date on which you want the job ad to be published (Note: If an admin review is
                required, the job ad will be published as soon as possible after the review, but not before the
                selected date).
              </p>
            </div>

            {/* Expiration date */}
            <div className="space-y-2">
              <Label htmlFor="expiration-date" className="text-base font-semibold">
                Expiration date
              </Label>
              <Input
                id="expiration-date"
                type="date"
                defaultValue="2026-01-19"
                className="text-base w-full sm:w-[220px]"
              />
              <p className="text-sm text-muted-foreground">
                Select the date you want the job to go offline
              </p>
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  )
}
