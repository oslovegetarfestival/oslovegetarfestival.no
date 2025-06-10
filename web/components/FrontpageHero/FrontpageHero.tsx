import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import { AnimationHeader } from "components/AnimationHeader"
import styles from "./FrontpageHero.module.scss"
import { AnimationHeaderMobile } from "components/AnimationHeaderMobile"

export const FrontpageHero = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.heroImage}>
        <AnimationHeader />
      </div>
      <div className={styles.heroImageMobile}>
        <AnimationHeaderMobile />
      </div>

      <Section width="large" verticalPadding="large" noPadding="top">
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
      </Section>
    </div>
  )
}
