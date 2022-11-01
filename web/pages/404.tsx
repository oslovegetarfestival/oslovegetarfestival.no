import type { NextPage } from "next"

import { PageLayout } from "components/PageLayout"
import { Flow, Section } from "components/Layout"

type Props = {
  data: Record<string, unknown>
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <PageLayout>
        <Section verticalPadding="xlarge">
          <Flow>
            <h1>Beklager!</h1>
            <h2>Denne siden finnes ikke...</h2>
          </Flow>
        </Section>
      </PageLayout>
    </>
  )
}

export default Home
