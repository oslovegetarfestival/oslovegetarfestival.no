import { urlForImage } from "lib/sanity"

import styles from "./Image.module.scss"

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
}

export const Image = ({
  imageObject,
  maxWidth = 1000, // This should be identical to css var "--page-width-medium" (minus padding)
  imageLoading = "lazy",
  hideCaption,
  isFeatureImage,
  ...props
}: Props) => {
  const { caption = "", altText = "" } = imageObject || {}

  if (!imageObject || !imageObject?.asset) return null

  let selectedWidth = maxWidth
  // Default = 1080px
  if (imageObject?.size === "tiny") selectedWidth = 450
  if (imageObject?.size === "small") selectedWidth = 660
  if (imageObject?.size === "large") selectedWidth = 1300

  if (isFeatureImage) {
    return (
      <picture className={styles.picture} {...props}>
        <img
          src={urlForImage(imageObject)
            .width(maxWidth)
            .auto("format")
            .height(650)
            .url()}
          alt={altText}
          loading={imageLoading}
          className={styles.image}
          width={maxWidth}
          height="650"
        />
        {!hideCaption && caption && (
          <figcaption className={styles.imageCredit}>{caption}</figcaption>
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
        className={styles.image}
      />
      {!hideCaption && caption && (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      )}
    </picture>
  )
}
