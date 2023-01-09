import Link from "next/link"

import { Flex, Section } from "components/Layout"

import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Section width="large" verticalPadding="small">
        <Flex justify="spaceBetween" align="start">
          <p className="h1">
            <Link href="/"><a className={styles.logo}><span>Oslo</span> <span>vegetar</span><span>festival</span></a></Link>
          </p>
          <nav>
            <ul>
              <Flex justify="spaceBetween">
                <li className={styles.menuItem}>Billetter</li>
                <li className={styles.menuItem}>Program</li>
                <li className={styles.menuItem}>Praktisk info</li>
                <li className={styles.menuItem}>
                  <Link href="/foredragsholdere">Utstillere</Link>
                </li>
                <li className={styles.menuItem}>Bli frivillig</li>
              </Flex>
            </ul>
          </nav>
        </Flex>
      </Section>
    </header>
  )
}
