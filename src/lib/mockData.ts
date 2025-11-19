import { Region, Employer, Job, VideoHighlight, Banner } from './types'

export const mockRegions: Region[] = [
  { id: '1', name: 'Miesbach', slug: 'miesbach', jobCount: 245 },
  { id: '2', name: 'Tegernsee Valley', slug: 'tegernsee-valley', jobCount: 189 },
  { id: '3', name: 'Bad Tölz', slug: 'bad-toelz', jobCount: 167 },
  { id: '4', name: 'Holzkirchen', slug: 'holzkirchen', jobCount: 134 },
  { id: '5', name: 'Wolfratshausen', slug: 'wolfratshausen', jobCount: 98 },
  { id: '6', name: 'Weilheim', slug: 'weilheim', jobCount: 156 },
  { id: '7', name: 'Schongau', slug: 'schongau', jobCount: 87 },
  { id: '8', name: 'Garmisch-Partenkirchen', slug: 'garmisch-partenkirchen', jobCount: 203 },
  { id: '9', name: 'Geretsried', slug: 'geretsried', jobCount: 112 },
]

export const mockEmployers: Employer[] = [
  { 
    id: '1', 
    name: 'Alpine Resort & Spa', 
    slug: 'alpine-resort-spa', 
    logo: '/alpine-resort-logo.jpg',
    imageQuery: 'luxury+alpine+resort+team+photo',
    description: 'Leading hospitality employer in the region'
  },
  { 
    id: '2', 
    name: 'Zugspitze Tourism', 
    slug: 'zugspitze-tourism', 
    logo: '/zugspitze-logo.jpg',
    imageQuery: 'zugspitze+mountain+panorama',
    description: 'Mountain tourism and recreation'
  },
  { 
    id: '3', 
    name: 'Lantenhammer Distillery', 
    slug: 'lantenhammer', 
    logo: '/distillery-logo.jpg',
    imageQuery: 'craft+distillery+bottles',
    description: 'Traditional Bavarian distillery'
  },
  { 
    id: '4', 
    name: 'Sport Conrad', 
    slug: 'sport-conrad', 
    logo: '/sport-conrad-logo.jpg'
  },
  { 
    id: '5', 
    name: 'Lanserhof Medical Spa', 
    slug: 'lanserhof', 
    logo: '/lanserhof-logo.jpg'
  },
  { 
    id: '6', 
    name: 'Dr. Susanne Wettl', 
    slug: 'dr-wettl', 
    logo: '/medical-practice-logo.png'
  },
  { 
    id: '7', 
    name: 'Louisenthal', 
    slug: 'louisenthal', 
    logo: '/louisenthal-logo.jpg'
  },
  { 
    id: '8', 
    name: 'Krankenhaus Hospital', 
    slug: 'krankenhaus', 
    logo: '/hospital-logo.png'
  },
  { 
    id: '9', 
    name: 'Medical Park', 
    slug: 'medical-park', 
    logo: '/medical-park-logo.jpg'
  },
  { 
    id: '10', 
    name: 'Lauterbacher Mühle', 
    slug: 'lauterbacher-muehle', 
    logo: '/mill-bakery-logo.jpg'
  },
  { 
    id: '11', 
    name: 'Miesbach Markets', 
    slug: 'miesbach-markets', 
    logo: '/market-logo.png'
  },
  { 
    id: '12', 
    name: 'Bergzeit Outdoor', 
    slug: 'bergzeit', 
    logo: '/bergzeit-logo.jpg'
  },
  { 
    id: '13', 
    name: 'Schliersee Hotels', 
    slug: 'schliersee-hotels', 
    logo: '/elegant-hotel-logo.png'
  },
  { 
    id: '14', 
    name: 'Market Garmisch', 
    slug: 'market-garmisch', 
    logo: '/garmisch-market-logo.jpg'
  },
  { 
    id: '15', 
    name: 'Waldburg-Zeil Clinics', 
    slug: 'waldburg-zeil', 
    logo: '/clinic-logo.jpg'
  },
  { 
    id: '16', 
    name: 'Median Rehabilitation', 
    slug: 'median', 
    logo: '/median-logo.jpg'
  },
  { 
    id: '17', 
    name: 'Gut Kaltenbrunn', 
    slug: 'gut-kaltenbrunn', 
    logo: '/kaltenbrunn-logo.jpg'
  },
  { 
    id: '18', 
    name: 'Kinderland Kindergarten', 
    slug: 'kinderland', 
    logo: '/kinderland-logo.jpg'
  },
  { 
    id: '19', 
    name: 'Zarges Aluminum', 
    slug: 'zarges', 
    logo: '/placeholder.svg?height=60&width=120'
  },
]

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Fashion Style Consultant (m/f/d)',
    employer: 'Jennerwein Fashion House',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Marktpl. 3, 83607 Holzkirchen, Germany',
    slug: 'fashion-consultant-holzkirchen',
    type: 'full-time',
    postedDate: '2025-01-15'
  },
  {
    id: '2',
    title: 'Carpenter/Bachelor (m/f/d)',
    employer: 'Zimmerei Kerschbaumer GbR',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Isarspitz 7, 82515 Wolfratshausen, Germany',
    slug: 'carpenter-wolfratshausen',
    type: 'full-time',
    postedDate: '2025-01-14'
  },
  {
    id: '3',
    title: 'Electronics Technician (m/f/d) Industrial Engineering',
    employer: 'Gebr. Bagusat GmbH & Co. KG',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: '82538 Geretsried, Germany',
    slug: 'electronics-technician-geretsried',
    type: 'full-time',
    postedDate: '2025-01-13'
  },
  {
    id: '4',
    title: 'Master Carpenter (m/f/d) in Production',
    employer: 'Carpentry Kaspar Orterer',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: '82439 Großweil, Germany',
    slug: 'master-carpenter-grossweil',
    type: 'full-time',
    postedDate: '2025-01-12'
  },
  {
    id: '5',
    title: 'Commercial Clerk (m/f/d) in the Office/Back Office for Sales/Sales',
    employer: 'Aliens GmbH',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Gewerbegebiet Otterfing, Georg-Hardt-Straße 7, 83624...',
    slug: 'commercial-clerk-otterfing',
    type: 'full-time',
    postedDate: '2025-01-11'
  },
  {
    id: '6',
    title: 'Service Employee (m/f/d)',
    employer: 'Gasthof Hotel zur Post Bad Wiessee',
    employerLogo: '/elegant-hotel-logo.png',
    location: 'Lindenpl. 7, 83707 Bad Wiessee, Germany',
    slug: 'service-employee-bad-wiessee',
    type: 'full-time',
    postedDate: '2025-01-10'
  },
  {
    id: '7',
    title: 'Steel Construction Fitter (m/f/d)',
    employer: 'Deintner Glas- und Metallbau GmbH & Co. KG',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Gewerbegebiet Ettaler Straße, Ettaler Str. 7, 82490...',
    slug: 'steel-fitter-ettaler',
    type: 'full-time',
    postedDate: '2025-01-09'
  },
  {
    id: '8',
    title: 'Master Carpenter (m/f/d) Work Preparation & Project Management',
    employer: 'Carpentry Kaspar Orterer',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: '82439 Großweil, Germany',
    slug: 'master-carpenter-project-management',
    type: 'full-time',
    postedDate: '2025-01-08'
  },
  {
    id: '9',
    title: 'Apprenticeship as an Administrative Assistant (m/f/d)',
    employer: 'City of Miesbach',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Rathauspl. 1, 83714 Miesbach, Germany',
    slug: 'apprenticeship-miesbach',
    type: 'apprenticeship',
    postedDate: '2025-01-07'
  },
  {
    id: '10',
    title: 'Employee (f/m/d) for our Reception',
    employer: 'Radiology Oberland Dres. Scheck, Spies, Sießmeier and Egge',
    employerLogo: '/placeholder.svg?height=64&width=64',
    location: 'Norbert-Kerkel-Platz, 83734 Hausham-Agatharied, Germany',
    slug: 'reception-employee-hausham',
    type: 'full-time',
    postedDate: '2025-01-06'
  },
]

