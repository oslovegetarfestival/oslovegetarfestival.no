import Link from "next/link"

import { Grid, Flex, Section, Flow } from "components/Layout"

import styles from "./Footer.module.scss"
import { Button } from "components/Button"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section width="full" verticalPadding="large">
        <Flow>
          <Grid>
            <div>
              <h2>Om oss</h2>
              <p>
                Oslo Vegetarfestival er Norges (og Skandinavias!) største
                plantebaserte festival.{" "}
                <Link href="/om-oss">
                  <a className="link">Les mer</a>
                </Link>
              </p>
            </div>

            <div>
              <h2>Kontakt</h2>
              <p>
                <a href="mailto:kontakt@oslovegetarfestival.no">
                  kontakt@oslovegetarfestival.no
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/OsloVegetarfestival">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/oslovegetarfestival/">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/@oslovegetarfestival">
                  YouTube
                </a>
              </p>
            </div>

            <div>
              <h2>Nyhetsbrev</h2>
              <p>
                Få siste nytt om plantebasert mat, konkurranser, utlodninger og
                mye mer!
              </p>
              <label>
                E-post
                <input type="email" />
              </label>
            </div>
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
                    <Link href="/aktuelt">Aktuelt</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/bli-frivillig">Bli frivillig</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/for-utstillere">For utstillere</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/om-oss">Om oss</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/praktisk-info">Praktisk info</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/program">Program</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="/utstillere">Utstillere</Link>
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
