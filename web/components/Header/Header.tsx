import Link from 'next/link'

import { Flex, Section } from 'components/Layout'

export const Header = () => {
  return (
    <header>
      <Section width="large" verticalPadding="small">
        <Flex justify="spaceBetween" align="center">
          <p className="h1">
            <Link href="/">Oslo vegetarfestival</Link>
          </p>
          <nav>
            <ul>
              <Flex justify="spaceBetween">
                <li>Program &nbsp;</li>
                <li>
                  <Link href="/foredragsholdere">Foredragsholdere</Link> &nbsp;
                </li>
                <li>Om konferansen &nbsp;</li>
                <li>Kontakt &nbsp;</li>
              </Flex>
            </ul>
          </nav>
        </Flex>
      </Section>
    </header>
  )
}
