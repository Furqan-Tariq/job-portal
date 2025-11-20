import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Briefcase, Building, Zap, Mail } from "lucide-react"
import type { Job } from "./JobsPageShell"

type JobDetailPanelProps = {
  job: Job | null
}

const JOB_DETAIL_CONTENT = {
  intro: "We are looking for you - Foot care (m/f/d) full-time/part-time - Cosmetic experience welcome",
  aboutUs: {
    title: "About us:",
    content:
      "Hautarzt Oberland - with three locations in Gmund, Miesbach and Holzkirchen, we are one of the top addresses in the region. We are all about modern dermatology, podiatry, laser medicine, aesthetic treatments and, above all, the people we accompany every day.",
  },
  expectations: {
    title: "This is what you can expect from us:",
    items: [
      "Team that rocks! Look forward to an environment in which respect and appreciation are at the top of the list.",
      "Work-life balance at its best! 30 days of vacation (freely selectable) + no work on 24./31.12.",
      "More money, more recognition! Because good work earns good money.",
      "Long-term and safe! With us, you have a stable career perspective through over 45 years of family tradition.",
    ],
  },
  strengths: {
    title: "Your strengths:",
    items: [
      "You have completed training in foot care or podiatry.",
      "You have experience in foot care or podiatry (would be great!)",
      "You work in an organized and independent way - you know what you are doing.",
      "Stressful situations? No problem, you stay calm, focused and keep an overview.",
      "You enjoy working with people and bring positive energy.",
      "Do you know yourself with cosmetic treatments? We look forward to your know-how!",
    ],
  },
  tasks: {
    title: "Your tasks:",
    items: [
      "Medical foot care with heart and know-how.",
      "You work independently, keeping an eye on the team.",
      "Advising, treating and making your patients happy.",
      "Appointments, documentation and billing - you have the overview.",
    ],
  },
  contact: {
    title: "Would you like to get started with us?",
    content:
      "Then we look forward to receiving your application by e-mail! Do you have any questions or want to get a taste of it in advance? Feel free to write to us!",
    contactPerson: "Ms. Malin Friese",
    email: "m.friese@hautarztoberiand.de",
  },
}

export function JobDetailPanel({ job }: JobDetailPanelProps) {
  if (!job) {
    return (
      <Card className="p-12 flex items-center justify-center min-h-[600px]">
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-muted-foreground">Select a job to see details</p>
          <p className="text-sm text-muted-foreground">Click on a job from the list to view its full description.</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <ScrollArea className="h-[600px]">
        {/* Header Image */}
        {job.headerImageSrc && (
          <div className="relative h-48 w-full">
            <Image src={job.headerImageSrc || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and Actions */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold leading-tight">{job.title}</h1>
              <Button className="bg-[#FDB714] hover:bg-[#FDB714]/90 text-primary-foreground flex-shrink-0">
                <Zap className="h-4 w-4 mr-2" />
                Express application
              </Button>
            </div>

            {job.isTopJob && (
              <Badge className="bg-[#FDB714] text-white">
                <Briefcase className="h-3 w-3 mr-1" />
                Top Job
              </Badge>
            )}
          </div>

          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#FDB714] font-medium">
              <Building className="h-4 w-4" />
              <span>{job.companyName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
          </div>

          {/* Meta Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{job.industry}</Badge>
            <Badge variant="outline">{job.employmentType}</Badge>
            <Badge variant="outline">With professional experience ({job.workExperience.toLowerCase()})</Badge>
          </div>

          {/* Job Description */}
          <div className="space-y-6 border-t pt-6">
            {/* Intro */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Become part of our team!</h2>
              <p className="text-sm leading-relaxed">{JOB_DETAIL_CONTENT.intro}</p>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-2">{JOB_DETAIL_CONTENT.aboutUs.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{JOB_DETAIL_CONTENT.aboutUs.content}</p>
            </div>

            {/* Expectations */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{JOB_DETAIL_CONTENT.expectations.title}</h3>
              <ul className="space-y-2">
                {JOB_DETAIL_CONTENT.expectations.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-[#FDB714] mt-1">✓</span>
                    <span className="leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{JOB_DETAIL_CONTENT.strengths.title}</h3>
              <ul className="space-y-2">
                {JOB_DETAIL_CONTENT.strengths.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-[#FDB714] mt-1">✓</span>
                    <span className="leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{JOB_DETAIL_CONTENT.tasks.title}</h3>
              <ul className="space-y-2">
                {JOB_DETAIL_CONTENT.tasks.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <span className="text-[#FDB714] mt-1">✓</span>
                    <span className="leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-muted rounded-lg p-4 space-y-3">
              <h3 className="text-lg font-semibold">{JOB_DETAIL_CONTENT.contact.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{JOB_DETAIL_CONTENT.contact.content}</p>
              <div className="space-y-1">
                <p className="text-sm font-medium">Contact person for application:</p>
                <p className="text-sm font-semibold">{JOB_DETAIL_CONTENT.contact.contactPerson}</p>
                <a
                  href={`mailto:${JOB_DETAIL_CONTENT.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[#FDB714] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {JOB_DETAIL_CONTENT.contact.email}
                </a>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                <Mail className="h-4 w-4 mr-2" />
                Send Application
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  )
}
