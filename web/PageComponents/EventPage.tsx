import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"

import { weekDayAndStartEndTime } from "utils/date"

type Props = {
  [key: string]: any
}

const EventPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <Flow space="small">
          <h1 className="page-title">{page?.title}</h1>
          <p className="meta-details">
            {weekDayAndStartEndTime({
              startDate: page?.startDateTime,
              endDate: page?.endDateTime,
            })}
            {" | "}
            {page?.location?.title}
          </p>
        </Flow>
      </Section>

      <Section verticalPadding="tiny" noPadding="top">
        <Flow>
          <Image imageObject={page?.image} isFeatureImage />
          <p className="lead">{page?.intro}</p>
        </Flow>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default EventPage
