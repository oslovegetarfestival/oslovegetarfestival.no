import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const NewsPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p>Nyheter</p>
      <h1>{page?.title}</h1>
      <p>{page?.intro}</p>
    </Section>
  )
}

export default NewsPage
