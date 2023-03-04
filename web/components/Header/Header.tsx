import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Flex, Section } from "components/Layout"
import { Button } from "components/Button"

import logoCandy from "./logo-candy.png"

import styles from "./Header.module.scss"
import useBodyFreeze from "hooks/useBodyFreeze"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useBodyFreeze(isMobileMenuOpen)

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

          {/* Mobile menu */}
          <div className={styles.mobileToggle}>
            <Button
              size="small"
              color="red"
              isArrow={false}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              {isMobileMenuOpen ? "Lukk ✕" : "Meny ☰"}
            </Button>
          </div>

          <nav
            className={styles.menu}
            style={{ display: isMobileMenuOpen ? "block" : "" }}
          >
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/program">
                  <a
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Program
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/utstillere">
                  <a
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Utstillere
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/praktisk-info">
                  <a
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Praktisk info
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/bli-frivillig">
                  <a
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Bli frivillig
                  </a>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Button
                  isArrow={false}
                  color="red"
                  size="small"
                  link="/billetter"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Kjøp billetter
                </Button>
              </li>
            </ul>
          </nav>
        </Flex>
      </Section>
    </header>
  )
}
