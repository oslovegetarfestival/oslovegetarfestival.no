import { useRef, useState, useEffect } from "react"
import styles from "./Video.module.scss"

type Props = {
  id: string
  isAutoplay?: boolean
}

export const Video = ({ id, isAutoplay = false }: Props) => {
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (isInView || !isAutoplay) return

    const options = {
      rootMargin: "0px",
      threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [isInView, isAutoplay])

  return (
    <div className={styles.wrap}>
      {/* Note: Autoplay will only work if video is by default set to mute */}
      {/* Note: Loop only works if we've defined a playlist */}
      <iframe
        className={styles.video}
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${
          isInView
            ? `&autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1`
            : ""
        }`}
        title="YouTube video player"
        allow="encrypted-media"
        allowFullScreen
        ref={videoRef}
      ></iframe>
    </div>
  )
}
