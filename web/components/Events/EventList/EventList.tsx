import { EventItem } from "../EventItem"

import styles from "./EventList.module.scss"

type Props = {
  events: any
}

export const EventList = ({ events }: Props) => {
  return (
    <div className={styles.eventList}>
      <div className={styles.filter}>
        <button data-active>Vis alle</button>
        <button>Kokkekurs</button>
      </div>
      <ul>
        {events.map((item: any, index: any) => (
          <EventItem key={index} event={item} />
        ))}
      </ul>
    </div>
  )
}
