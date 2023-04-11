import styles from "./ListWithRoundImages.module.scss"
import { Block } from "components/Layout"
import { SanityImageWrap } from "components/SanityImageWrap"

type ListItem = {
  image: { altText: string; asset: { _ref: string } }
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
              <div className={styles.imageWrap}>
                <SanityImageWrap
                  image={item?.image}
                  width={250}
                  height={250}
                  isHideCaption
                  isRoundCorners={false}
                />
              </div>
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
