import type { NextPage } from "next"

import { Block, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { fullDate } from "utils/date"
import { SanityImageWrap } from "components/SanityImageWrap"
import Link from "next/link"
import { Seo } from "components/Seo"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Seo page={page} />

      <Section verticalPadding="large" noPadding="top">
        <Block top="4" bottom="4">
          <Link href="/aktuelt">← Aktuelt</Link>
        </Block>
        <Block bottom="2">
          <p className="meta-details">
            Publisert: {fullDate(page?.publishedDate)}
          </p>
        </Block>

        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      <Section width="medium">
        <SanityImageWrap image={page?.image} isFeaturedImage />
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default NewsPage
