import type { NextPage } from "next"
import { getClient } from "lib/sanity.server"

import { Seo } from "components/Seo"
import { Flow, Block, Section, Flex, Grid } from "components/Layout"
import { SectionBox } from "components/SectionBox"

type Props = {
  data: Record<string, unknown>
}

const Home: NextPage<Props> = ({ data = {} }) => {
  console.log("data", data)

  return (
    <>
      <Seo isFrontPage />

      <SectionBox
        data={{
          image: "",
          content: {},
          backgroundColor: "aubergine",
        }}
      />

      <Section verticalPadding="xlarge">
        <Flow>
          <h1>Oslo Vegetarfestival</h1>
          <p>
            Tusen takk for nå! Og hold av datoen for julemarked og Oslo
            Vegetarfestival 2023!
          </p>
          <h2>Heading 2</h2>
          <p>
            Tusen takk til alle frivillige, ansatte, foredragsholdere,
            sponsorer, utstillere og besøkende, som har sørget for at Oslo
            Vegetarfestival 2022 ble en helt fantastisk helg!
          </p>
          <h2>Heading 2</h2>
          <p>
            Vi synes det er alt for lenge å vente til mai 2023 for å feire alt
            det fantastiske vegetarverden har å by på, og utvider!
          </p>
          <h3>Heading 3</h3>

          <p>
            Innhold <strong>kommer</strong> i <em>kursiv</em>...
          </p>
          <Grid verticalCenter>
            <p>Child</p>
            <p>Child</p>
            <p>Child</p>
            <p>Child</p>
          </Grid>

          <Block top="8">
            <a href="#">Tekst her med gjennomganq</a>
          </Block>

          <ul className="list">
            <li>Hei</li>
          </ul>

          <Flex justify="spaceBetween">
            <a>Navn</a>
            <a>Navn</a>
            <a>Navn</a>
            <a>Navn</a>
            <a>Navn</a>
          </Flex>

          <ol className="list">
            <li>Hei</li>
          </ol>
        </Flow>
      </Section>
    </>
  )
}

export default Home

export async function getStaticProps({ preview = false }) {
  const query = `*[_type == "post"]`
  const post = (await getClient(preview).fetch(query)) || []

  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  }
}
