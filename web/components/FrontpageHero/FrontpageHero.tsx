import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import { Animation } from "components/Animation"
import styles from "./FrontpageHero.module.scss"

export const FrontpageHero = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.heroImage}>
        <Animation />
      </div>

      <Section width="large" verticalPadding="large" noPadding="top">
        <div className={styles.logo}>
          <span>Oslo</span>
          <span>Vegetar</span>
          <span>festival</span>
          <Block top="5">
            <span className={styles.date}>Kubaparken</span>
            <span className={styles.date}>27.-28. mai 2023</span>
          </Block>
        </div>

        <Block top="7">
          <Button
            size="large"
            color="orange"
            link="https://tikkio.com/tickets/30345-oslo-vegetarfestival-2023"
            isOpenInNewWindow
          >
            Kjøp billett
          </Button>
        </Block>
      </Section>
    </div>
  )
}
