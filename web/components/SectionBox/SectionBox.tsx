import classNames from "classnames"
import { Flow, Grid, Section } from "components/Layout";

import styles from "./SectionBox.module.scss"

type Props = {
  data: {
    image: string
    content: Record<string, unknown>
    backgroundColor?: 'aubergine' | 'banana' | 'pumpkin'
    isReverse?: boolean
  }
}

export const SectionBox = ({ data }: Props) => {
  const { backgroundColor = "aubergine", isReverse } = data || {}

  const textWrapClass = classNames(
    styles.textWrap,
    backgroundColor ? styles[`-background-${backgroundColor}`] : "false"
  )

  return (
    <Section width="large" noGutter>
      <Grid verticalCenter noGutter reverse={isReverse}>
        <picture className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1560698862-c340d3c8bf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Oslo by"
            className={styles.image}
          />
        </picture>

        <div className={textWrapClass}>
          <Flow space="small">
            <p className="uppercase">Planteprisen</p>
            <p className="h2">
              Kan kantinen bli en akselerator for utvikling av bærekraftige
              produkter og endrede matvaner?
            </p>
          </Flow>
        </div>
      </Grid>
    </Section>
  )
}
