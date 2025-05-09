import Link from "next/link"

import { Flow } from "components/Layout"

import styles from "./Card.module.scss"
import { fullDate, startAndEndTime } from "utils/date"
import { weekDayAndStartEndTime } from "utils/date"
import { SanityImageWrap } from "components/SanityImageWrap"
import classNames from "classnames"

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
  isEagerLoadImages?: boolean
  isScroll?: boolean
  isSplit?: boolean
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

export const Card = ({
  data,
  type,
  isEagerLoadImages = false,
  isScroll,
  isSplit,
}: Props) => {
  const gridClass = classNames({
    [styles.grid]: true,
    [styles[`grid-isScroll`]]: isScroll,
    [styles[`grid-isSplit`]]: isSplit,
  })

  const wrapClass = classNames({
    [styles.wrap]: true,
    [styles[`wrap-isSplit`]]: isSplit,
  })

  const titleClass = classNames({
    h3: true,
    [styles.title]: true,
  })
  return (
    <div className={gridClass}>
      {data?.map((item) => (
        <Link key={item._id} href={item.slug?.current} className={styles.link}>
          <div className={wrapClass}>
            <SanityImageWrap
              image={item?.image}
              width={468} // = Largest width on any screen size
              height={352}
              isHideCaption
              loading={isEagerLoadImages ? "eager" : "lazy"}
            />
            <div className={styles.content}>
              <p className={styles.metadata}>
                {createEventDate({ type: type, item: item })}
                <br />
                {item.location?.title}
              </p>
              <Flow space="xsmall">
                <h2 className={titleClass}>{item.title}</h2>
                <p className={styles.intro}>{item.intro}</p>
              </Flow>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
