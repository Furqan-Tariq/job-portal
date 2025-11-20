import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin } from "lucide-react"

export function WorkplaceCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">WORKPLACE</h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>If the vacancy is available at other locations, several work locations can also be stored here</p>
              <p>
                In order to inform applicants at which other locations the vacancy is available, there is the
                possibility to store several locations.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-5">
            {/* Workplace */}
            <div className="space-y-2">
              <Label htmlFor="workplace" className="text-base font-semibold">
                Workplace <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="workplace" placeholder="e.g. Munich" className="text-base pl-10" required />
              </div>
              <p className="text-sm text-muted-foreground">Enter the locations where the job is available.</p>
            </div>

            {/* Home office option */}
            <div className="space-y-2">
              <Label htmlFor="home-office" className="text-base font-semibold">
                Home office option
              </Label>

              <select
                id="home-office"
                className="block w-full text-base h-11 px-3 rounded-md
                          border border-input bg-background"
                defaultValue=""
              >
                <option value="" disabled>Please select...</option>
                <option value="100">100% Home office</option>
                <option value="field">Field Service / Travel</option>
                <option value="partial">Partial home office</option>
              </select>

              <p className="text-sm text-muted-foreground">
                Please inform about the home office options of this office.
              </p>
            </div>



          </div>
        </div>
      </CardContent>
    </Card>
  )
}
