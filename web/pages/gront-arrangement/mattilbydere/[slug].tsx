import type { NextPage } from "next"

import { sanityClient } from "lib/sanity"
import { useRouter } from "next/router"
import { Seo } from "components/Seo"
import { HeaderGreenEvents } from "components/HeaderGreenEvents"
import { Block, Section } from "components/Layout"
import { SanityImageWrap } from "components/SanityImageWrap"
import { SanityBlockModule } from "components/SanityBlockModule"
import { FooterGreenEvents } from "components/FooterGreenEvents"
import Link from "next/link"

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
          <Block top="4" bottom="4">
            <Link href="/gront-arrangement/mattilbydere">← Mattilbydere</Link>
          </Block>

          <h1 className="page-title">{page?.title}</h1>
          <p className="lead">{page?.intro}</p>
        </Section>

        <Section width="medium">
          <SanityImageWrap
            image={page?.image}
            isFeaturedImage
            loading="eager"
          />
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

// Find all green event food provider pages - needed to build everything static
export const getStaticPaths = async () => {
  const queryAllPages = `*[_type == "greenEventsFoodProvider" && slug.current != ''] {'slug': slug.current}`
  const paths = (await sanityClient.fetch(queryAllPages)) || []
  return {
    //@ts-ignore
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

// Get data for this particular page
export const getStaticProps = async ({ params }: Props) => {
  const query = `*[_type == 'greenEventsFoodProvider' && slug.current == $slug][0]`
  const queryParams = { slug: `/gront-arrangement/mattilbydere/${params.slug}` }
  const result = await sanityClient.fetch(query, queryParams)
  return {
    props: {
      page: result,
    },
  }
}
