import type { NextPage } from "next"

import { FrontpageHero } from "components/FrontpageHero"

type Props = {
  [key: string]: any
}

const FrontPage: NextPage<Props> = ({ page = {} }) => {
  return (
    <>
      <FrontpageHero />
      <h1 className="page-title">{page?.title}</h1>
      <p className="lead">{page?.intro}</p>
    </>
  )
}

export default FrontPage
