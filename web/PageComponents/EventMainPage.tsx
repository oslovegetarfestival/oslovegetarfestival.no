import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"

import { Card } from "components/Card"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Button } from "components/Button"
import { weekDay, weekDayAndDate } from "utils/date"
import { Seo } from "components/Seo"
import { useEffect, useState } from "react"

type Props = {
  [key: string]: any
}

type EventItem = {
  title: string
  startDateTime: string
  eventType: string
  location: {
    title: string
  }
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
  const regularEvents = page?.items?.filter(
    (item: EventItem) =>
      item?.location?.title !== "Barneteltet" &&
      item?.location?.title !== "Hundeområdet" &&
      item?.eventType !== "barn"
  )
  const kidsEvents = page?.items?.filter(
    (item: EventItem) =>
      item?.location?.title === "Barneteltet" || item?.eventType === "barn"
  )
  const dogEvents = page?.items?.filter(
    (item: EventItem) => item?.location?.title === "Hundeområdet"
  )

  console.log(kidsEvents);

  const groupedRegularData = groupEventByDate(regularEvents)
  const groupedKidsData = groupEventByDate(kidsEvents)
  const groupedDogData = groupEventByDate(dogEvents)

  const [currentFilter, setCurrentFilter] = useState("")

  const handleFilterClick = (filter: string) => {
    setCurrentFilter(filter)
    // Save filter to browser to remember it on page back navigation
    sessionStorage.setItem("eventFilter", filter)
  }

  useEffect(() => {
    const storedFilter = sessionStorage.getItem("eventFilter")
    setCurrentFilter(storedFilter ?? "")
  }, [])

  const filterEvents = (events: EventItem[]) => {
    if (currentFilter === "" || currentFilter == null) return events

    return events.filter((event) => event?.eventType === currentFilter)
  }

  // Temp
  const isShowEvents = true

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

      {isShowEvents && (
        <>
          <Section width="large">
            <Flex justify="spaceBetween" gap="medium" wrap>
              <div>
                <Block bottom="2">
                  <p>Hopp til: </p>
                </Block>
                <Flex align="center" gap="small" wrap>
                  {groupedRegularData?.map(({ startDate }) => (
                    <Button
                      size="small"
                      isArrow={false}
                      key={startDate}
                      link={`#${weekDay(startDate)}`}
                    >
                      <span className="uppercase-first">
                        {weekDay(startDate)}
                      </span>
                    </Button>
                  ))}
                  {groupedKidsData && groupedKidsData.length > 0 && (
                    <Button size="small" isArrow={false} link={`#Barneteltet`}>
                      <span className="uppercase-first">For barn</span>
                    </Button>
                  )}
                  {groupedDogData && groupedDogData.length > 0 && (
                    <Button size="small" isArrow={false} link={`#Hundeområdet`}>
                      <span className="uppercase-first">For hunder</span>
                    </Button>
                  )}
                </Flex>
              </div>

              <div>
                <Block bottom="2">
                  <p>Vis kun: </p>
                </Block>
                <Flex align="center" gap="small" wrap>
                  <Button
                    color={currentFilter === "" ? "orange" : "blueberry"}
                    size="small"
                    isArrow={false}
                    onClick={() => {
                      handleFilterClick("")
                    }}
                  >
                    Vis alt
                  </Button>
                  <Button
                    color={
                      currentFilter === "kokkekurs" ? "orange" : "blueberry"
                    }
                    size="small"
                    isArrow={false}
                    onClick={() => {
                      handleFilterClick("kokkekurs")
                    }}
                  >
                    Kokkekurs
                  </Button>
                  <Button
                    color={
                      currentFilter === "foredrag" ? "orange" : "blueberry"
                    }
                    size="small"
                    isArrow={false}
                    onClick={() => {
                      handleFilterClick("foredrag")
                    }}
                  >
                    Foredrag
                  </Button>
                  <Button
                    color={currentFilter === "annet" ? "orange" : "blueberry"}
                    size="small"
                    isArrow={false}
                    onClick={() => {
                      handleFilterClick("annet")
                    }}
                  >
                    Annet
                  </Button>
                </Flex>
              </div>
            </Flex>
          </Section>

          {groupedRegularData?.map(({ startDate, items }: EventGroupedItem) => (
            <Section width="large" verticalPadding="large" key={startDate}>
              <Flow>
                <div>
                  <h2 className="sticky-section-header" id={weekDay(startDate)}>
                    {weekDayAndDate(startDate)}
                  </h2>

                  <Block bottom="4">
                    <p>
                      <em>
                        Inngang fra kl 11:00{" "}
                        {startDate.startsWith("2025-05-24") &&
                          " / Morgen-rave kl 09:00"}
                      </em>
                    </p>
                  </Block>
                </div>
                {/* @ts-ignore */}
                <Card data={filterEvents(items)} type="event" isSplit />
              </Flow>
            </Section>
          ))}

          {groupedKidsData?.map(
            ({ startDate, items }: EventGroupedItem, index) => (
              <Section width="large" verticalPadding="large" key={startDate}>
                <Flow>
                  <h2
                    className="sticky-section-header"
                    id={index === 0 ? "Barneteltet" : ""}
                  >
                    For barn - {weekDay(startDate)}
                  </h2>

                  {/* @ts-ignore */}
                  <Card data={filterEvents(items)} type="event" isSplit />
                </Flow>
              </Section>
            )
          )}

          {groupedDogData?.map(
            ({ startDate, items }: EventGroupedItem, index) => (
              <Section width="large" verticalPadding="large" key={startDate}>
                <Flow>
                  <h2
                    className="sticky-section-header"
                    id={index === 0 ? "Hundeområdet" : ""}
                  >
                    For hunder - {weekDay(startDate)}
                  </h2>
                  {/* @ts-ignore */}
                  <Card data={filterEvents(items)} type="event" isSplit />
                </Flow>
              </Section>
            )
          )}
        </>
      )}
    </>
  )
}

export default EventMainPage
