import { Flex, Flow } from "components/Layout"
import styles from "./Accordion.module.scss"

type ListItem = {
  title: string
  intro: string
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

      {list?.map(({ title, intro, _key }) => (
        <details key={_key} className={styles.details}>
          <summary className={styles.summary}>
            <Flex align="center">
              {/* Icon from https://reactsvgicons.com */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.6em"
                width="1.6em"
                className={styles.icon}
              >
                <path d="M12 6.879l-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z" />
              </svg>
              <h3>{title}</h3>
            </Flex>
          </summary>

          <p className={styles.content}>{intro}</p>
        </details>
      ))}
    </Flow>
  )
}
