import classNames from "classnames"

import styles from "./Block.module.scss"

type AllowedValues =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | undefined

type Props = {
  top?: AllowedValues
  right?: AllowedValues
  bottom?: AllowedValues
  left?: AllowedValues
  children: React.ReactNode
}

export const Block = ({
  top,
  bottom,
  left,
  right,
  children,
  ...rest
}: Props) => {
  const blockClass = classNames(
    styles.block,
    top ? styles[`-top-${top}`] : false,
    right ? styles[`-right-${right}`] : false,
    bottom ? styles[`-bottom-${bottom}`] : false,
    left ? styles[`-left-${left}`] : false
  )

  return (
    <div className={blockClass} {...rest}>
      {children}
    </div>
  )
}
