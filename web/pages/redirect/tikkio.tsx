import type { NextPage } from "next"
import { useEffect } from "react"

// Redirect page to be able to track traffic to Tikkio
const TikkioRedirect: NextPage = () => {
  useEffect(() => {
    // Small delay to allow google tag manager to load
    const redirectTimer = setTimeout(() => {
      window.location.href =
        "https://tikkio.com/events/48169-oslo-vegetarfestival-2025"
    }, 1000)

    return () => clearTimeout(redirectTimer)
  }, [])

  return null
}

export default TikkioRedirect
