import type { NextPage } from "next"

import { FrontpageHero } from "components/FrontpageHero"
import { Block, Section } from "components/Layout"
import { Button } from "components/Button"
import { Card } from "components/Card"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <FrontpageHero />

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large">
          <h2>Nytt fra festivalen</h2>

          <Block top="8" bottom="8">
            <Card data={page?.promotedNews} type="news" />
          </Block>

          <Button size="large" link="/aktuelt">
            Se alle nyheter
          </Button>
        </Section>
      </Section>

      <Section
        centerContent
        background="lychee"
        width="full"
        verticalPadding="xlarge"
      >
        <Section width="large">
          <h2>Dette skjer på årets festival</h2>

          <Block top="8" bottom="8">
            <Card data={page?.promotedEvents} type="event" />
          </Block>

          <Button size="large" link="program">
            Se hele programmet
          </Button>
        </Section>
      </Section>

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large">
          <h2>Årets utstillere</h2>

          <Block top="8" bottom="8">
            <Card data={page?.promotedExhibitors} />
          </Block>

          <Button size="large" link="utstillere">
            Se alle utstillere
          </Button>
        </Section>
      </Section>
    </>
  )
}

export default FrontPage
