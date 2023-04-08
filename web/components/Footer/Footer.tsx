import Link from "next/link"

import { Grid, Flex, Section, Flow } from "components/Layout"

import styles from "./Footer.module.scss"
import { Newsletter } from "components/Newsletter"

export const Footer = () => {
  return (
    <>
      <img src="/footer.svg" alt="" />

      <footer className={styles.footer}>
        <Section centerContent verticalPadding="tiny">
          <a href="#">Til toppen ↑</a>
        </Section>
        <Section width="full" verticalPadding="large">
          <Flow>
            <Grid>
              <Flow space="small">
                <h2 className="font-strike">Om Oslo Vegetarfestival</h2>
                <p>
                  Vi er Norges (og Skandinavias!) største plantebaserte
                  festival.{" "}
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
                  Få siste nytt om plantebasert mat, konkurranser, utlodninger
                  og mye mer!
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
              <Link href="/personvern-og-cookies">
                <a className="link">Personvern og cookies</a>
              </Link>
            </Flex>
          </Flow>
        </Section>
      </footer>
    </>
  )
}


