import { Button } from "components/Button"
import { Block, Section } from "components/Layout"
import styles from "./FrontpageHero.module.scss"

export const FrontpageHero = () => {
  return (
    <div className={styles.wrap}>
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
          <Button size="large" color="red" link="/billett">
            Kjøp billett
          </Button>
        </Block>
      </Section>
    </div>
  )
}
