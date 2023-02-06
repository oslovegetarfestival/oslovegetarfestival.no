import classNames from "classnames"

import styles from "./Flow.module.scss"

type Props = {
  children: React.ReactNode
  space?: "xsmall" | "small" | "normal" | "large"
}

export const Flow = ({ children, space = "normal", ...rest }: Props) => {
  const flowClass = classNames(styles.flow, styles[`-${space}`])

  return (
    <section className={flowClass} {...rest}>
      {children}
    </section>
  )
}
