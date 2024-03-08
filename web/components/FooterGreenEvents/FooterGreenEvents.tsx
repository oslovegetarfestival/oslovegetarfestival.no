import Link from "next/link"

import { Grid, Flex, Section, Flow } from "components/Layout"

import styles from "./FooterGreenEvents.module.scss"
import { AnimationFooter } from "components/AnimationFooter"

export const FooterGreenEvents = () => {
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
        <Section width="xlarge" verticalPadding="large">
          <Flow>
            <Grid>
              <Flow space="small">
                <h2 className="font-strike">Om oss</h2>
                <p>
                  Grønnere mat på arrangementer er et prosjekt i regi av Oslo
                  Vegetarfestival.{" "}
                  <Link href="/om-oss" className="link link--white">
                    Les mer om Oslo Vegetarfestival her
                  </Link>
                  .
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
              </Flow>

              <Flow space="small">
                <h2 className="font-strike">Partnere</h2>
                <p>Grønnere mat på arrangementer" er støttet av Oslo kommune</p>
              </Flow>
            </Grid>

            <Flex justify="spaceBetween" align="end" wrap>
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
