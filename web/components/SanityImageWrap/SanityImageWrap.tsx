import { SanityImage } from "sanity-image"
import classNames from "classnames"
import { sanityConfig } from "lib/sanity"

import styles from "./SanityImageWrap.module.scss"

type Props = {
  image: {
    altText?: string
    caption?: string
    asset: {
      _ref: string
    }
    hotspot?: {
      x: number
      y: number
    }
    crop?: {
      bottom: number
      left: number
      right: number
      top: number
    }
  }
  width?: number
  height?: number
  isRoundCorners?: boolean
  isFeaturedImage?: boolean
  fill?: "cover" | "contain"
  loading?: "eager" | "lazy"
  [x: string]: any
}

export const SanityImageWrap = ({
  image,
  width,
  height,
  isRoundCorners = true,
  isFeaturedImage,
  fill = "cover",
  loading = "lazy",
}: Props) => {
  const imageId = image?.asset?._ref
  if (!imageId) return null

  if (isFeaturedImage) {
    width = 1300
    height = 800
  }

  const imageClass = classNames(
    styles.image,
    isRoundCorners ? styles["-round-corners"] : false
  )

  const captionClass = classNames(
    isFeaturedImage ? styles["imageCredit"] : styles["figcaption"]
  )

  return (
    <picture className={styles.picture}>
      <SanityImage
        baseUrl={`https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/`}
        id={imageId}
        crop={image?.crop}
        hotspot={image?.hotspot}
        loading={loading}
        width={width}
        height={height}
        mode={fill}
        className={imageClass}
        alt={image?.altText ?? ""}
      />
      {image?.caption && (
        <figcaption aria-hidden="true" className={captionClass}>
          {image?.caption}
        </figcaption>
      )}
    </picture>
  )
}
