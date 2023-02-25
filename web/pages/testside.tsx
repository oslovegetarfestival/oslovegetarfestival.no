import type { NextPage } from "next"

import { Seo } from "components/Seo"
import { Flow, Block, Section, Flex, Grid } from "components/Layout"
import { SectionWithColor } from "components/SectionWithColor"

import { PageLayout } from "components/PageLayout"
import { Button } from "components/Button"

type Props = {
  data: Record<string, unknown>
}

const Home: NextPage<Props> = () => {
  return (
    <PageLayout>
      <Seo isFrontPage />

      <Section verticalPadding="xlarge">
        <Flow>
          <h1>Oslo Vegetarfestival</h1>
          <p className="lead">
            Dette er en ingress. Tusen takk for nå! Og hold av datoen for
            julemarked og Oslo Vegetarfestival 2023, det blir bra. Ingressen bør
            ikke være lenger.
          </p>
          <Button size="large" color="red">
            Kjøp billetter
          </Button>
          <Button>Se hele programmet</Button>
          <h2>Heading 2</h2>
          <p>
            Tusen takk til alle frivillige, ansatte, foredragsholdere,
            sponsorer, utstillere og besøkende, som har sørget for at Oslo
            Vegetarfestival 2022 ble en helt fantastisk helg! Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed in varius metus. Donec at
            libero a lacus luctus semper. Aliquam commodo scelerisque augue,
            quis mollis mauris tempor ut. Nulla quis ex hendrerit, porta tellus
            in, imperdiet nibh. Mauris egestas congue nisl, sed venenatis ante
            pretium id.
          </p>
          <p>
            Aenean finibus lacus eget lacus posuere, at sagittis sapien
            venenatis. Duis condimentum ultrices magna, nec volutpat leo.
            Integer lobortis nunc ut est eleifend ullamcorper. Cras tellus
            risus, scelerisque ac dolor efficitur, imperdiet molestie massa.
            Aenean eget arcu eu diam porttitor efficitur at id velit.
            Pellentesque ac ante eget eros dapibus porttitor. Quisque eu erat
            pellentesque, mattis ligula sit amet, gravida eros.
          </p>
        </Flow>
      </Section>

      <Section verticalPadding="xlarge">
        <Flow>
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
            <a href="#">Tekst her med gjennomgang</a>
          </Block>

          <ul className="list">
            <li>Hei</li>
            <li>Hei</li>
            <li>Hei</li>
          </ul>

          <h3>En liste med lengre punkter</h3>

          <ul className="list">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              varius metus. Donec at libero a lacus luctus semper. Aliquam
              commodo scelerisque augue, quis mollis mauris tempor ut.
            </li>
            <li>
              Integer lobortis nunc ut est eleifend ullamcorper. Cras tellus
              risus, scelerisque ac dolor efficitur, imperdiet molestie massa.
            </li>
            <li>
              Aenean eget arcu eu diam porttitor efficitur at id velit.
              Pellentesque ac ante eget eros dapibus porttitor. Quisque eu erat
              pellentesque, mattis ligula sit amet, gravida eros.
            </li>
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
            <li>Hei</li>
            <li>Hei</li>
          </ol>
        </Flow>
      </Section>
    </PageLayout>
  )
}

export default Home
