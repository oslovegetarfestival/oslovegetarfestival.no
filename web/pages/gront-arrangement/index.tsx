import type { NextPage } from "next"

import { sanityClient } from "lib/sanity"
import { useRouter } from "next/router"
import { HeaderGreenEvents } from "components/HeaderGreenEvents"
import { Seo } from "components/Seo"
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
      <Seo page={page} />

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

// Get data for this particular page
export const getStaticProps = async () => {
  const query = `*[_type == 'greenEvents' && slug.current == '/gront-arrangement/forside'][0]`
  const result = await await sanityClient.fetch(query)
  console.log("result", result)
  return {
    props: {
      page: result,
    },
  }
}
