import { NextSeo } from "next-seo"

import { urlForImage } from "lib/sanity"

type SeoProps = {
  page?: {
    title?: string
    intro?: string
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
}

const SITE_NAME = "Oslo Vegetarfestival"

export const Seo = ({ page, isFrontPage, ...rest }: SeoProps) => {
  const title = page?.seo?.title || page?.title || SITE_NAME
  const siteName = isFrontPage ? "" : ` → ${SITE_NAME}`

  const description = page?.seo?.description || page?.intro || ""

  // Ordinary main image
  const mainImage =
    page?.image?.asset && urlForImage(page?.image)?.width(1200).fit("max").url()

  // SEO image
  const seoImage =
    page?.seo?.image?.asset &&
    urlForImage(page?.seo?.image)?.width(1200).fit("max").url()

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
  console.log("images", images)

  return (
    <NextSeo
      title={`${title}${siteName}`}
      description={description}
      openGraph={{
        type: "website",
        //@ts-ignore
        images,
      }}
      noindex={page?.seo?.hidden}
      nofollow={page?.seo?.hidden}
      {...rest}
    />
  )
}
