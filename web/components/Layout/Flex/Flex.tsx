import { ReactNode } from "react"
import classNames from "classnames"

import styles from "./Flex.module.scss"

type Props = {
  align?: "center" | "start" | "end"
  justify?: "center" | "spaceBetween" | "spaceAround" | "start" | "end"
  wrap?: boolean
  children: ReactNode
}

export const Flex = ({
  align = "start",
  justify = "start",
  wrap = false,
  children
}: Props) => {
  const flexClass = classNames({
    [styles.flex]: true,
    [styles[`-align-${align}`]]: align,
    [styles[`-justify-${justify}`]]: justify,
    [styles["-wrap"]]: wrap
  })

  return <div className={flexClass}>{children}</div>
}