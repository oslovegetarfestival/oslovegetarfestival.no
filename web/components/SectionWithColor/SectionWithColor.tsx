import classNames from "classnames"
import Image from "next/future/image"
import { urlForImage } from "lib/sanity"

import { Flow, Grid, Section } from "components/Layout"

import styles from "./SectionWithColor.module.scss"
import { Button } from "components/Button"

type Props = {
  data: {
    title: string
    intro: string
    image: {
      altText?: string
    }
    bgColor: "banana" | "lychee"
    isReverse?: boolean
    link: {
      text: string
      url: string
    }
  }
}

export const SectionWithColor = ({ data }: Props) => {
  const { bgColor, isReverse, title, intro, image, link } = data || {}

  const textWrapClass = classNames(
    styles.textWrap,
    bgColor ? styles[`-background-${bgColor}`] : "false"
  )

  return (
    <Section width="large" noGutter>
      <Grid verticalCenter noGutter reverse={isReverse}>
        <picture className={styles.imageWrap}>
          <Image
            src={urlForImage(image)
              .width(800)
              .height(800)
              .fit("max")
              .auto("format")
              .url()}
            alt={image?.altText ?? ""}
            className={styles.image}
            fill
          />
        </picture>

        <div className={textWrapClass}>
          <Flow>
            <p className="h2">{title}</p>
            <p>{intro}</p>

            {link?.text && (
              <div>
                <Button color="green" link={link?.url}>
                  {link.text}
                </Button>
              </div>
            )}
          </Flow>
        </div>
      </Grid>
    </Section>
  )
}