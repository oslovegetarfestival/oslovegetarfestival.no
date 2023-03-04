import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Image } from "components/Image"

type Props = {
  [key: string]: any
}

const ExhibitorPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <p className="breadcrumb">Utstiller</p>
        <h1 className="page-title">{page?.title}</h1>
      </Section>

      <Section verticalPadding="tiny" noPadding="top">
        <Flow>
          <Image imageObject={page?.image} />
          <p className="lead">{page?.intro}</p>
        </Flow>
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}
    </>
  )
}

export default ExhibitorPage
