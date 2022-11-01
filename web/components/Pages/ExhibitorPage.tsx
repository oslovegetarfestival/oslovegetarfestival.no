import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const ExhibitorPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p>Utstiller</p>
      <h1>{page?.title}</h1>
      <p>{page?.intro}</p>
    </Section>
  )
}

export default ExhibitorPage
