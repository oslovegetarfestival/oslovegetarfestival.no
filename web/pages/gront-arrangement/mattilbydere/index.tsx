import type { NextPage } from "next"

import { sanityClient } from "lib/sanity"
import { useRouter } from "next/router"
import { Seo } from "components/Seo"
import { HeaderGreenEvents } from "components/HeaderGreenEvents"
import { Block, Flex, Flow, Section } from "components/Layout"
import { SanityImageWrap } from "components/SanityImageWrap"
import { SanityBlockModule } from "components/SanityBlockModule"
import { FooterGreenEvents } from "components/FooterGreenEvents"
import { Card } from "components/Card"
import { Button } from "components/Button"

type Props = {
  [key: string]: any
}

type FoodProvider = {
  title: string
  [key: string]: any
}

type FoodProviderGroupedItem = {
  title: string
  items: FoodProvider[]
}

const groupFoodProviderByType = (data: FoodProvider[]) => {
  if (!data) return []

  const grouped = data.reduce(
    (result: FoodProviderGroupedItem[], item: FoodProvider) => {
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

const Page: NextPage<Props> = ({ page = {}, foodProviders = {} }) => {
  const router = useRouter()

  // Group food providers by type
  const groupedByType = groupFoodProviderByType(foodProviders)

  return (
    <>
      <Seo page={page} customSiteName="Grønnere mat på arrangementer" />

      <HeaderGreenEvents />

      <main
        data-animate-in
        key={router.asPath}
        style={{ paddingBottom: "60px" }}
      >
        <Section verticalPadding="large" noPadding="top">
          <h1 className="page-title">{page?.title}</h1>
          <p className="lead">{page?.intro}</p>
        </Section>

        <Section width="medium">
          <SanityImageWrap image={page?.image} isFeaturedImage />
        </Section>

        {page?.contentBlocks?.map((module: any) => (
          <SanityBlockModule data={module} key={module._key} />
        ))}
      </main>

      <Section width="large">
        <Block bottom="2">
          <p className="font-strike">Hopp til: </p>
        </Block>
        <Flex align="center" gap="small" wrap>
          {groupedByType?.map(({ title }) => (
            <Button size="small" isArrow={false} key={title} link={`#${title}`}>
              {title}
            </Button>
          ))}
        </Flex>
      </Section>

      {groupedByType?.map(({ title, items }: FoodProvider) => (
        <Section width="large" verticalPadding="large" key={title}>
          <Flow>
            <h2 className="sticky-section-header" id={title}>
              {title}
            </h2>

            <Card data={items} isSplit />
          </Flow>
        </Section>
      ))}

      <FooterGreenEvents />
    </>
  )
}

export default Page

// Get data for this particular page
export const getStaticProps = async ({ params }: Props) => {
  const query = `{'page': *[_type == 'greenEvents' && slug.current == "/gront-arrangement/mattilbydere"][0], 'foodProviders': *[_type == 'greenEventsFoodProvider'] | order(title) {..., ...type->{"type": title}}}`

  const result = await sanityClient.fetch(query)
  const { page = {}, foodProviders = [] } = result
  return {
    props: {
      page: page,
      foodProviders: foodProviders,
    },
  }
}
