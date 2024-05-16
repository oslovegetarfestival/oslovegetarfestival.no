import React from "react"

import styles from "./BoxWithColor.module.scss"

type Props = {
  children: React.ReactNode | JSX.Element[] | JSX.Element
}

export const BoxWithColor: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>
}
