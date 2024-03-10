import type { NextPage } from "next"

import { sanityClient } from "lib/sanity"
import { useRouter } from "next/router"
import { Seo } from "components/Seo"
import { HeaderGreenEvents } from "components/HeaderGreenEvents"
import { Section } from "components/Layout"
import { SanityImageWrap } from "components/SanityImageWrap"
import { SanityBlockModule } from "components/SanityBlockModule"
import { FooterGreenEvents } from "components/FooterGreenEvents"

type Props = {
  [key: string]: any
}

const Page: NextPage<Props> = ({ page = {} }) => {
  const router = useRouter()

  return (
    <>
      <Seo page={page} customSiteName="Grønnere mat på arrangementer" />

      <HeaderGreenEvents />

      <main
        data-animate-in
        key={router.asPath}
        style={{ paddingBottom: "60px" }}
      >
        <Section verticalPadding="large" noPadding="top">
          <h1 className="page-title">{page?.title}</h1>
          <p className="lead">{page?.intro}</p>
        </Section>

        <Section width="medium">
          <SanityImageWrap image={page?.image} isFeaturedImage />
        </Section>

        {page?.contentBlocks?.map((module: any) => (
          <SanityBlockModule data={module} key={module._key} />
        ))}
      </main>

      <FooterGreenEvents />
    </>
  )
}

export default Page

// Find all green event pages - needed to build everything static
export const getStaticPaths = async () => {
  const queryAllPages = `*[_type == "greenEvents" && slug.current != '' && slug.current != '/gront-arrangement/forside'] {'slug': slug.current}`
  const paths = (await sanityClient.fetch(queryAllPages)) || []
  return {
    //@ts-ignore
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

// Get data for this particular page
export const getStaticProps = async ({ params }: Props) => {
  const query = `*[_type == 'greenEvents' && slug.current == $slug][0]`
  const queryParams = { slug: `/gront-arrangement/${params.slug}` }
  const result = await sanityClient.fetch(query, queryParams)
  return {
    props: {
      page: result,
    },
  }
}
