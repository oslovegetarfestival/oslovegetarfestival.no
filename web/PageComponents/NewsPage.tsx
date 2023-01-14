import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large">
        <Flow>
          <h1>{page?.title}</h1>
          <p>{page?.intro}</p>
        </Flow>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default NewsPage
