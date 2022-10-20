import React from "react"
import classNames from "classnames"

import styles from "./Grid.module.scss"

type Props = {
  reverse?: boolean
  verticalCenter?: boolean
  noGutter?: boolean
  noWrap?: boolean
  children: React.ReactNode
}

export const Grid = ({
  reverse = false,
  verticalCenter = false,
  noGutter = false,
  noWrap = false,
  children,
  ...props
}: Props) => {
  const gridClass = classNames({
    [styles.grid]: true,
    [styles[`grid-reverse`]]: reverse,
    [styles[`grid-noGutter`]]: noGutter,
    [styles[`grid-noWrap`]]: noWrap
  })

  const gridItemClass = classNames({
    [styles.gridItem]: true,
    [styles[`gridItem-verticalCenter`]]: verticalCenter,
    [styles[`gridItem-noGutter`]]: noGutter
  })

  return (
    <div className={gridClass} {...props}>
      {React.Children.map(children, (child) => (
        <div className={gridItemClass}>{child}</div>
      ))}
    </div>
  )
}
