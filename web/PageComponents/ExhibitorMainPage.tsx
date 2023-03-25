import type { NextPage } from "next"

import { Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Card } from "components/Card"

type Props = {
  [key: string]: any
}

type exhibitionItem = {
  title: string
  [key: string]: any
}
type exhibitionGroupedItem = {
  title: string
  items: exhibitionItem[]
}

const ExhibitorMainPage: NextPage<Props> = ({ page = {} }) => {
  // Group by type
  const groupedByType = page?.items?.reduce(
    (result: exhibitionGroupedItem[], item: exhibitionItem) => {
      const existingGroup = result?.find((group) => group.title === item.type)
      if (existingGroup) {
        existingGroup.items.push(item)
      } else {
        result.push({ title: item.type, items: [item] })
      }
      return result
    },
    []
  )

  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        {page?.intro && <p className="lead">{page?.intro}</p>}
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      {groupedByType?.map(({ title, items }: exhibitionItem) => (
        <Section width="large" verticalPadding="large" key={title}>
          <Flow>
            <h2 className="section-header">
              <span aria-hidden="true">↓</span> {title}{" "}
              <span aria-hidden="true">↓</span>
            </h2>

            <Card data={items} />
          </Flow>
        </Section>
      ))}
    </>
  )
}

export default ExhibitorMainPage
