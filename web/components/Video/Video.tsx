import styles from "./Video.module.scss"

type Props = {
  id: string
  isAutoplay?: boolean
}

export const Video = ({ id, isAutoplay = false }: Props) => {
  return (
    <div className={styles.wrap}>
      {/* Note: Autoplay will only work if video is by default set to mute */}
      {/* Note: Loop only works if we've defined a playlist */}
      <iframe
        className={styles.video}
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${
          isAutoplay
            ? `&autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1`
            : ""
        }`}
        title="YouTube video player"
        allow="encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  )
}
