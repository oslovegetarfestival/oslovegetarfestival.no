// Based on https://www.simeongriggs.dev/nextjs-sanity-slug-patterns

export const getQueryFromSlug = (slugArray = []) => {
  // Sanity queries
  const sanityQuery = {
    frontPage: '*[_id == "frontPage"][0]',
    genericPage: '*[_type == "page" && slug.current == $slug][0]',
    eventMain:
      '*[_type == "page" && slug.current == $slug][0] {..., "items": *[_type == "event"]}',
    event: '*[_type == "event" && slug.current == $slug][0]',
    exhibitorMain:
      '*[_type == "page" && slug.current == $slug][0] {..., "items": *[_type == "exhibitor"]}',
    exhibitor: '*[_type == "exhibitor" && slug.current == $slug][0]',
    newsMain:
      '*[_type == "page" && slug.current == $slug][0] {..., "items": *[_type == "news"]}',
    news: '*[_type == "news" && slug.current == $slug][0]',
  }

  // We have to re-combine the slug array to match our slug in Sanity.
  const queryParams = { slug: `/${slugArray.join("/")}` }

  // Front page
  if (slugArray.length === 0) {
    return {
      docType: "frontPage",
      queryParams,
      query: sanityQuery.frontPage,
    }
  }

  // Events
  if (slugArray[0] === "program") {
    // ex: /program
    if (slugArray.length === 1) {
      return {
        docType: "eventMain",
        queryParams,
        query: sanityQuery.eventMain,
      }
    }

    // ex: /program/kokkekurs-med-vegankollektivet
    if (slugArray.length === 2) {
      return {
        docType: "event",
        queryParams,
        query: sanityQuery.event,
      }
    }
  }

  // Exhibitors
  if (slugArray[0] === "utstillere") {
    // ex: /utstillere
    if (slugArray.length === 1) {
      return {
        docType: "exhibitorMain",
        queryParams,
        query: sanityQuery.exhibitorMain,
      }
    }

    // ex: /utstillere/oatly
    if (slugArray.length === 2) {
      return {
        docType: "exhibitor",
        queryParams,
        query: sanityQuery.exhibitor,
      }
    }
  }

  // News
  if (slugArray[0] === "aktuelt") {
    // ex: /aktuelt
    if (slugArray.length === 1) {
      return {
        docType: "newsMain",
        queryParams,
        query: sanityQuery.newsMain,
      }
    }

    // ex: /aktuelt/kongen-apner-festivalen
    if (slugArray.length === 2) {
      return {
        docType: "news",
        queryParams,
        query: sanityQuery.news,
      }
    }
  }

  // Generic page
  return {
    docType: "genericPage",
    queryParams,
    query: sanityQuery.genericPage,
  }
}
