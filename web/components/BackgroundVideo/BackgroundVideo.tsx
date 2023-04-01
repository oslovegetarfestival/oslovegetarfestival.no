import { Section } from "components/Layout"
import { Video } from "components/Video"
import styles from "./BackgroundVideo.module.scss"

export const BackgroundVideo = () => {
  return (
    <Section centerContent width="full" verticalPadding="large">
      <Video id="AeV9j9EJzMA" />
      {/* <video className={styles.wrap} autoPlay muted loop>
        <source src="/vegetarfestival-promo.mp4" type="video/mp4" />
      </video> */}
    </Section>
  )
}
