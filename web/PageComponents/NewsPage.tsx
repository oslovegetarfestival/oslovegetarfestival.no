import type { NextPage } from "next"

import { Block, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"
import { fullDate } from "utils/date"
import { SanityImageWrap } from "components/SanityImageWrap"
import { SanityImage } from "sanity-image"
// import { SanityImage } from "sanity-image"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  console.log("page", page)
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
        {/* <SanityImage
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={page?.image?.asset?._ref}
          baseUrl="https://cdn.sanity.io/images/y22dlo4f/production/"
          alt="Demo image"
        /> */}
        <SanityImageWrap
          image={page?.image}
          width="1380"
          height="800"
          mode="cover"
        />
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
