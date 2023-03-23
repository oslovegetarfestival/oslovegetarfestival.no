import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"

type Props = {
  [key: string]: any
}

const GenericPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
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

export default GenericPage
