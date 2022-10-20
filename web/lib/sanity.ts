import imageUrlBuilder from "@sanity/image-url"
import { sanityConfig } from "./config"

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */

export const urlForImage = (source: Record<string, unknown>) =>
  imageUrlBuilder(sanityConfig).image(source)
