import { HomePageData } from '../types'
import { mockRegions, mockEmployers, mockJobs, mockVideoHighlights, mockBanners } from '../mockData'

export async function getHomePageData(): Promise<HomePageData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    regions: mockRegions,
    topEmployers: mockEmployers,
    featuredJobs: mockJobs.slice(0, 10),
    videoHighlights: mockVideoHighlights,
    banners: mockBanners
  }
}
