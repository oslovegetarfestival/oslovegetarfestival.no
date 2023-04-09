import Link from "next/link"

import { Flow } from "components/Layout"

import styles from "./Card.module.scss"
import { fullDate, startAndEndTime } from "utils/date"
import { weekDayAndStartEndTime } from "utils/date"
import { SanityImageWrap } from "components/SanityImageWrap"

type Item = {
  image: {
    altText?: string
    asset: {
      _ref: string
    }
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

type TypeProps = "event" | "eventWithDate" | "news"

type Props = {
  data: Item[]
  type?: TypeProps
}

type EventDateProps = {
  type?: TypeProps
  item: Item
}

const createEventDate = ({ type, item }: EventDateProps) => {
  if (!type) return
  if (!item?.startDateTime) return

  // Show weekday (used for frontpage listing)
  if (type === "eventWithDate") {
    return weekDayAndStartEndTime({
      startDate: item?.startDateTime,
      endDate: item?.endDateTime,
    })
  }

  if (type === "event") {
    return startAndEndTime({
      startDate: item?.startDateTime,
      endDate: item?.endDateTime,
    })
  }

  if (type === "news") {
    return fullDate(item?.publishedDate || "")
  }

  return ""
}

export const Card = ({ data, type }: Props) => {
  return (
    <div className={styles.grid}>
      {data?.map((item) => (
        <Link key={item._id} href={item.slug?.current}>
          <a className={styles.link}>
            <div className={styles.wrap}>
              <SanityImageWrap
                image={item?.image}
                width={468} // = Largest width on any screen size
                height={352}
                isHideCaption
              />
              <div className={styles.content}>
                <p className={styles.metadata}>
                  {createEventDate({ type: type, item: item })}
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
