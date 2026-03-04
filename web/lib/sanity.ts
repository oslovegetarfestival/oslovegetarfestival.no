import { createClient } from "@sanity/client"
import { createImageUrlBuilder } from "@sanity/image-url"

// Sanity config
export const sanityConfig = {
  dataset: "production",
  projectId: "y22dlo4f",
  apiVersion: "2022-09-20",
  // Use CDN for development to save API quota (but don't in prod, to ensure latest changes during build)
  useCdn: process.env.IS_LOCALHOST ? true : false,
}

// Sanity client
export const sanityClient = createClient(sanityConfig)

// Sanity image helper
export const urlForImage = (source: Record<string, unknown>) =>
  createImageUrlBuilder(sanityConfig).image(source)
