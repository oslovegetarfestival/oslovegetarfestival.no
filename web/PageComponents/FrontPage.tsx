import type { NextPage } from "next"

import { FrontpageHero } from "components/FrontpageHero"
import { Block, Flex, Section } from "components/Layout"
import { Button } from "components/Button"
import { Card } from "components/Card"
import { BackgroundVideo } from "components/BackgroundVideo"
import { Image } from "components/Image"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <FrontpageHero />

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large" noPadding="sides">
          <h2>Nytt fra festivalen</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedNews} />
          </Block>

          <Button size="large" link="/aktuelt">
            Se alle nyheter
          </Button>
        </Section>
      </Section>

      <BackgroundVideo />

      <Section
        centerContent
        background="lychee"
        width="full"
        verticalPadding="xlarge"
      >
        <Section width="large" noPadding="sides">
          <h2>Dette skjer på årets festival</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedEvents} type="eventWithDate" />
          </Block>

          <Button size="large" link="program">
            Se hele programmet
          </Button>
        </Section>
      </Section>

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large" noPadding="sides">
          <h2>Årets utstillere</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedExhibitors} />
          </Block>

          <Button size="large" link="utstillere">
            Se alle utstillere
          </Button>
        </Section>
      </Section>

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large" noPadding="sides">
          {page?.sponsorBlock?.title && (
            <Block top="8" bottom="6">
              <h2>{page?.sponsorBlock?.title}</h2>
            </Block>
          )}

          <Flex justify="center" wrap>
            {page?.sponsorBlock?.sponsors?.map(
              ({
                title = "",
                image,
                url = "#",
                _key,
              }: {
                title: string
                image: object
                url: string
                _key: string
              }) => (
                <a href={url} key={_key}>
                  <Image
                    //@ts-ignore
                    imageObject={image}
                    title={title}
                    maxWidth={300}
                    alt={title}
                    isRoundCorners={false}
                  />
                </a>
              )
            )}
          </Flex>
        </Section>
      </Section>
    </>
  )
}

export default FrontPage
