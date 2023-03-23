import { urlForImage } from "lib/sanity"

import styles from "./Image.module.scss"

type Props = {
  imageObject: {
    caption?: string
    altText?: string
    asset: object
  }
  maxWidth?: number
  imageLoading?: "lazy" | "eager"
  hideCaption?: boolean
  isFeatureImage?: boolean
}

export const Image = ({
  imageObject,
  maxWidth = 1080, // This should be identical to css var "--page-width-medium"
  imageLoading = "lazy",
  hideCaption,
  isFeatureImage,
  ...props
}: Props) => {
  const { caption = "", altText = "" } = imageObject || {}

  if (!imageObject || !imageObject?.asset) return null

  if (isFeatureImage) {
    return (
      <picture {...props}>
        <img
          src={urlForImage(imageObject)
            .width(maxWidth)
            .auto("format")
            .height(650)
            .url()}
          alt={altText}
          loading={imageLoading}
          className={styles.image}
        />
        {!hideCaption && caption && (
          <figcaption className={styles.figcaption}>
            <span className="text-caption">{caption}</span>
          </figcaption>
        )}
      </picture>
    )
  }

  return (
    <picture {...props}>
      <img
        src={urlForImage(imageObject)
          .width(maxWidth)
          .fit("max")
          .auto("format")
          .url()}
        alt={altText}
        loading={imageLoading}
        className={styles.image}
      />
      {!hideCaption && caption && (
        <figcaption className={styles.figcaption}>
          <span className="text-caption">{caption}</span>
        </figcaption>
      )}
    </picture>
  )
}
