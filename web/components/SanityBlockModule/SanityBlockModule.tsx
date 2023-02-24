import { PortableText } from "@portabletext/react"

import { Image } from "components/Image"
import { Quote } from "components/Quote"
import { Flow, Section } from "components/Layout"
import { Video } from "components/Video"

type Props = {
  data: {
    _type: string
    [key: string]: any
  }
}

// This is a helper for connecting Sanity block modules with the corresponding component
export const SanityBlockModule = ({ data }: Props) => {
  const { _type: blockType } = data

  // console.log("data", data)

  // Rich text
  if (blockType === "richTextObject") {
    return (
      <Section verticalPadding="small">
        <Flow>
          <PortableText value={data.richText} />
        </Flow>
      </Section>
    )
  }

  // Image
  if (blockType === "image") {
    return (
      <Section verticalPadding="small">
        {/* @ts-ignore */}
        <Image imageObject={data} alt="" />
      </Section>
    )
  }

  // Video
  if (blockType === "video") {
    return (
      <Section verticalPadding="small">
        <Video id={data.videoId} />
      </Section>
    )
  }

  // Quote
  if (blockType === "quote") {
    return (
      <Section verticalPadding="small">
        <Quote quote={data?.text} author={data?.author} />
      </Section>
    )
  }

  // ... add more modules here

  // No matches
  console.error("No matching block module for type:", blockType)
  return null
}
