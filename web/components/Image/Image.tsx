import { urlForImage } from "lib/sanity"

import { Block } from "components/Layout"

import styles from "./Image.module.scss"

type Props = {
  imageObject: {
    caption?: string
    altText?: string
  }
  maxWidth?: number
  imageLoading?: "lazy" | "eager"
  hideCaption?: boolean
}

export const Image = ({
  imageObject,
  maxWidth = 1000, // This should be identical to css var "--page-width-medium"
  imageLoading = "lazy",
  hideCaption,
  ...props
}: Props) => {
  const { caption = "", altText = "" } = imageObject || {}

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
