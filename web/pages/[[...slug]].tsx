import type { NextPage } from "next"
import dynamic from "next/dynamic"

import { sanityClient } from "lib/sanity"
import { getQueryFromSlug } from "lib/getQueryFromSlug"

import { PageLayout } from "components/PageLayout"

// Dynamic imports
const FrontPage = dynamic(() => import("components/Pages/FrontPage"))
const GenericPage = dynamic(() => import("components/Pages/GenericPage"))
const NewsPage = dynamic(() => import("components/Pages/NewsPage"))
const ExhibitorPage = dynamic(() => import("components/Pages/ExhibitorPage"))
const EventPage = dynamic(() => import("components/Pages/EventPage"))

type Props = {
  [key: string]: any
}

const Page: NextPage<Props> = ({ data = {} }) => {
  const { docType, pageData } = data

  return (
    <PageLayout>
      {docType === "frontPage" && <FrontPage page={pageData} />}
      {docType === "page" && <GenericPage page={pageData} />}
      {docType === "news" && <NewsPage page={pageData} />}
      {docType === "exhibitor" && <ExhibitorPage page={pageData} />}
      {docType === "event" && <EventPage page={pageData} />}
    </PageLayout>
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
