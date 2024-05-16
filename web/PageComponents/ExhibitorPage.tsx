import type { NextPage } from "next"

import { Block, Flow, Section } from "components/Layout"
import { SanityBlockModule } from "components/SanityBlockModule"
import { Seo } from "components/Seo"
import { SanityImageWrap } from "components/SanityImageWrap"
import Link from "next/link"
import { PageNavigation } from "components/PageNavigation"
import { RichText } from "components/RichText"
import { BoxWithColor } from "components/BoxWithColor"

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
        <Block top="4" bottom="4" center>
          <Link href="/utstillere">← Utstillere</Link>
        </Block>

        <h1 className="page-title">{currentExhibitor?.title}</h1>
        <p className="lead">{currentExhibitor?.intro}</p>
      </Section>

      <Section width="medium">
        <SanityImageWrap
          image={currentExhibitor?.image}
          isFeaturedImage
          loading="eager"
        />
      </Section>

      {currentExhibitor?.contentBlocks?.map((module: any) => (
        <SanityBlockModule data={module} key={module._key} />
      ))}

      {currentExhibitor?.menu && (
        <Section width="small" verticalPadding="medium">
          <BoxWithColor>
            <Flow space="xsmall">
              <h2>Festivalmeny</h2>
              <RichText data={currentExhibitor.menu?.richText} />
            </Flow>
          </BoxWithColor>
        </Section>
      )}

      <PageNavigation previous={previousExhibitor} next={nextExhibitor} />
    </>
  )
}

export default ExhibitorPage
