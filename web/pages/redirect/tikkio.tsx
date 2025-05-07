import { Button } from "components/Button"
import { Flow, Section } from "components/Layout"
import { PageLayout } from "components/PageLayout"
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

  return (
    <PageLayout>
      <Section width="small" noPadding="bottom">
        <Flow>
          <h3>Du sendes nå videre til vår billettleverandør Tikkio.</h3>
          <Button link="https://tikkio.com/events/48169-oslo-vegetarfestival-2025">
            Kjøp billett
          </Button>
        </Flow>
      </Section>
    </PageLayout>
  )
}

export default TikkioRedirect
