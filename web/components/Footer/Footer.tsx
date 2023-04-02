import Link from "next/link"

import { Grid, Flex, Section, Flow } from "components/Layout"

import styles from "./Footer.module.scss"
import { Button } from "components/Button"
import { Newsletter } from "components/Newsletter"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section width="full" verticalPadding="large">
        <Flow>
          <Grid>
            <Flow space="small">
              <h2 className="font-strike">Om Oslo Vegetarfestival</h2>
              <p>
                Vi er Norges (og Skandinavias!) største plantebaserte festival.{" "}
                <Link href="/om-oss">
                  <a className="link">Les mer</a>
                </Link>
              </p>
            </Flow>

            <Flow space="small">
              <h2 className="font-strike">Kontakt</h2>
              <p>
                <strong>E-post</strong>
                <br />
                <a href="mailto:kontakt@oslovegetarfestival.no">
                  kontakt@oslovegetarfestival.no
                </a>
              </p>
              <p>
                <strong>Facebook</strong> <br />
                <a href="https://www.facebook.com/OsloVegetarfestival">
                  @oslovegetarfestival
                </a>
              </p>
              <p>
                <strong>Instagram</strong> <br />
                <a href="https://www.instagram.com/oslovegetarfestival/">
                  @oslovegetarfestival
                </a>
              </p>
            </Flow>

            <Flow space="small">
              <h2 className="font-strike">Nyhetsbrev</h2>
              <p>
                Få siste nytt om plantebasert mat, konkurranser, utlodninger og
                mye mer!
              </p>
              <Newsletter />
            </Flow>
          </Grid>

          <Flex justify="spaceBetween" align="end" wrap>
            <p className="h1">
              <Link href="/">
                <a className={styles.logo}>
                  <span>Oslo</span> <span>vegetar</span>
                  <span>festival</span>
                </a>
              </Link>
            </p>
            <nav>
              <ul>
                <Flex justify="spaceBetween" wrap>
                  <li className={styles.menuItem}>
                    <Link href="/program">Program</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/utstillere">Utstillere</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/praktisk-info">Praktisk info</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/bli-frivillig">Bli frivillig</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/english">English</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Button
                      isArrow={false}
                      color="red"
                      size="small"
                      link="/billetter"
                    >
                      Kjøp billetter
                    </Button>
                  </li>
                </Flex>
              </ul>
            </nav>
          </Flex>
        </Flow>
      </Section>
    </footer>
  )
}
