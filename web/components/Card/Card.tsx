import Link from "next/link"
import { urlForImage } from "lib/sanity"
import Image from "next/future/image"

import { Flow } from "components/Layout"

import styles from "./Card.module.scss"
import { fullDate, startAndEndTime } from "utils/date"

type Item = {
  image: {
    altText?: string
    asset: object
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
  publishedDate?: string
  _createdAt: string
  sponsor: boolean
  _id: string
}

type Props = {
  data: Item[]
  type?: "event" | "news"
}

export const Card = ({ data, type }: Props) => {
  return (
    <div className={styles.grid}>
      {data?.map((item) => (
        <Link key={item._id} href={item.slug?.current}>
          <a className={styles.link}>
            <div className={styles.wrap}>
              <picture className={styles.imageWrap}>
                {item?.image?.asset && (
                  <Image
                    src={urlForImage(item.image)
                      .width(400)
                      .height(320)
                      .fit("max")
                      .auto("format")
                      .url()}
                    alt={item.image?.altText ?? ""}
                    className={styles.image}
                    width={400}
                    height={320}
                    sizes="25vw"
                  />
                )}
              </picture>
              <div className={styles.content}>
                <p className={styles.metadata}>
                  {type === "event" && (
                    <>
                      {item?.startDateTime &&
                        startAndEndTime({
                          startDate: item?.startDateTime,
                          endDate: item?.endDateTime,
                        })}
                      {item.location?.title && <>— {item.location?.title}</>}
                    </>
                  )}
                  {type === "news" && (
                    <>{fullDate(item?.publishedDate ?? item._createdAt)}</>
                  )}
                </p>
                <Flow space="xsmall">
                  <h2 className="h3">{item.title}</h2>
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
