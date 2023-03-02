import Link from "next/link"
import { PortableText } from "@portabletext/react"

import { Flow } from "components/Layout"

type Props = {
  data: any
}

export const RichText = ({ data }: Props) => {
  return (
    <Flow>
      <PortableText
        value={data}
        components={{
          marks: {
            //@ts-expect-error
            link: ({ value, children }: { value: any; children: any }) => {
              const isInternalLink = value?.href?.startsWith("/")

              if (isInternalLink) {
                return (
                  <Link href={value?.href}>
                    <a className="link">{children}</a>
                  </Link>
                )
              }

              return (
                <a href={value?.href} className="link">
                  {children}
                </a>
              )
            },
          },
        }}
      />
    </Flow>
  )
}