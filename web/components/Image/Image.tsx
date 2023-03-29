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
  maxWidth = 660,
  imageLoading = "lazy",
  hideCaption,
  isFeatureImage,
  ...props
}: Props) => {
  const { caption = "", altText = "" } = imageObject || {}

  if (!imageObject || !imageObject?.asset) return null

  let selectedWidth = maxWidth
  if (imageObject?.size === "small") selectedWidth = 660
  if (imageObject?.size === "tiny") selectedWidth = 450

  if (isFeatureImage) {
    return (
      <picture className={styles.picture} {...props}>
        <img
          src={urlForImage(imageObject)
            .width(1000)
            .auto("format")
            .height(650)
            .url()}
          alt={altText}
          loading={imageLoading}
          className={styles.image}
          width={1000}
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
