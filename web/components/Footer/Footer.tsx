import { Flex, Section } from 'components/Layout'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section width="large" verticalPadding="large" noGutter>
        <Flex justify="spaceBetween">
          <div>
            <p className="h3">Oslo vegetarfestival</p>
          </div>

          <div>
            <p>kontakt@oslovegetarfestival.no</p>
            <p>Telefon xxxx</p>
            <p>Facebook, Insta etc</p>
          </div>

          <div>
            <p>Nyhetsbrev</p>
          </div>
        </Flex>
      </Section>
    </footer>
  )
}
