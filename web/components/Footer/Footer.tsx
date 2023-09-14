import Link from "next/link"

import { Grid, Flex, Section, Flow } from "components/Layout"

import styles from "./Footer.module.scss"
import { Newsletter } from "components/Newsletter"
import { AnimationFooter } from "components/AnimationFooter"
import { Button } from "components/Button"

export const Footer = () => {
  return (
    <>
      {/* Note: -1px is needed to avoid subpixel white line below */}
      <div style={{ overflow: "hidden", marginBottom: "-1px" }}>
        <AnimationFooter />
      </div>
      <footer className={styles.footer}>
        <Section centerContent>
          <a href="#">Til toppen ↑</a>
        </Section>
        <Section width="full" verticalPadding="large">
          <Flow>
            <Grid>
              <Flow space="small">
                <h2 className="font-strike">Om Oslo Vegetarfestival</h2>
                <p>
                  Opplev det beste fra planteriket! Vi er en inspirerende og
                  idyllisk matfestival som brenner for plantebasert mat.{" "}
                  <Link href="/om-oss" className="link link--white">
                    Mer om festivalen
                  </Link>
                </p>
                <Button
                  color="orange"
                  link="https://tikkio.com/tickets/30345-oslo-vegetarfestival-2023"
                  isOpenInNewWindow
                >
                  Kjøp billett
                </Button>
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
                <Link href="/" className={styles.logo}>
                  <span>Oslo</span> <span>Vegetar</span>
                  <span>festival</span>
                </Link>
              </p>
              <Link href="/personvern" className="link link--white">
                Personvern og cookies
              </Link>
            </Flex>
          </Flow>
        </Section>
      </footer>
    </>
  )
}
