import type { NextPage } from "next"

import { Block, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"
import { fullDate } from "utils/date"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <Block bottom="2">
          <p className="meta-details">
            Publisert: {fullDate(page?.publishedDate)}
          </p>
        </Block>
        <Flow>
          <h1 className="page-title">{page?.title}</h1>
          <p className="lead">{page?.intro}</p>
        </Flow>
      </Section>

      <Section width="large" verticalPadding="tiny" noPadding="top">
        <Image imageObject={page?.image} isFeatureImage />
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default NewsPage
