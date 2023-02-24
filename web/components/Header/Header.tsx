import Link from "next/link"
import Image from "next/image"

import { Flex, Section } from "components/Layout"

import logoCandy from "./logo-candy.png"

import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header>
      <Section width="full" verticalPadding="small">
        <div className={styles.logoCandy}>
          <Image
            src={logoCandy}
            alt=""
            width="308"
            height="148px"
            className={styles.logoCandy}
          />
        </div>

        <Flex justify="spaceBetween" align="start">
          <p className="h1">
            <Link href="/">
              <a className={styles.logo}>
                <span>Oslo</span>
                <span>Vegetar</span>
                <span>festival</span>
                <span className={styles.date}>27.-28. mai 2023</span>
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
