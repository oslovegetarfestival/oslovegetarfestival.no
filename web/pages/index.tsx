import type { NextPage } from 'next'
import { getClient } from 'lib/sanity.server'

import { Seo } from 'components/Seo'
import { Flow, Block, Section, Flex, Grid } from 'components/Layout'
import { SectionBox } from 'components/SectionBox'

type Props = {
  data: Record<string, unknown>
}

const Home: NextPage<Props> = ({ data = {} }) => {
  console.log('data', data)

  return (
    <>
      <Seo isFrontPage />

      <SectionBox
        data={{
          image: '',
          content: {},
          backgroundColor: 'aubergine',
        }}
      />

      <Section verticalPadding="xlarge">
        <Flow>
          <h1>Oslo vegetarfestival</h1>
          <p>Velkommen skal dere være.</p>
          <h2>Heading 2</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <h2>Heading 2</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
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
