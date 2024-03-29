import type { NextPage } from "next"

import { Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"

type Props = {
  [key: string]: any
}

const GenericPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Seo page={page} />

      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      <Section width="medium">
        <SanityImageWrap image={page?.image} isFeaturedImage loading="eager" />
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default GenericPage
