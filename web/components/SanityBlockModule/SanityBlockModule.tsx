import { PortableText } from "@portabletext/react"

import { Image } from "components/Image"
import { Section } from "components/Layout"

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
      <Section verticalPadding="small">
        <PortableText value={data.richText} />
      </Section>
    )
  }

  // Image
  if (blockType === "image") {
    return (
      <Section verticalPadding="small">
        <Image imageObject={data} />
      </Section>
    )
  }

  // ... add more modules here

  // No matches
  console.error("No matching block module for type:", module._type)
  return <></>
}
