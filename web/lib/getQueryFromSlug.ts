// This is based on https://www.simeongriggs.dev/nextjs-sanity-slug-patterns

export const getQueryFromSlug = (slugArray = []) => {
  // Sanity queries
  const sanityQuery = {
    frontPage: '*[_id == "frontPage"][0]',
    page: '*[_type == "page" && slug.current == $slug][0]',
    event: '*[_type == "event" && slug.current == $slug][0]',
    exhibitor: '*[_type == "exhibitor" && slug.current == $slug][0]',
    news: '*[_type == "news" && slug.current == $slug][0]',
  }

  // We have to re-combine the slug array to match our slug in Sanity.
  const queryParams = { slug: `/${slugArray.join("/")}` }

  // Page
  // Ex: /program
  if (slugArray.length === 1) {
    return {
      docType: "page",
      queryParams,
      query: sanityQuery.page,
    }
  }

  // Events
  // Ex: /program/kokkekurs-med-veganmannen
  if (slugArray[0] === "program") {
    return {
      docType: "event",
      queryParams,
      query: sanityQuery.event,
    }
  }

  // Exhibitor
  if (slugArray[0] === "utstiller") {
    return {
      docType: "exhibitor",
      queryParams,
      query: sanityQuery.exhibitor,
    }
  }

  // News
  if (slugArray[0] === "aktuelt") {
    return {
      docType: "news",
      queryParams,
      query: sanityQuery.news,
    }
  }

  // Front page
  return {
    docType: "frontPage",
    queryParams,
    query: sanityQuery.frontPage,
  }
}
