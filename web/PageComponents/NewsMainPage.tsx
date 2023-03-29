import type { NextPage } from "next"
import Link from "next/link"

import { Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        <p className="lead">{page?.intro}</p>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section verticalPadding="large">
        {page?.items.map((item: Props) => (
          <Link href={item.slug.current} key={item?.title}>
            <a className="link">{item?.title}</a>
          </Link>
        ))}
      </Section>
    </>
  )
}

export default NewsPage
