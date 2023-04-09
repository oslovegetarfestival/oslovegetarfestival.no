import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import styles from "./FrontpageHero.module.scss"

export const FrontpageHero = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img
        src="/frontpage-hero.svg"
        alt=""
        aria-hidden
        className={styles.heroImage}
      />

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
          <Button size="large" color="red" link="/billetter">
            Kjøp billetter
          </Button>
        </Block>
      </Section>
    </div>
  )
}
