import styles from './Card.module.scss'

type Props = {
  children: React.ReactNode
}

export const CardGrid = ({ children }: Props) => {
  return <div className={styles.cardGrid}>{children}</div>
}
