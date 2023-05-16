import { Flex, Flow } from "components/Layout"
import { RichText } from "components/RichText"
import styles from "./Accordion.module.scss"

type ListItem = {
  title: string
  richTextObject: any
  _key: string
}

type Props = {
  title?: string
  list?: ListItem[]
}

export const Accordion = ({ title, list }: Props) => {
  return (
    <Flow>
      {title && <h2>{title}</h2>}

      <div className={styles.wrap}>
        {list?.map(({ title, richTextObject, _key }) => (
          <details key={_key} className={styles.details}>
            <summary className={styles.summary}>
              <Flex align="center" justify="spaceBetween" gap="small">
                <h3 className="h5">
                  <strong>{title}</strong>
                </h3>

                {/* Icon from https://reactsvgicons.com */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24px"
                  width="24px"
                  className={styles.icon}
                >
                  <path d="M12 6.879l-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z" />
                </svg>
              </Flex>
            </summary>

            <div className={styles.content}>
              <RichText data={richTextObject?.richText} />
            </div>
          </details>
        ))}
      </div>
    </Flow>
  )
}
