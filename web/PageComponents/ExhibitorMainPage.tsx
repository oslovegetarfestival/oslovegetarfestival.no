import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Card } from "components/Card"
import { Button } from "components/Button"
import { Seo } from "components/Seo"

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

  // Move "Tidligere utstillere" to the bottom of the array (and present it last)
  const indexToMove = grouped.findIndex(
    (event) => event.title === "Tidligere utstillere"
  )
  if (indexToMove !== -1) {
    const [movedItem] = grouped.splice(indexToMove, 1)
    grouped.push(movedItem)
  }

  // Move "Serveringsbod" to the top of the array (and present it first)
  const indexToMoveServeringsbod = grouped.findIndex(
    (event) => event.title === "Serveringsbod"
  )
  if (indexToMoveServeringsbod !== -1) {
    const [movedItem] = grouped.splice(indexToMoveServeringsbod, 1)
    grouped.unshift(movedItem)
  }

  return grouped
}

const ExhibitorMainPage: NextPage<Props> = ({ page = {} }) => {
  // Group by type
  const groupedByType = groupExhibitionByType(page?.items)

  return (
    <>
      <Seo page={page} />

      <Section verticalPadding="large" noPadding="top">
        <h1 className="page-title">{page?.title}</h1>
        {page?.intro && <p className="lead">{page?.intro}</p>}
      </Section>

      {page?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="large">
        <Block bottom="2">
          <p>Hopp til: </p>
        </Block>
        <Flex align="center" gap="small" wrap>
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
            <h2 className="sticky-section-header" id={title}>
              {title}
            </h2>

            <Card data={items} isSplit />
          </Flow>
        </Section>
      ))}
    </>
  )
}

export default ExhibitorMainPage
