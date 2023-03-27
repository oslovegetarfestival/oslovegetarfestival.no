import styles from "./Quote.module.scss"

type Props = {
  quote: string
  author?: string
}

export const Quote = ({ quote, author }: Props) => {
  return (
    <div className={styles.wrap}>
      <q className="h1">{quote}</q>
      {author && (
        <p className={styles.author}>
          <em>{author}</em>
        </p>
      )}
    </div>
  )
}
