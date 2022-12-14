import type { NextPage } from "next"
import Link from "next/link"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const ExhibitorMainPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p>Utstillere utlisting</p>

      <h1>{page?.title}</h1>
      <p>{page?.intro}</p>

      {page?.items.map((item: Props) => (
        <Link href={item.slug.current} key={item?.title}>
          {item?.title}
        </Link>
      ))}
    </Section>
  )
}

export default ExhibitorMainPage
