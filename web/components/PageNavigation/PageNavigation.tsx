import Link from "next/link"

import { Flex, Section } from "components/Layout"

import styles from "./PageNavigation.module.scss"
import { weekDayAndStartEndTime } from "utils/date"

type Page = {
  title: string
  slug: {
    current: string
  }
  startDateTime?: string
}

type Props = {
  next?: Page
  previous?: Page
}

export const PageNavigation = ({ previous, next }: Props) => {
  return (
    <Section width="small" verticalPadding="medium">
      <Flex gap="small" justify="spaceBetween">
        {previous?.slug?.current && (
          <div className={styles.wrap}>
            <Link href={previous?.slug?.current} className={styles.previous}>
              {previous?.startDateTime && (
                <p className="meta-details">
                  {weekDayAndStartEndTime({
                    startDate: previous.startDateTime,
                  })}
                </p>
              )}
              <p>{previous?.title}</p>
              <div aria-hidden>←</div>
            </Link>
          </div>
        )}

        {next?.slug?.current && (
          <div className={styles.wrap}>
            <Link href={next?.slug?.current} className={styles.next}>
              {next?.startDateTime && (
                <p className="meta-details">
                  {weekDayAndStartEndTime({
                    startDate: next?.startDateTime,
                  })}
                </p>
              )}
              <p>{next?.title}</p>
              <div aria-hidden>→</div>
            </Link>
          </div>
        )}
      </Flex>
    </Section>
  )
}
