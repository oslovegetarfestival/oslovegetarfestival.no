import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const GenericPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p>Generisk side</p>
      <h1>{page?.title}</h1>
      <p>{page?.intro}</p>
    </Section>
  )
}

export default GenericPage