export const mockVideoHighlights: VideoHighlight[] = [
  {
    id: '1',
    title: 'Educator / Pedagogical Specialist (f/m/d) - Nature Kindergarten',
    employer: 'FortSchritt Bayern gGmbH',
    location: 'Höhenweg 1, 82319 Starnberg, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
  {
    id: '2',
    title: 'Tax Professional / Tax Advisor',
    employer: 'Felbermeir Tax Consulting Society mbH',
    location: '82054 Sauerlach-Lochhofen, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
  {
    id: '3',
    title: 'Customer Manager Real Estate Management (m/f/d)',
    employer: 'Grundstein Immobilien GP GmbH',
    location: 'Bahnhofstraße 46, 82467 Garmisch-Partenkirchen, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
  {
    id: '4',
    title: 'Dual Study Programme in Leisure Management (B.A.) – DHBW Ravensburg from 01.10.2026',
    employer: 'Spa & Resort Bachmair Weissach',
    location: 'Wiesseer Str. 1, 83700 Kreuth, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
  {
    id: '5',
    title: 'Working Student in the Field of IT Administration (m/f/d)',
    employer: 'Lindnerhof-Taktik GmbH',
    location: 'Isarring 3, 83661 Lenggries, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
  {
    id: '6',
    title: 'Dual Study Programme in Hotel and Gastronomy Management (B.A.) - DHBW Ravensburg from 01.10.2026',
    employer: 'Spa & Resort Bachmair Weissach',
    location: 'Wiesseer Str. 1, 83700 Kreuth, Germany',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/placeholder.svg?height=200&width=350'
  },
]

export const mockBanners: Banner[] = [
  {
    id: '1',
    title: '#apprentice #future #careerstart',
    subtitle: 'Start your career now – with an apprenticeship for your future!',
    ctaText: 'Find your apprenticeship here >',
    ctaLink: '/apprenticeships'
  }
]
