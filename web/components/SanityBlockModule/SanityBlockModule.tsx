import { Quote } from "components/Quote"
import { Section } from "components/Layout"
import { Video } from "components/Video"
import { SectionWithColor } from "components/SectionWithColor"
import { Accordion } from "components/Accordion"
import { ListWithRoundImages } from "components/ListWithRoundImages"
import { RichText } from "components/RichText"
import { SanityImageWrap } from "components/SanityImageWrap"
import { SmallSectionWithColor } from "components/SmallSectionWithColor"
import { Button } from "components/Button"

type Props = {
  data: {
    _type: string
    [key: string]: any
  }
}

// This is a helper for connecting Sanity block modules with the corresponding component
export const SanityBlockModule = ({ data }: Props) => {
  const { _type: blockType } = data

  // Rich text
  if (blockType === "richTextObject") {
    return (
      <Section width="small" verticalPadding="medium">
        <RichText data={data?.richText} />
      </Section>
    )
  }

  // Image
  if (blockType === "image") {
    return (
      <Section width="small" verticalPadding="medium">
        {/* @ts-ignore */}
        <SanityImageWrap image={data} width={700} />
      </Section>
    )
  }

  // Video
  if (blockType === "video") {
    return (
      <Section verticalPadding="medium">
        <Video id={data.videoId} />
      </Section>
    )
  }

  // Quote
  if (blockType === "quote") {
    return (
      <Section verticalPadding="medium">
        {/* @ts-ignore */}
        <Quote data={data} />
      </Section>
    )
  }

  // Section with color
  if (blockType === "sectionWithColor") {
    return (
      <Section verticalPadding="medium">
        {/* @ts-expect-error */}
        <SectionWithColor data={data} />
      </Section>
    )
  }

  // Small section with color
  if (blockType === "smallSectionWithColor") {
    return (
      <Section verticalPadding="small">
        {/* @ts-expect-error */}
        <SmallSectionWithColor data={data} />
      </Section>
    )
  }

  // Accordion
  if (blockType === "accordion") {
    return (
      <Section width="small" verticalPadding="medium">
        <Accordion title={data?.title} list={data?.list} />
      </Section>
    )
  }

  // List with image and text
  if (blockType === "listWithImageAndText") {
    return (
      <Section width="full" verticalPadding="large" background="lychee">
        {/* @ts-expect-error */}
        <ListWithRoundImages data={data} />
      </Section>
    )
  }

  // Button with link
  if (blockType === "button") {
    return (
      <Section width="small" verticalPadding="tiny" centerContent>
        <Button link={data?.url} color={data?.color}>
          {data?.text}
        </Button>
      </Section>
    )
  }

  // ... add more modules here

  // No matches
  console.error("No matching block module for type:", blockType)
  return null
}
