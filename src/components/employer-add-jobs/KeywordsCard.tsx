import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function KeywordsCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">KEYWORDS OF THE JOB AD</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-primary">TIP: Always be aware of the following:</p>
              <p>
                Think about what candidates are most likely to look for. Here&apos;s how to find the best keywords.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-5">
            {/* Type of employment */}
            <div className="space-y-2">
              <Label htmlFor="employment-type" className="text-base font-semibold">
                Type of employment <span className="text-destructive">*</span>
              </Label>
              <Select>
                <SelectTrigger
                  id="employment-type"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {/* Sorted alphabetically by label */}
                  <SelectItem value="apprenticeship">Apprenticeship</SelectItem>
                  <SelectItem value="full-time">Full-Time</SelectItem>
                  <SelectItem value="part-time">Part-Time</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Please select the type of employment for this job advertisement.
              </p>
            </div>

            {/* Educational qualification */}
            <div className="space-y-2">
              <Label htmlFor="education" className="text-base font-semibold">
                Required educational qualification
              </Label>
              <Select>
                <SelectTrigger
                  id="education"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {/* Sorted alphabetically by label */}
                  <SelectItem value="enrolled-student">Enrolled Student</SelectItem>
                  <SelectItem value="graudate">Graudate</SelectItem>
                  <SelectItem value="technician">Technician</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Please select the required educational qualification.
              </p>
            </div>

            {/* Professional experience */}
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-base font-semibold">
                Professional experience
              </Label>
              <Select>
                <SelectTrigger
                  id="experience"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="entry">Entry level</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                  <SelectItem value="senior">Senior level</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Indicate how much experience is required for this job.
              </p>
            </div>

            {/* Discipline */}
            <div className="space-y-2">
              <Label htmlFor="discipline" className="text-base font-semibold">
                Discipline <span className="text-destructive">*</span>
              </Label>
              <Select>
                <SelectTrigger
                  id="discipline"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {/* Sorted alphabetically by label */}
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Enter suitable career fields for this position here.
              </p>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-base font-semibold">
                Subject
              </Label>
              <Select>
                <SelectTrigger
                  id="subject"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {/* Sorted alphabetically by label */}
                  <SelectItem value="architecure">Architecure</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Provide information about the fields of study relevant to this position.
              </p>
            </div>

            {/* Language skills */}
            <div className="space-y-2">
              <Label htmlFor="languages" className="text-base font-semibold">
                Required language skills
              </Label>
              <Select>
                <SelectTrigger
                  id="languages"
                  className="h-11 text-base bg-background border border-input"
                >
                  <SelectValue placeholder="-- Please Select --" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {/* Sorted alphabetically by label */}
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Indicate what language skills are required for this position.
              </p>
            </div>

            {/* Required skills */}
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-base font-semibold">
                Required Skills
              </Label>
              <Input id="skills" placeholder="Please type..." className="text-base" />
              <p className="text-sm text-muted-foreground">
                Please indicate all skills that applicants should have.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
