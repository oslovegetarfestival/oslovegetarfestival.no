import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"

import { Card } from "components/Card"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Button } from "components/Button"
import { weekDayAndDate } from "utils/date"
import { Seo } from "components/Seo"

type Props = {
  [key: string]: any
}

type EventItem = {
  title: string
  startDateTime: string
}

type EventGroupedItem = {
  startDate: string
  items: EventItem[]
}

const groupEventByDate = (data: EventItem[]) => {
  if (!data) return []

  const grouped = data?.reduce(
    (result: EventGroupedItem[], item: EventItem) => {
      const currentDate = weekDayAndDate(item.startDateTime)

      const existingGroup = result?.find((group) => {
        const existingDate = weekDayAndDate(group.startDate)
        return existingDate === currentDate
      })

      if (existingGroup) {
        existingGroup.items.push(item)
      } else {
        result.push({
          startDate: item.startDateTime,
          items: [item],
        })
      }
      return result
    },
    []
  )

  return grouped
}

const EventMainPage: NextPage<Props> = ({ page = {} }) => {
  const groupedData = groupEventByDate(page?.items)

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
          <p className="font-strike">Hopp til: </p>
        </Block>
        <Flex align="center" gap="small" wrap>
          {groupedData?.map(({ startDate }) => (
            <Button
              size="small"
              isArrow={false}
              key={startDate}
              link={`#${weekDayAndDate(startDate)}`}
            >
              <span className="uppercase-first">
                {weekDayAndDate(startDate)}
              </span>
            </Button>
          ))}
        </Flex>
      </Section>

      {groupedData?.map(({ startDate, items }: EventGroupedItem) => (
        <Section width="large" verticalPadding="large" key={startDate}>
          <Flow>
            <h2
              className="sticky-section-header"
              id={weekDayAndDate(startDate)}
            >
              {weekDayAndDate(startDate)}
            </h2>
            {/* @ts-ignore */}
            <Card data={items} type="event" />
          </Flow>
        </Section>
      ))}
    </>
  )
}

export default EventMainPage
