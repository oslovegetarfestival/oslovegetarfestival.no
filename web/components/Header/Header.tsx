import Link from "next/link"

import { Flex, Section } from "components/Layout"

import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Section width="full" verticalPadding="small">
        <Flex justify="spaceBetween" align="start">
          <p className="h1">
            <Link href="/">
              <a className={styles.logo}>
                <span>Oslo</span> <span>vegetar</span>
                <span>festival</span>
              </a>
            </Link>
          </p>
          <nav>
            <ul>
              <Flex justify="spaceBetween">
                <li className={styles.menuItem}>
                  <Link href="/program">Program</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/praktisk-info">Praktisk info</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/utstillere">Utstillere</Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/bli-frivillig">Bli frivillig</Link>
                </li>
                <li className={`${styles.menuItem} ${styles.tickets}`}>
                  <Link href="/billetter">Kjøp billetter</Link>
                </li>
              </Flex>
            </ul>
          </nav>
        </Flex>
      </Section>
    </header>
  )
}
