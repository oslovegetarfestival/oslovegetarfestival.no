import { PortableText } from "@portabletext/react"
import Link from "next/link"

import { Image } from "components/Image"
import { Quote } from "components/Quote"
import { Flow, Section } from "components/Layout"
import { Video } from "components/Video"
import { SectionWithColor } from "components/SectionWithColor"
import { Accordion } from "components/Accordion"
import { ListWithRoundImages } from "components/ListWithRoundImages"

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
      <Section width="small" verticalPadding="medium">
        <div className="portableText">
          <Flow>
            <PortableText
              value={data.richText}
              components={{
                marks: {
                  //@ts-expect-error
                  link: ({
                    value,
                    children,
                  }: {
                    value: any
                    children: any
                  }) => {
                    return (
                      <a href={value?.href} className="link">
                        {children}
                      </a>
                    )
                  },
                  //@ts-expect-error
                  internalLink: ({
                    value,
                    children,
                  }: {
                    value: any
                    children: any
                  }) => {
                    return (
                      <Link href={value?.href}>
                        <a className="link">{children}</a>
                      </Link>
                    )
                  },
                },
              }}
            />
          </Flow>
        </div>
      </Section>
    )
  }

  // Image
  if (blockType === "image") {
    return (
      <Section verticalPadding="medium">
        {/* @ts-ignore */}
        <Image imageObject={data} alt="" />
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
        <Quote quote={data?.text} author={data?.author} />
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
      <Section width="large" verticalPadding="medium">
        {/* @ts-expect-error */}
        <ListWithRoundImages data={data} />
      </Section>
    )
  }

  // ... add more modules here

  // No matches
  console.error("No matching block module for type:", blockType)
  return null
}
