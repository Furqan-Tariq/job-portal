export interface Region {
  id: string
  name: string
  slug: string
  jobCount: number
}

export interface Employer {
  id: string
  name: string
  slug: string
  logo: string
  description?: string
  imageQuery?: string
  featuredImage?: string
}

export interface Job {
  id: string
  title: string
  employer: string
  employerLogo: string
  location: string
  slug: string
  type: 'full-time' | 'part-time' |  'apprenticeship'
  postedDate: string
}

export interface VideoHighlight {
  id: string
  title: string
  employer: string
  location: string
  embedUrl: string
  thumbnailUrl: string
}

export interface Banner {
  id: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export interface HomePageData {
  regions: Region[]
  topEmployers: Employer[]
  featuredJobs: Job[]
  videoHighlights: VideoHighlight[]
  banners: Banner[]
}
