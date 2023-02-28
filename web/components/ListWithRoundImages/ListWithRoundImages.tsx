import Image from "next/future/image"
import { urlForImage } from "lib/sanity"

import styles from "./ListWithRoundImages.module.scss"
import { Block } from "components/Layout"

type ListItem = {
  image: { altText: string }
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
    <div className="center">
      {title && (
        <Block bottom="7">
          <h2>{title}</h2>
        </Block>
      )}

      <div className={styles.grid}>
        {list?.map((item) => (
          <div key={item._key}>
            <Block bottom="4">
              <picture className={styles.imageWrap}>
                <Image
                  src={urlForImage(item?.image)
                    .width(400)
                    .height(400)
                    .fit("max")
                    .auto("format")
                    .url()}
                  alt={item?.image?.altText ?? ""}
                  className={styles.image}
                  width="250"
                  height="250"
                />
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
