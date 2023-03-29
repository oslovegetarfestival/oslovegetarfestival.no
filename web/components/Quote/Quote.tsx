import styles from "./Quote.module.scss"

type Props = {
  data: {
    text: string
    author?: string
    isQuote?: boolean
  }
}

export const Quote = ({ data }: Props) => {
  const { text, isQuote, author } = data

  return (
    <section className={styles.wrap}>
      {isQuote ? <q className="h1">{text}</q> : <p className="h1">{text}</p>}
      {author && (
        <p className={styles.author}>
          <em>{author}</em>
        </p>
      )}
    </section>
  )
}
