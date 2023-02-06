import Link from "next/link"
import { urlForImage } from "lib/sanity"
import Image from "next/future/image"

import { Flow } from "components/Layout"

import styles from "./EventItem.module.scss"

type Props = {
  event: {
    image: {
      altText?: string
    }
    title: string
    intro: string
    slug: {
      current: string
    }
  }
}

export const EventItem = ({ event }: Props) => {
  return (
    <div className={styles.eventItem}>
      <picture className={styles.imageWrap}>
        <Image
          src={urlForImage(event?.image)
            .width(800)
            .height(800)
            .fit("max")
            .auto("format")
            .url()}
          alt={event?.image?.altText ?? ""}
          className={styles.image}
          fill
        />
      </picture>

      <div className={styles.content}>
        <Flow space="xsmall">
          <h2>{event?.title}</h2>
          <p>{event?.intro}</p>
        </Flow>
      </div>

      <Link href={event?.slug?.current}>
        <a className={styles.link}>Mer om arrangementet</a>
      </Link>
    </div>
  )
}