import createSanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

// Sanity config
export const sanityConfig = {
  dataset: "production",
  projectId: "y22dlo4f",
  apiVersion: "2022-09-20",
  useCdn: false,
}

// Sanity client
export const sanityClient = createSanityClient(sanityConfig)

// Sanity image helper
export const urlForImage = (source: Record<string, unknown>) =>
  imageUrlBuilder(sanityConfig).image(source)
