import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"

import { Button } from "components/Button"
import { sanityClient } from "lib/sanity"
import { PageLayout } from "components/PageLayout"
import { Accordion } from "components/Accordion"
import Link from "next/link"
import { Seo } from "components/Seo"

type Props = {
  data: {
    type: string
    title: string
    menu?: any
    _id: string
    slug: {
      current: string
    }
    area: string
  }[]
}

const MapPage: NextPage<Props> = ({ data }: Props) => {
  const seoData = {
    slug: {
      current: "/kart",
    },
    intro: "Kos deg med det beste fra planteriket!",
    title: "Oversiktskart",
  }

  const accordionItems = data
    ?.filter((exhibitor) => exhibitor.type === "Serveringsbod")
    ?.map((exhibitor) => {
      return {
        title: exhibitor?.title,
        richTextObject: exhibitor?.menu,
        key: exhibitor?._id,
        link: exhibitor.slug.current,
      }
    })

  // Divide exhibitors into: sletta, hagen, skogsholtet
  const slettaItems = data?.filter((exhibitor) => exhibitor.area === "sletta")
  const hagenItems = data?.filter((exhibitor) => exhibitor.area === "hagen")
  const skogsholtetItems = data?.filter(
    (exhibitor) => exhibitor.area === "skogsholtet"
  )

  return (
    <>
      <Seo page={seoData} />

      <PageLayout>
        <Section noPadding="top">
          <Flow space="xsmall">
            <h1 className="page-title">Oversiktskart</h1>
            <p className="lead">Kos deg med det beste fra planteriket!</p>
          </Flow>
        </Section>

        <Section verticalPadding="large" noPadding="sides">
          <img
            src="/kart.png"
            alt="Kart over festivalområdet"
            width="2330"
            height="1653"
          />
        </Section>

        <Section width="small" noPadding="bottom">
          <Flex justify="spaceBetween" gap="medium">
            <div style={{ flex: "1 1 0px" }}>
              <Block bottom="2">
                <p className="font-strike">Hopp til: </p>
              </Block>

              <Flex align="center" gap="small" wrap>
                <Button size="small" isArrow={false} link="#hagen">
                  Hagen
                </Button>
                <Button size="small" isArrow={false} link="#sletta">
                  Sletta
                </Button>
                <Button size="small" isArrow={false} link="#skogsholtet">
                  Skogsholtet
                </Button>
                <Button size="small" isArrow={false} link="#serveringsboder">
                  Serveringsboder
                </Button>
              </Flex>
            </div>
          </Flex>
        </Section>

        <Section width="small" verticalPadding="large">
          <Flow space="xsmall">
            <h2 className="sticky-section-header" id="hagen">
              Utstillere i hagen
            </h2>

            {hagenItems?.map((item) => (
              <p key={item._id}>
                <Link href={item.slug.current}>{item.title}</Link>
              </p>
            ))}

            <h2 className="sticky-section-header" id="sletta">
              Utstillere på sletta
            </h2>

            {slettaItems?.map((item) => (
              <p key={item._id}>
                <Link href={item.slug.current}>{item.title}</Link>
              </p>
            ))}

            <h2 className="sticky-section-header" id="skogsholtet">
              Utstillere i skogsholtet
            </h2>

            {skogsholtetItems?.map((item) => (
              <p key={item._id}>
                <Link href={item.slug.current}>{item.title}</Link>
              </p>
            ))}

            <h2 className="sticky-section-header" id="serveringsboder">
              Serveringsboder
            </h2>
            <div>
              {/* @ts-expect-error */}
              <Accordion list={accordionItems} />
            </div>
          </Flow>
        </Section>
      </PageLayout>
    </>
  )
}

export default MapPage

// Get data for this particular page
const query =
  '*[_type == "exhibitor"] | order(title) {..., ...type->{"type": title}}'

export const getStaticProps = async () => {
  const data = await sanityClient.fetch(query)
  return {
    props: {
      data,
    },
  }
}
