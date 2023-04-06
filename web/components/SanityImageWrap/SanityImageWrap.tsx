import { SanityImage } from "sanity-image"
import { sanityConfig } from "lib/sanity"

const projectId = sanityConfig.projectId
const dataset = sanityConfig.dataset
const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`

type Props = {
  image: {
    asset: {
      _ref: string
    }
    hotspot?: {
      x: number
      y: number
    }
    crop?: {
      bottom: number
      left: number
      right: number
      top: number
    }
  }
  [x: string]: any
}

export const SanityImageWrap = (props: Props) => {
  console.log("props", props)
  const imageId = props?.image?.asset?._ref

  if (!imageId) return null

  const hotspot = props?.image?.hotspot
  const crop = props?.image?.crop
  return (
    <SanityImage
      baseUrl={baseUrl}
      id={imageId}
      crop={crop}
      hotspot={hotspot}
      {...props}
    />
  )
}
