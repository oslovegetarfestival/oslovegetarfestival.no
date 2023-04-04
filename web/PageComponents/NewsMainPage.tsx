import type { NextPage } from "next"

import { Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Card } from "components/Card"
import { Seo } from "components/Seo"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Seo page={page} />

      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="large" verticalPadding="large">
        <Card data={page?.items} type="news" />
      </Section>
    </>
  )
}

export default NewsPage
