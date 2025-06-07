import { NextSeo } from "next-seo"

import { urlForImage } from "lib/sanity"

type SeoProps = {
  page?: {
    title?: string
    intro?: string
    slug: {
      current: string
    }
    image?: {
      asset?: {
        _ref: string
      }
    }
    seo?: {
      title?: string
      description?: string
      hidden?: boolean
      image?: Record<string, unknown>
    }
  }
  isFrontPage?: boolean
  customSiteName?: string
  customCanonicalUrl?: string
}

export const Seo = ({
  page,
  isFrontPage,
  customSiteName,
  customCanonicalUrl,
  ...rest
}: SeoProps) => {
  const SITE_NAME = "Oslo Vegetarfestival"
  const title = page?.seo?.title || page?.title || customSiteName || SITE_NAME
  const siteName = isFrontPage ? "" : ` → ${customSiteName || SITE_NAME}`

  const description =
    page?.seo?.description ||
    page?.intro ||
    "Velkommen til Oslo Vegetarfestival 30.-31. mai 2026"

  // Ordinary main image
  const mainImage =
    page?.image?.asset &&
    urlForImage(page?.image)?.width(1200).height(630).url()

  // SEO image
  const seoImage =
    page?.seo?.image?.asset &&
    urlForImage(page?.seo?.image)?.width(1200).height(630).url()

  // Default image
  // TODO: Find a better default image
  const defaultImage =
    "https://oslovegetarfestival.no/logo-default-some.png?v=1"

  const images = []

  if (mainImage != null) {
    images.push({ url: mainImage })
  }

  if (seoImage != null) {
    images.push({ url: seoImage })
  }

  if (images.length < 1) {
    images.push({ url: defaultImage })
  }

  // Canonical url
  const canonicalUrl = `https://www.oslovegetarfestival.no${
    customCanonicalUrl || (page?.slug?.current ? page.slug.current : "")
  }`

  return (
    <NextSeo
      title={`${title}${siteName}`}
      description={description}
      openGraph={{
        type: "website",
        //@ts-ignore
        images,
      }}
      canonical={canonicalUrl}
      noindex={page?.seo?.hidden}
      nofollow={page?.seo?.hidden}
      {...rest}
    />
  )
}
