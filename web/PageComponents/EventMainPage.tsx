import type { NextPage } from "next"

import { Section } from "components/Layout"

import { Card } from "components/Card"
import { SanityBlockModule } from "components/SanityBlockModule"

type Props = {
  [key: string]: any
}

const EventMainPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        {page?.intro && <p className="lead">{page?.intro}</p>}
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="large" verticalPadding="large">
        <Card data={page?.items} />
      </Section>
    </>
  )
}

export default EventMainPage
