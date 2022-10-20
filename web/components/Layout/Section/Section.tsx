import classNames from 'classnames'
import { HTMLProps } from 'react'

import styles from './Section.module.scss'

type Props = {
  width?: 'full' | 'large' | 'medium' | 'small'
  verticalPadding?: 'xlarge' | 'large' | 'medium' | 'small' | 'tiny'
  children: React.ReactNode
  centerContent?: boolean
  background?: 'light' | 'white'
  noGutter?: boolean
} & HTMLProps<HTMLDivElement>

export const Section = ({
  width = 'medium',
  verticalPadding,
  centerContent,
  background,
  noGutter,
  children,
  className,
  ...rest
}: Props) => {
  const sectionClass = classNames(
    className,
    styles.section,
    styles[`-${width}`],
    verticalPadding ? styles[`-vertical-padding-${verticalPadding}`] : false,
    centerContent ? styles['-center-content'] : false,
    background ? styles[`-background-${background}`] : false,
    noGutter ? styles['-no-gutter'] : false
  )

  return (
    <section className={sectionClass} {...rest}>
      {children}
    </section>
  )
}
