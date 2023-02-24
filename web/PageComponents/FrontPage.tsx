import type { NextPage } from "next"

import { Section } from "components/Layout"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <Section width="large" verticalPadding="large" noPadding="top">
      <p className="breadcrumb">Forside</p>
      <h1 className="page-title">{page?.title}</h1>
      <p className="lead">{page?.intro}</p>
    </Section>
  )
}

export default FrontPage
