import type { NextPage } from "next"

import { Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"

type Props = {
  [key: string]: any
}

const EventPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large">
        <p className="breadcrumb">Arrangement</p>
        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default EventPage
