import type { NextPage } from "next"
import Link from "next/link"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p className="breadcrumb">Nyheter utlisting</p>

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

export default NewsPage
