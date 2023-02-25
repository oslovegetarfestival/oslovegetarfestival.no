import classNames from "classnames"
import Link from "next/link"

import styles from "./Button.module.scss"

type Props = {
  size?: "medium" | "large"
  color?: "red" | "green"
  link?: string
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({
  size = "medium",
  color = "green",
  link,
  children,
  onClick,
}: Props) => {
  const buttonClass = classNames(
    styles.button,
    size ? styles[`size--${size}`] : false,
    color ? styles[`color--${color}`] : false
  )

  const isExternalLink = link?.startsWith("http")

  // Link
  if (link) {
    // External link
    if (isExternalLink) {
      return (
        <a href={link} className={buttonClass}>
          {children}
        </a>
      )
    }

    // Internal link
    return (
      <Link href={link}>
        <a className={buttonClass}>{children}</a>
      </Link>
    )
  }

  // Button
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  )
}
