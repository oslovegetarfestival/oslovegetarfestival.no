import Link from "next/link"
import { EventItem } from '../EventItem'

import styles from "./EventList.module.scss"

type Props = {
  events: any
}

export const EventList = ({ events }: Props) => {
  console.log(events)
  return (
    <div className={styles.eventList}>
      <div className={styles.filter}>
        <button data-active>Vis alle</button>
        <button>Kokkekurs</button>
      </div>
      <ul>
        {events.map((item: any, index: any) => (
          <EventItem key={index} />
        ))}
      </ul>
    </div>
  )
}