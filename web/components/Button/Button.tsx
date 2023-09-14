import classNames from "classnames"
import Link from "next/link"

import styles from "./Button.module.scss"

type Props = {
  size?: "small" | "medium" | "large"
  color?: "orange" | "green" | "white"
  link?: string
  isArrow?: boolean
  type?: "button" | "submit"
  isOpenInNewWindow?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({
  size = "medium",
  color = "green",
  isArrow = true,
  link,
  type = "button",
  isOpenInNewWindow = false,
  children,
  onClick,
}: Props) => {
  const isInternalLink = link?.startsWith("/")

  const buttonClass = classNames(
    styles.button,
    size ? styles[`size--${size}`] : false,
    color ? styles[`color--${color}`] : false,
    isArrow ? styles[`button--arrow`] : false,
    !isInternalLink && isArrow ? styles[`button--arrow-external`] : false
  )

  // Link
  if (link) {
    if (isInternalLink) {
      // Internal link
      return (
        <Link href={link} onClick={onClick} className={buttonClass}>
          {children}
        </Link>
      )
    }

    // External link
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        onClick={onClick}
        href={link}
        className={buttonClass}
        target={isOpenInNewWindow ? "_blank" : "_self"}
        rel={isOpenInNewWindow ? "noreferrer" : ""}
      >
        {children}
      </a>
    )
  }

  // Button
  return (
    <button onClick={onClick} className={buttonClass} type={type}>
      {children}
    </button>
  )
}
