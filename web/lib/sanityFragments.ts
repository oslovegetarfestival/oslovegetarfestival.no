// Reusable GROQ fragments that enrich Sanity image references with the
// metadata needed to render them without layout shift (intrinsic dimensions).

const imageAsset = `asset->{_id, metadata{dimensions}}`

export const imageFragment = `image{..., ${imageAsset}}`

export const contentBlocksFragment = `contentBlocks[]{
  ...,
  _type == "image" => { ${imageAsset} },
  _type == "slideshow" => { images[]{..., ${imageAsset}} },
  _type == "sectionWithColor" => { ${imageFragment} },
  _type == "smallSectionWithColor" => { ${imageFragment} },
  _type == "listWithImageAndText" => { list[]{..., ${imageFragment}} },
  _type == "sponsorBlock" => { sponsors[]{..., ${imageFragment}} }
}`

export const docFragment = `..., ${imageFragment}, ${contentBlocksFragment}`
