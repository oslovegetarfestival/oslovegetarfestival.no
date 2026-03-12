import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import styles from "./FrontpageHero.module.scss"

export const FrontpageHero = () => {
  return (
    <div className={styles.wrap}>
      <Section
        width="large"
        verticalPadding="large"
        noPadding="top"
        className={styles.heroContent}
      >
        <div className={styles.logo}>
          <span>Oslo</span>
          <span>Vegetar</span>
          <span>festival</span>
          <Block top="5">
            <span className={styles.date}>Kubaparken</span>
            <span className={styles.date}>30.-31. mai 2026</span>
          </Block>
        </div>

        <Block top="7">
          <Button size="large" color="celery" link="/billett">
            Kjøp billett
          </Button>
        </Block>

        <div className={styles.heroTagline}>
          <div>Pure food.</div>
          <div>Pure energy.</div>
        </div>
      </Section>

      <div className={styles.heroImage}>
        <img src="/frontpage-hero-2026.png" alt="Pure food. Pure energy." />
      </div>

      <div className={styles.heroImageMobile}>
        <img
          src="/frontpage-hero-mobile-2026.png"
          alt="Pure food. Pure energy."
        />
      </div>
    </div>
  )
}
