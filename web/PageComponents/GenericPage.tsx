import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"
import { Seo } from "components/Seo"

type Props = {
  [key: string]: any
}

const GenericPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Seo page={page} />

      <Section verticalPadding="large" noPadding="top">
        <Flow>
          <h1 className="page-title">{page?.title}</h1>
          <p className="lead">{page?.intro}</p>
        </Flow>
      </Section>

      <Section verticalPadding="tiny" noPadding="top">
        <Image imageObject={page?.image} isFeatureImage />
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default GenericPage
