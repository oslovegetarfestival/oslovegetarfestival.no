import type { NextPage } from "next"
import Link from "next/link"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const EventMainPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <h1 className="page-title">{page?.title}</h1>
      <p className="lead">{page?.intro}</p>

      {page?.items.map((item: Props) => (
        <Link href={item.slug.current} key={item?.title}>
          <a className="link">{item?.title}</a>
        </Link>
      ))}
    </Section>
  )
}

export default EventMainPage
