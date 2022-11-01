import type { NextPage } from "next"

import { sanityClient } from "lib/sanity"
import { getQueryFromSlug } from "lib/getQueryFromSlug"
import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const Page: NextPage<Props> = ({ data = {} }) => {
  return (
    <Section verticalPadding="large">
      <h1>{data?.pageData?.title}</h1>
      <p>{data?.pageData?.intro}</p>
    </Section>
  )
}

export default Page

// Fetch and prebuild all pages
export async function getStaticPaths() {
  // Query every single page and path
  const query = `*[_type in ["page", "event", "exhibitor", "news"] && defined(slug.current)][].slug.current`
  const pageQueries = await sanityClient.fetch(query)

  // Add our index (front page)
  pageQueries.push("/")

  // Split the slug strings to arrays (as required by Next.js)
  const paths = pageQueries.map((slug: string) => ({
    params: { slug: slug.split("/").filter((p) => p) },
  }))
  console.log("paths", paths)

  return { paths, fallback: false }
}

// Fetch this particular page (based on slug)
export async function getStaticProps({ params }: Props) {
  // A helper function to work out what query we should run based on this slug
  const { query, queryParams, docType } = getQueryFromSlug(params.slug)

  // Get the initial data for this page, using the correct query
  const pageData = await sanityClient.fetch(query, queryParams)

  return {
    props: {
      data: { query, queryParams, docType, pageData },
    },
  }
}
