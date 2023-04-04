import { NextSeo } from "next-seo"

import { urlForImage } from "lib/sanity"

import { DEFAULT_SOME_IMAGE, SITE_NAME } from "const/text"

type SeoProps = {
  page?: {
    title?: string
    intro?: string
    seo?: {
      title?: string
      description?: string
      hidden?: boolean
      image?: Record<string, unknown>
    }
  }
  isFrontPage?: boolean
}

export const Seo = ({ page, isFrontPage, ...rest }: SeoProps) => {
  const title = page?.seo?.title || page?.title || SITE_NAME
  const siteName = isFrontPage ? "" : ` → ${SITE_NAME}`

  const description = page?.seo?.description || page?.intro || ""

  // Prepare image
  const seoImageRef = page?.seo?.image
  const seoImageUrl = seoImageRef ? urlForImage(seoImageRef)?.url() : null
  const seoImage = seoImageUrl ? { url: seoImageUrl } : null

  // TODO: Upload image
  const defaultImage = {
    url: DEFAULT_SOME_IMAGE,
  }

  const images = [defaultImage]
  if (seoImage != null) {
    images.unshift(seoImage)
  }

  return (
    <NextSeo
      title={`${title}${siteName}`}
      description={description}
      openGraph={{
        type: "website",
        images,
      }}
      noindex={page?.seo?.hidden}
      nofollow={page?.seo?.hidden}
      {...rest}
    />
  )
}
