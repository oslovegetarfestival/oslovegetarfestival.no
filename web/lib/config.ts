export const sanityConfig = {
  dataset: "production",
  projectId: "y22dlo4f",
  apiVersion: "2022-09-20",
  useCdn:
    typeof document !== "undefined" && process.env.NODE_ENV === "production"
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // When in production the Sanity API is only queried on build-time, and on-demand when responding to webhooks.
  // Thus the data need to be fresh and API response time is less important.
  // When in development/working locally, it's more important to keep costs down as hot reloading can incurr a lot of API calls
  // And every page load calls getStaticProps.
  // To get the lowest latency, lowest cost, and latest data, use the Instant Preview mode
}
