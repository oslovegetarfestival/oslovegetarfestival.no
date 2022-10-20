import { urlForImage } from "lib/sanity"

import { Block } from "components/Layout"

import styles from "./Image.module.scss"

type Props = {
  imageObject: {
    caption?: string
    altText?: string
  }
  maxWidth?: number
  height?: number | null
  imageLoading?: "lazy" | "eager"
  hideCaption?: boolean
}

export const Image = ({
  imageObject,
  maxWidth = 800, // This should be identical to css var "--page-width-medium"
  height = null,
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
      />
      {!hideCaption && caption && (
        <Block top="3">
          <figcaption className={styles.figcaption}>
            <span className="text-caption">{caption}</span>
          </figcaption>
        </Block>
      )}
    </picture>
  )
}
