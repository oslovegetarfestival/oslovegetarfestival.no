import type { NextPage } from "next"
import { EventJsonLd } from "next-seo"
import { urlForImage } from "lib/sanity"

import { Block, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"

import { weekDayAndStartEndTime } from "utils/date"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"
import Link from "next/link"
import { PageNavigation } from "components/PageNavigation"

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
          <Link href="/program">← Program</Link>
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

        <h1 className="page-title">{currentEvent?.title}</h1>
        <p className="lead">{currentEvent?.intro}</p>
      </Section>

      <Section width="large">
        <SanityImageWrap image={currentEvent?.image} isFeaturedImage />
      </Section>

      {currentEvent?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <PageNavigation previous={previousEvent} next={nextEvent} />

      <EventJsonLd
        name={currentEvent?.title}
        startDate={currentEvent?.startDateTime}
        endDate={currentEvent?.endDateTime}
        location={{
          name: "Kubaparken, Oslo",
          address: {
            streetAddress: "Maridalsveien 20",
            addressRegion: "Oslo",
            postalCode: "0178",
            addressCountry: "NO",
          },
        }}
        url={page?.slug?.current}
        images={[
          urlForImage(currentEvent?.image)?.width(1200).fit("max").url(),
        ]}
        description={currentEvent?.intro}
        organizer={{
          type: "Organization",
          name: "Oslo Vegetarfestival",
          url: "https://www.oslovegetarfestival.no",
        }}
        offers={{
          url: "https://www.oslovegetarfestival.no/billett",
          availability: "https://schema.org/InStock",
        }}
        eventStatus="EventScheduled"
        eventAttendanceMode="OfflineEventAttendanceMode"
      />
    </>
  )
}

export default EventPage
