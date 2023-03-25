import type { NextPage } from "next"

import { Flex, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Card } from "components/Card"
import { Button } from "components/Button"

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

const groupExhibitionByType = (data: exhibitionItem[]) => {
  if (!data) return []

  const groupedByType = data.reduce(
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

  return groupedByType
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

      {groupedByType?.map(({ title, items }: exhibitionItem) => (
        <Section width="large" verticalPadding="large" key={title}>
          <Flow>
            <h2 className="section-header" id={title}>
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
