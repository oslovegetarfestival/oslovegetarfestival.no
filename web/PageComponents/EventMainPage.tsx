import type { NextPage } from "next"

import { Section } from "components/Layout"

import { EventList } from "components/Events"
import { SanityBlockModule } from "components/SanityBlockModule"

type Props = {
  [key: string]: any
}

const EventMainPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="large" verticalPadding="large">
        <EventList events={page.items} />
      </Section>
    </>
  )
}

export default EventMainPage
