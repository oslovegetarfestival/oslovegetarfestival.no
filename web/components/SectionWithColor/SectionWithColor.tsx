import classNames from "classnames"

import { Flow, Grid, Section } from "components/Layout"
import { Button } from "components/Button"

import styles from "./SectionWithColor.module.scss"
import { SanityImageWrap } from "components/SanityImageWrap"

type Props = {
  data: {
    title: string
    intro: string
    image: {
      altText?: string
      asset: {
        _ref: string
      }
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
    bgColor ? styles[`-background-${bgColor}`] : false
  )

  const imageWrapClass = classNames(
    styles.imageWrap,
    bgColor ? styles[`-background-${bgColor}`] : false
  )

  return (
    <Section width="large" noGutter>
      <Grid verticalCenter noGutter reverse={isReverse}>
        <div className={imageWrapClass}>
          <SanityImageWrap
            image={image}
            width={500}
            height={500}
            isHideCaption
            isRoundCorners={false}
          />
        </div>

        <div className={textWrapClass}>
          <Flow>
            <p className="h2">{title}</p>
            <p className={styles.intro}>{intro}</p>

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
