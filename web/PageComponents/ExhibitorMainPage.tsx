import type { NextPage } from "next"

import { Flex, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Card } from "components/Card"
import { Button } from "components/Button"

type Props = {
  [key: string]: any
}

type ExhibitionItem = {
  title: string
  [key: string]: any
}
type ExhibitionGroupedItem = {
  title: string
  items: ExhibitionItem[]
}

const groupExhibitionByType = (data: ExhibitionItem[]) => {
  if (!data) return []

  const grouped = data.reduce(
    (result: ExhibitionGroupedItem[], item: ExhibitionItem) => {
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

  return grouped
}

const ExhibitorMainPage: NextPage<Props> = ({ page = {} }) => {
  // Group by type
  const groupedByType = groupExhibitionByType(page?.items)

  return (
    <>
      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        {page?.intro && <p className="lead">{page?.intro}</p>}
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="large">
        <Flex align="center" gap="small">
          <p className="font-strike">Hopp til: </p>

          {groupedByType?.map(({ title }) => (
            <Button size="small" isArrow={false} key={title} link={`#${title}`}>
              {title}
            </Button>
          ))}
        </Flex>
      </Section>

      {groupedByType?.map(({ title, items }: ExhibitionItem) => (
        <Section width="large" verticalPadding="large" key={title}>
          <Flow>
            <h2 className="section-header" id={title}>
              {title}
            </h2>

            <Card data={items} />
          </Flow>
        </Section>
      ))}
    </>
  )
}

export default ExhibitorMainPage
