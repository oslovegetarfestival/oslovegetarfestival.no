import type { NextPage } from "next"

import { Block, Flex, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"
import Link from "next/link"

type Props = {
  [key: string]: any
}

const ExhibitorPage: NextPage<Props> = ({ page = {} }) => {
  const { currentExhibitor, allExhibitors } = page

  // Find previous and next exhibitor
  const currentIndex = allExhibitors?.findIndex(
    (event: any) => event?._id === currentExhibitor?._id
  )
  const nextExhibitor = allExhibitors?.[currentIndex + 1]
  const previousExhibitor = allExhibitors?.[currentIndex - 1]
  return (
    <>
      <Seo page={currentExhibitor} />

      <Section verticalPadding="large" noPadding="top">
        <Block top="4" bottom="4">
          <Link href="/utstillere">
            <a>← Utstillere</a>
          </Link>
        </Block>
        <Flow>
          <h1 className="page-title">{currentExhibitor?.title}</h1>
          <p className="lead">{currentExhibitor?.intro}</p>
        </Flow>
      </Section>

      <Section width="large" verticalPadding="tiny" noPadding="top">
        <SanityImageWrap image={currentExhibitor?.image} isFeaturedImage />
      </Section>

      {currentExhibitor?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      <Section width="small" verticalPadding="medium">
        <Flex gap="medium" justify="spaceBetween" wrap>
          {previousExhibitor?.slug?.current && (
            <Link href={previousExhibitor?.slug?.current}>
              <div>
                <p>← Forrige</p>
                <a className="link">{previousExhibitor?.title}</a>
              </div>
            </Link>
          )}
          {nextExhibitor?.slug?.current && (
            <Link href={nextExhibitor?.slug?.current}>
              <div>
                <p>Neste →</p>
                <a className="link">{nextExhibitor?.title}</a>
              </div>
            </Link>
          )}
        </Flex>
      </Section>
    </>
  )
}

export default ExhibitorPage
