import classNames from "classnames"

import { Block, Section } from "components/Layout"

import styles from "./SmallSectionWithColor.module.scss"
import { SanityImageWrap } from "components/SanityImageWrap"
import { RichText } from "components/RichText"

type Props = {
  data: {
    title: string
    richTextObject: any
    image: {
      altText?: string
      asset: {
        _ref: string
      }
    }
    bgColor: "banana" | "lychee"
  }
}

export const SmallSectionWithColor = ({ data }: Props) => {
  const { bgColor, title, richTextObject, image } = data || {}

  const wrapClass = classNames(
    styles.wrap,
    bgColor ? styles[`-background-${bgColor}`] : false
  )

  return (
    <Section width="small" noPadding="sides">
      <div className={wrapClass}>
        <div className={styles.imageWrap}>
          <SanityImageWrap
            image={image}
            width={250}
            height={250}
            isHideCaption
            isRoundCorners={false}
          />
        </div>

        <div className={styles.textWrap}>
          <Block bottom="3">
            <h2 className="h3">{title}</h2>
          </Block>
          <RichText data={richTextObject?.richText} />
        </div>
      </div>
    </Section>
  )
}
