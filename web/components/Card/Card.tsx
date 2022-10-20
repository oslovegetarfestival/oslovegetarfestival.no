/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { urlForImage } from "lib/sanity"
import Image from "next/future/image"

import { Flow } from "components/Layout"

import styles from "./Card.module.scss"

type Props = {
  image: {
    altText?: string
    metadata?: any
  }
  title: string
  subTitle: string
  content: string
}

export const Card = ({ title, subTitle, content, image }: Props) => {
  const [isImageReady, setIsImageReady] = useState(false)

  const fadeInImage = () => {
    setIsImageReady(true)
  }

  return (
    <article className={styles.card}>
      <picture
        className={styles.imageWrap}
        style={{
          backgroundColor: image?.metadata?.palette?.lightMuted?.background,
        }}
      >
        <Image
          src={urlForImage(image)
            .width(800)
            .height(800)
            .fit('max')
            .auto('format')
            .url()}
          alt={image?.altText ?? ''}
          className={styles.image}
          fill
          onLoadingComplete={fadeInImage}
          style={{ transition: '0.1s', opacity: isImageReady ? '1' : '0' }}
        />
      </picture>

      <div className={styles.content}>
        {title && <h2 className="h3">{title}</h2>}

        <Flow>
          {subTitle && <p>{subTitle}</p>}

          {content && <div>{content}</div>}
        </Flow>
      </div>
    </article>
  )
}
