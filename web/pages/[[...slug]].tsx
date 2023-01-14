import type { NextPage } from "next"
import dynamic from "next/dynamic"

import { sanityClient } from "lib/sanity"
import { getQueryFromSlug } from "lib/getQueryFromSlug"

import { PageLayout } from "components/PageLayout"

// Dynamic imports
const FrontPage = dynamic(() => import("PageComponents/FrontPage"))
const GenericPage = dynamic(() => import("PageComponents/GenericPage"))
const NewsMainPage = dynamic(() => import("PageComponents/NewsMainPage"))
const NewsPage = dynamic(() => import("PageComponents/NewsPage"))
const ExhibitorPage = dynamic(() => import("PageComponents/ExhibitorPage"))
const ExhibitorMainPage = dynamic(
  () => import("PageComponents/ExhibitorMainPage")
)
const EventPage = dynamic(() => import("PageComponents/EventPage"))
const EventMainPage = dynamic(() => import("PageComponents/EventMainPage"))

type Props = {
  [key: string]: any
}

const Page: NextPage<Props> = ({ data = {} }) => {
  const { docType, pageData } = data

  return (
    <PageLayout>
      {/* We'll use custom page routing, rather than using Next.js built in /pages folder routing */}
      {/* This enables ut to all have our queries one place (bottom of this file) rather than in all the pages */}
      {/* It also makes it easier to share data with our PageLayout wrapper */}
      {docType === "frontPage" && <FrontPage page={pageData} />}
      {docType === "genericPage" && <GenericPage page={pageData} />}
      {docType === "newsMain" && <NewsMainPage page={pageData} />}
      {docType === "news" && <NewsPage page={pageData} />}
      {docType === "exhibitor" && <ExhibitorPage page={pageData} />}
      {docType === "exhibitorMain" && <ExhibitorMainPage page={pageData} />}
      {docType === "event" && <EventPage page={pageData} />}
      {docType === "eventMain" && <EventMainPage page={pageData} />}
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
