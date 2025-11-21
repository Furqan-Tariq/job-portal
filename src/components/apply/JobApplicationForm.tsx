"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { UploadCloud } from "lucide-react"

type JobSummary = {
  id: string
  title: string
  company: string
}

type JobApplicationFormProps = {
  job: JobSummary
}

export function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    setSelectedFiles(Array.from(e.target.files))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!acceptedTerms) return

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    console.log("[v0] Applying for job", job.id, "with data:", Object.fromEntries(formData.entries()))
    console.log(
      "[v0] Files:",
      selectedFiles.map((f) => f.name),
    )

    // Simulate end of submit
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Application submitted successfully!")
    }, 500)
  }

  return (
    <div className="min-h-screen bg-muted py-10">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Application for: {job.title}</h1>

        <Card className="rounded-2xl shadow-lg border bg-white p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Forename */}
            <div className="space-y-1">
              <Label htmlFor="forename">
                Forename <span className="text-red-500">*</span>
              </Label>
              <Input id="forename" name="forename" required />
            </div>

            {/* Surname */}
            <div className="space-y-1">
              <Label htmlFor="surname">
                Surname <span className="text-red-500">*</span>
              </Label>
              <Input id="surname" name="surname" required />
            </div>

            {/* E-mail address */}
            <div className="space-y-1">
              <Label htmlFor="email">
                E-mail address <span className="text-red-500">*</span>
              </Label>
              <Input id="email" name="email" type="email" required />
            </div>

            {/* Applicant's cover letter */}
            <div className="space-y-1">
              <Label htmlFor="coverLetter">
                Applicant&apos;s cover letter <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                required
                className="min-h-[180px]"
                defaultValue={`Sehr geehrte Damen und Herren,
Hiermit bewerbe ich mich für den auf Oberland-JOBS.de ausgeschriebenen Job Housekeeping / Zimmermädchen.
Meine Kontaktinformationen finden Sie weiter unten.
Ich freue mich auf Ihre Antwort.
Mit freundlichen Grüßen`}
              />
            </div>

            {/* Upload attachments */}
            <div className="mt-8 space-y-3">
              <h2 className="text-lg font-semibold">Upload attachments</h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg py-10 px-4 flex flex-col items-center justify-center gap-4 text-center">
                <UploadCloud className="w-12 h-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag &amp; drop your files here or click the button to upload.
                </p>

                <div>
                  <input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => document.getElementById("attachments")?.click()}
                    className="px-8"
                  >
                    Upload
                  </Button>
                </div>

                {selectedFiles.length > 0 && (
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    {selectedFiles.map((file) => (
                      <li key={file.name}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="mt-6 flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={acceptedTerms}
                onCheckedChange={(value) => setAcceptedTerms(Boolean(value))}
              />
              <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground cursor-pointer">
                Terms{" "}
                <a href="#" className="text-[#FDB714] hover:underline">
                  of use
                </a>{" "}
                apply. Information on data protection can be found{" "}
                <a href="#" className="text-[#FDB714] hover:underline">
                  here
                </a>
                . <span className="text-red-500">*</span>
              </Label>
            </div>

            {/* Apply button */}
            <div className="mt-6">
              <Button
                type="submit"
                className="bg-[#FDB714] hover:bg-[#FDB714]/90 text-primary-foreground px-8"
                disabled={!acceptedTerms || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
