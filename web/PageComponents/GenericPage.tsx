import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const GenericPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section verticalPadding="large">
      <p className="breadcrumb">Generisk side</p>
      <h1 className="page-title">{page?.title}</h1>
      <p className="lead">{page?.intro}</p>
    </Section>
  )
}

export default GenericPage
