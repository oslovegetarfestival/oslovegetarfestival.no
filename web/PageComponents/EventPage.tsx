import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"

import { weekDayAndStartEndTime } from "utils/date"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"
import Link from "next/link"

type Props = {
  [key: string]: any
}

const EventPage: NextPage<Props> = ({ page = {} }) => {
  const { currentEvent, allEvents } = page

  // Find previous and next event
  const currentIndex = allEvents?.findIndex(
    (event: any) => event?._id === currentEvent?._id
  )
  const nextEvent = allEvents?.[currentIndex + 1]
  const previousEvent = allEvents?.[currentIndex - 1]

  return (
    <>
      <Seo page={currentEvent} />

      <Section verticalPadding="large" noPadding="top">
        <Block top="4" bottom="4">
          <Link href="/program">
            <a>← Program</a>
          </Link>
        </Block>
        <Block bottom="2">
          <p className="meta-details">
            {weekDayAndStartEndTime({
              startDate: currentEvent?.startDateTime,
              endDate: currentEvent?.endDateTime,
            })}
            — {currentEvent?.location?.title}
          </p>
        </Block>
        <Flow>
          <h1 className="page-title">{currentEvent?.title}</h1>
          <p className="lead">{currentEvent?.intro}</p>
        </Flow>
      </Section>

      <Section width="large" verticalPadding="tiny" noPadding="top">
        <SanityImageWrap image={currentEvent?.image} isFeaturedImage />
      </Section>

      {currentEvent?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="small" verticalPadding="medium">
        <Flex gap="medium" justify="spaceBetween" wrap>
          {previousEvent?.slug?.current && (
            <Link href={previousEvent?.slug?.current}>
              <div>
                <a>
                  <p className="meta-details" style={{ textAlign: "left" }}>
                    {weekDayAndStartEndTime({
                      startDate: previousEvent?.startDateTime,
                      endDate: previousEvent?.endDateTime,
                    })}
                  </p>
                  <p>← {previousEvent?.title}</p>
                </a>
              </div>
            </Link>
          )}
          {nextEvent?.slug?.current && (
            <Link href={nextEvent?.slug?.current}>
              <div>
                <a>
                  <p className="meta-details" style={{ textAlign: "left" }}>
                    {weekDayAndStartEndTime({
                      startDate: nextEvent?.startDateTime,
                      endDate: nextEvent?.endDateTime,
                    })}
                  </p>
                  <p>{nextEvent?.title} →</p>
                </a>
              </div>
            </Link>
          )}
        </Flex>
      </Section>
    </>
  )
}

export default EventPage
