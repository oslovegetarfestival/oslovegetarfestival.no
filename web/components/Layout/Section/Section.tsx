import classNames from "classnames"
import { HTMLProps } from "react"

import styles from "./Section.module.scss"

type Props = {
  width?: "full" | "xlarge" | "large" | "medium" | "small"
  verticalPadding?: "xlarge" | "large" | "medium" | "small" | "tiny"
  noPadding?: "top" | "bottom" | "sides"
  children: React.ReactNode
  centerContent?: boolean
  background?: "lychee" | "banana" | "kale"
  noGutter?: boolean
  isResponsive?: boolean
} & HTMLProps<HTMLDivElement>

export const Section = ({
  width = "medium",
  verticalPadding,
  centerContent,
  background,
  noGutter,
  noPadding,
  children,
  isResponsive,
  className,
  ...rest
}: Props) => {
  const sectionClass = classNames(
    className,
    styles.section,
    styles[`-${width}`],
    verticalPadding && styles[`-vertical-padding-${verticalPadding}`],
    centerContent && styles["-center-content"],
    background && styles[`-background-${background}`],
    noPadding && styles[`-no-padding-${noPadding}`],
    noGutter && styles["-no-gutter"],
    isResponsive && styles["-responsive"]
  )

  return (
    <section className={sectionClass} {...rest}>
      {children}
    </section>
  )
}
