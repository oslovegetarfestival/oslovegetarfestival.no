import type { NextPage } from "next"
import Link from "next/link"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  console.log("page", page)
  return (
    <Section verticalPadding="large">
      <p>Nyheter utlisting</p>

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

export default NewsPage
