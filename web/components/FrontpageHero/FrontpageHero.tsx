import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import { AnimationHeader } from "components/AnimationHeader"
import styles from "./FrontpageHero.module.scss"
import { AnimationHeaderMobile } from "components/AnimationHeaderMobile"

export const FrontpageHero = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
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
            <span className={styles.date}>24.-25. mai 2025</span>
          </Block>
        </div>

        <Block top="7">
          <Button
            size="large"
            color="orange"
            link="https://tikkio.com/tickets/48169-oslo-vegetarfestival-2025#:~:text=Opplev%20det%20beste%20fra%20planteriket,som%20brenner%20for%20plantebasert%20mat"
            isOpenInNewWindow
          >
            Kjøp billett
          </Button>
        </Block>
      </Section>
    </div>
  )
}
