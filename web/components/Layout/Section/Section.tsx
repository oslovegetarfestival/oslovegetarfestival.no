import classNames from "classnames"
import { HTMLProps } from "react"

import styles from "./Section.module.scss"

type Props = {
  width?: "full" | "large" | "medium" | "small"
  verticalPadding?: "xlarge" | "large" | "medium" | "small" | "tiny"
  noPadding?: "top" | "bottom" | "sides"
  children: React.ReactNode
  centerContent?: boolean
  background?: "lychee" | "banana" | "kale"
  noGutter?: boolean
} & HTMLProps<HTMLDivElement>

export const Section = ({
  width = "medium",
  verticalPadding,
  centerContent,
  background,
  noGutter,
  noPadding,
  children,
  className,
  ...rest
}: Props) => {
  const sectionClass = classNames(
    className,
    styles.section,
    styles[`-${width}`],
    verticalPadding ? styles[`-vertical-padding-${verticalPadding}`] : false,
    centerContent ? styles["-center-content"] : false,
    background ? styles[`-background-${background}`] : false,
    noPadding ? styles[`-no-padding-${noPadding}`] : false,
    noGutter ? styles["-no-gutter"] : false
  )

  return (
    <section className={sectionClass} {...rest}>
      {children}
    </section>
  )
}
