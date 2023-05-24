import { SanityImage } from "sanity-image"
import classNames from "classnames"
import { sanityConfig } from "lib/sanity"

import styles from "./SanityImageWrap.module.scss"

type Props = {
  image: {
    altText?: string
    caption?: string
    size?: "tiny" | "small"
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
  isHideCaption?: boolean
  fill?: "cover" | "contain"
  loading?: "eager" | "lazy"
  style?: object
}

export const SanityImageWrap = ({
  image,
  width = 1300, // Make sure we're never loading full resolution images by a mistake
  height,
  isRoundCorners = true,
  isFeaturedImage,
  isHideCaption,
  fill = "cover",
  loading = "lazy",
  style,
}: Props) => {
  const imageId = image?.asset?._ref
  if (!imageId) return null

  if (isFeaturedImage) {
    width = 1300
    height = 700
    loading = "eager"
  }

  if (image?.size === "tiny") {
    width = 450
  }

  if (image?.size === "small") {
    width = 700
  }

  const imageClass = classNames(
    styles.image,
    isRoundCorners ? styles["-round-corners"] : false,
    isFeaturedImage ? styles["-featured"] : false
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
        style={style}
        alt={image?.altText ?? ""}
      />
      {!isHideCaption && image?.caption && (
        <figcaption aria-hidden="true" className={captionClass}>
          {image?.caption}
        </figcaption>
      )}
    </picture>
  )
}
