import React from "react"

import styles from "./Warning.module.scss"

type Props = {
  children: React.ReactNode
}

export const Warning: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>
}
