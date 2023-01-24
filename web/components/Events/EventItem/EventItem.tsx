import Link from "next/link"
import { urlForImage } from "lib/sanity"
import Image from "next/future/image"

import styles from "./EventItem.module.scss"

export const EventItem = () => {
  return (
    <div className={styles.eventItem}>
      <div className={styles.image}>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Tittel på arrangement</h2>
        <p>En kort tekst om arrangementet som inviterer til videre lesning for alle besøkende</p>
      </div>
      <Link href="/">
        Mer om arrangementet
      </Link>
    </div>
  )
}