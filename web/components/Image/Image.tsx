import { urlForImage } from "lib/sanity"

import styles from "./Image.module.scss"
import classNames from "classnames"

type Props = {
  imageObject: {
    caption?: string
    altText?: string
    asset: object
    size?: string
  }
  maxWidth?: number
  imageLoading?: "lazy" | "eager"
  hideCaption?: boolean
  isFeatureImage?: boolean
  isRoundCorners?: boolean
}

export const Image = ({
  imageObject,
  maxWidth = 700,
  imageLoading = "lazy",
  hideCaption,
  isFeatureImage,
  isRoundCorners = true,
  ...props
}: Props) => {
  const { caption = "", altText = "" } = imageObject || {}

  if (!imageObject || !imageObject?.asset) return null

  let selectedWidth = maxWidth
  if (imageObject?.size === "small") selectedWidth = 700
  if (imageObject?.size === "tiny") selectedWidth = 450

  const imageClass = classNames(
    styles.image,
    isRoundCorners ? styles["-round-corners"] : false
  )

  if (isFeatureImage) {
    return (
      <picture className={styles.picture} {...props}>
        <img
          src={urlForImage(imageObject)
            .width(1380)
            .auto("format")
            .height(800)
            .url()}
          alt={altText}
          loading="eager"
          className={imageClass}
          width={1380}
          height="800"
        />
        {!hideCaption && caption && (
          <figcaption aria-hidden="true" className={styles.imageCredit}>
            {caption}
          </figcaption>
        )}
      </picture>
    )
  }

  return (
    <picture {...props}>
      <img
        src={urlForImage(imageObject)
          .width(selectedWidth)
          .fit("max")
          .auto("format")
          .url()}
        alt={altText}
        loading={imageLoading}
        className={imageClass}
      />
      {!hideCaption && caption && (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      )}
    </picture>
  )
}
