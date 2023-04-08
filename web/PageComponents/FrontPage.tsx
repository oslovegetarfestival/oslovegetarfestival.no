import type { NextPage } from "next"

import { FrontpageHero } from "components/FrontpageHero"
import { Block, Flex, Section } from "components/Layout"
import { Button } from "components/Button"
import { Card } from "components/Card"
import { BackgroundVideo } from "components/BackgroundVideo"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Seo page={page} isFrontPage />

      <FrontpageHero />

      <Section
        centerContent
        width="full"
        verticalPadding="xlarge"
        style={{ paddingTop: "40px" }}
      >
        <Section width="large" noPadding="sides">
          <h2>Nytt fra festivalen</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedNews} />
          </Block>

          <Button link="/aktuelt">Se alle nyheter</Button>
        </Section>
      </Section>

      <BackgroundVideo />

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large" noPadding="sides">
          <h2>Dette skjer på årets festival</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedEvents} type="eventWithDate" />
          </Block>

          <Button link="program">Se hele programmet</Button>
        </Section>
      </Section>

      <Section
        centerContent
        width="full"
        verticalPadding="xlarge"
        background="lychee"
      >
        <Section width="large" noPadding="sides">
          <h2>Årets utstillere</h2>

          <Block top="8" bottom="6">
            <Card data={page?.promotedExhibitors} />
          </Block>

          <Button link="utstillere">Se alle utstillere</Button>
        </Section>
      </Section>

      <Section centerContent width="full" verticalPadding="xlarge">
        <Section width="large" noPadding="sides">
          {page?.sponsorBlock?.title && (
            <Block top="8" bottom="6">
              <h2>{page?.sponsorBlock?.title}</h2>
            </Block>
          )}

          <Flex justify="center" align="center" gap="medium" wrap>
            {page?.sponsorBlock?.sponsors?.map(
              ({
                image,
                url = "#",
                _key,
              }: {
                title: string
                image: {
                  altText?: string
                  asset: {
                    _ref: string
                  }
                }
                url: string
                _key: string
              }) => (
                <a href={url} key={_key}>
                  <SanityImageWrap
                    image={image}
                    isRoundCorners={false}
                    width={300}
                    style={{
                      maxWidth: "300px",
                      maxHeight: "150px",
                      width: "auto",
                      height: "auto",
                    }}
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
