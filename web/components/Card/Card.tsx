import Link from "next/link"
import { urlForImage } from "lib/sanity"
import Image from "next/future/image"

import { Flow } from "components/Layout"

import styles from "./Card.module.scss"
import { weekDayAndStartEndTime } from "utils/date"

type Item = {
  image: {
    altText?: string
  }
  title: string
  intro: string
  slug: {
    current: string
  }
  location?: {
    title: string
  }
  startDateTime: string
  endDateTime?: string
  _key: string
}

type Props = {
  data: Item[]
}

export const Card = ({ data }: Props) => {
  return (
    <div className={styles.grid}>
      {data?.map((item) => (
        <Link key={item._key} href={item.slug?.current}>
          <a className={styles.link}>
            <div className={styles.wrap}>
              <picture className={styles.imageWrap}>
                <div className={styles.date}>
                  {weekDayAndStartEndTime({
                    startDate: item.startDateTime,
                    endDate: item.endDateTime,
                  })}
                </div>
                <Image
                  src={urlForImage(item.image)
                    .width(800)
                    .height(800)
                    .fit("max")
                    .auto("format")
                    .url()}
                  alt={item.image?.altText ?? ""}
                  className={styles.image}
                  fill
                />
              </picture>

              <div className={styles.content}>
                <Flow space="xsmall">
                  <h2>{item.title}</h2>
                  <p className={styles.location}>{item.location?.title}</p>
                  <p>{item.intro}</p>
                </Flow>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
