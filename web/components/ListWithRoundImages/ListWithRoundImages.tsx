import Image from "next/future/image"
import { urlForImage } from "lib/sanity"

import styles from "./ListWithRoundImages.module.scss"
import { Block } from "components/Layout"

type ListItem = {
  image?: { altText: string; asset: object }
  intro: string
  subTitle: string
  title: string
  _key: string
}

type Props = {
  data: {
    title?: string
    list: ListItem[]
  }
}

export const ListWithRoundImages = ({ data }: Props) => {
  const { title, list } = data

  return (
    <div className={styles.wrap}>
      {title && (
        <Block bottom="8">
          <h2>{title}</h2>
        </Block>
      )}

      <div className={styles.grid}>
        {list?.map((item) => (
          <div key={item._key}>
            <Block bottom="4">
              <picture className={styles.imageWrap}>
                {item?.image?.asset && (
                  <Image
                    src={urlForImage(item?.image)
                      .width(500)
                      .height(500)
                      .fit("max")
                      .auto("format")
                      .url()}
                    alt={item?.image?.altText ?? ""}
                    width="250"
                    height="250"
                  />
                )}
              </picture>
            </Block>

            <h3>{item.title}</h3>

            {item.subTitle && (
              <p className={styles.subTitle}>{item.subTitle}</p>
            )}

            <Block top="5">
              <p>{item.intro}</p>
            </Block>
          </div>
        ))}
      </div>
    </div>
  )
}
