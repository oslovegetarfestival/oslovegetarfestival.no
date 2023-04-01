import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { Flex, Section } from "components/Layout"
import { Button } from "components/Button"

import logoCandy from "./logo-candy.png"

import styles from "./Header.module.scss"
import useBodyFreeze from "hooks/useBodyFreeze"

type Props = {
  isFrontpage?: boolean
}

export const Header = ({ isFrontpage }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Logic to close mobile menu on when a link is clicked (= route change)
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    // Clean up on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  // Prevent page scroll when menu is open
  useBodyFreeze(isMobileMenuOpen)

  return (
    <header>
      <Section width="full" verticalPadding="small">
        {!isFrontpage && (
          <div className={styles.logoCandy}>
            <Image
              src={logoCandy}
              alt=""
              width="308"
              height="148px"
              className={styles.logoCandy}
            />
          </div>
        )}

        <Flex justify={isFrontpage ? "end" : "spaceBetween"} align="start">
          {!isFrontpage && (
            <p className="h1">
              <Link href="/">
                <a className={styles.logo} title="Til forsiden">
                  <span>Oslo</span>
                  <span>Vegetar</span>
                  <span>festival</span>
                  <span className={styles.date}>27.-28. mai 2023</span>
                </a>
              </Link>
            </p>
          )}

          <nav
            className={styles.menu}
            style={{ display: isMobileMenuOpen ? "block" : "" }}
          >
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/program">Program</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/utstillere">Utstillere</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/praktisk-info">Praktisk info</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/bli-frivillig">Bli frivillig</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/english">English</Link>
              </li>
              <li className={styles.menuItem}>
                <Button
                  isArrow={false}
                  color="red"
                  size="small"
                  link="/billetter"
                >
                  Kjøp billetter
                </Button>
              </li>
            </ul>
          </nav>
        </Flex>

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
      </Section>
    </header>
  )
}
