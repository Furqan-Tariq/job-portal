import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SalaryIndicationCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">SALARYINDICATION</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                To optimize your job ad for Google for Jobs while meeting candidates&apos; needs, we recommend providing
                a salary range. This increases the findability of your ad by enriching relevant data and fulfills the
                desire of over 60% of female applicants for salary transparency
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-base font-semibold">Salary range</h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Minimum salary */}
              <div className="space-y-2">
                <Label htmlFor="min-salary" className="text-sm font-semibold">
                  Minimum salary
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input id="min-salary" type="number" placeholder="0" className="text-base pl-8" />
                </div>
              </div>

              {/* Maximum salary */}
              <div className="space-y-2">
                <Label htmlFor="max-salary" className="text-sm font-semibold">
                  Maximum salary
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input id="max-salary" type="number" placeholder="0" className="text-base pl-8" />
                </div>
              </div>

              {/* Salary unit */}
              <div className="space-y-2">
                <Label htmlFor="salary-unit" className="text-sm font-semibold">
                  Salary unit
                </Label>
                <Select>
                  <SelectTrigger id="salary-unit" className="text-base">
                    <SelectValue placeholder="-- Please Select --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="hour">Per hour</SelectItem>
                    <SelectItem value="month">Per month</SelectItem>
                    <SelectItem value="year">Per year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">Provide a salary range for this job.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
