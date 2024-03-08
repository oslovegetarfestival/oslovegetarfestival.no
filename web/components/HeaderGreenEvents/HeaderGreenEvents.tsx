import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import { Flex, Section } from "components/Layout"
import { Button } from "components/Button"

import styles from "./HeaderGreenEvents.module.scss"
import useBodyFreeze from "hooks/useBodyFreeze"

type Props = {
  isFrontpage?: boolean
}

export const HeaderGreenEvents = ({ isFrontpage }: Props) => {
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

  const logoClass = classNames(
    styles.logo,
    isMobileMenuOpen ? styles[`logo-mobile-menu-open`] : false
  )

  return (
    <header>
      <Section width="full" verticalPadding="small">
        {!isFrontpage && (
          <img
            src="/logo-candy.svg"
            alt=""
            className={styles.logoCandy}
            aria-hidden
            loading="eager"
          />
        )}

        <Flex
          justify={isFrontpage && !isMobileMenuOpen ? "end" : "spaceBetween"}
          align="start"
        >
          {(!isFrontpage || isMobileMenuOpen) && (
            <p className="h1">
              <Link
                href="/gront-arrangement"
                className={logoClass}
                title="Til forsiden"
              >
                <span>Oslo</span>
                <span>Vegetar</span>
                <span>festival</span>
              </Link>
            </p>
          )}

          <nav
            className={styles.menu}
            style={{ display: isMobileMenuOpen ? "block" : " " }}
          >
            <ul className={styles.menuList}>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="1"
              >
                <Link href="/gront-arrangement/hvordan-lykkes">
                  Hvordan lykkes
                </Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="2"
              >
                <Link href="/gront-arrangement/hvorfor-plantebasert">
                  Hvorfor plantebasert
                </Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="3"
              >
                <Link href="/gront-arrangement/mattilbydere">Mattilbydere</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="4"
              >
                <Link href="/gront-arrangement/inspirasjon">Inspirasjon</Link>
              </li>
            </ul>
          </nav>
          {/* Mobile menu */}
          <div className={styles.mobileToggle}>
            <Button
              size="medium"
              color="green"
              isArrow={false}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              {isMobileMenuOpen ? "Lukk ✕" : "Meny ☰"}
            </Button>
          </div>
        </Flex>
      </Section>
    </header>
  )
}
