import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p>Forside</p>
      <h1>{page?.title}</h1>
      <p>{page?.intro}</p>
    </Section>
  )
}

export default FrontPage
