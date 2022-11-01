import type { NextPage } from "next"
import { sanityClient } from "lib/sanity"

import { Seo } from "components/Seo"
import { Card, CardGrid } from "components/Card"
import { Section } from "components/Layout"
type Props = {
  data: {
    post: [
      {
        name: string
        jobTitle: string
        intro: string
        image: Record<string, unknown>
      }
    ]
  }
  preview: boolean
}

const Page: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Seo />

      <Section width="large" verticalPadding="xlarge">
        <h1>Foredragsholdere</h1>

        <CardGrid>
          {data?.post?.map(({ name, jobTitle, image, intro }) => (
            <Card
              title={name}
              subTitle={jobTitle}
              content={intro}
              image={image}
              key={name}
            />
          ))}
        </CardGrid>
      </Section>
    </>
  )
}

export default Page

export async function getStaticProps({ preview = false }) {
  const query = `*[_type == "speakers"] | order(name) {
    ...,
    image {
      ...,
      "metadata": asset -> metadata
    }
  }`
  const post = (await sanityClient.fetch(query)) || []

  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  }
}
