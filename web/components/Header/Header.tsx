import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import { Flex, Section } from "components/Layout"
import { Button } from "components/Button"

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

  const logoClass = classNames(
    styles.logo,
    isMobileMenuOpen ? styles[`logo-mobile-menu-open`] : false
  )

  return (
    <header className={styles.header}>
      <Section width="full">
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
              <Link href="/" className={logoClass} title="Til forsiden">
                <span>Oslo</span>
                <span>Vegetar</span>
                <span>festival</span>
                <span className={styles.date}>24.-25. mai 2025</span>
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
                <Link href="/program">Program</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="2"
              >
                <Link href="/utstillere">Utstillere</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="3"
              >
                <Link href="/praktisk-info">Praktisk info</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="4"
              >
                <Link href="/bli-frivillig">Bli frivillig</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="5"
              >
                <Link href="/om-oss">Om oss</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="6"
              >
                <Link href="/english">English</Link>
              </li>
              <li
                className={styles.menuItem}
                data-animate-in
                data-animation-order="7"
              >
                <Button
                  color="orange"
                  size="small"
                  link="https://tikkio.com/tickets/48169-oslo-vegetarfestival-2025#:~:text=Opplev%20det%20beste%20fra%20planteriket,som%20brenner%20for%20plantebasert%20mat"
                  isOpenInNewWindow
                >
                  Kjøp billett
                </Button>
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
