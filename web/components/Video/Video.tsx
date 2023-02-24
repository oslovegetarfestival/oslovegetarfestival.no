import styles from "./Video.module.scss"

type Props = {
  id: string
}

export const Video = ({ id }: Props) => {
  return (
    <div className={styles.wrap}>
      <iframe
        className={styles.video}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video player"
        allow="encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  )
}
