import type { NextPage } from "next"

import { PageLayout } from "components/PageLayout"
import { Flow, Section } from "components/Layout"
import { Video } from "components/Video"

type Props = {
  data: Record<string, unknown>
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <PageLayout>
        <Section verticalPadding="xlarge">
          <Flow>
            <h2>#0 video bosh</h2>
            <Video id="Ho3PIXLTvvI" />

            <h2>#1 video component</h2>
            <Video id="rUthsu7i7v8" />

            <h2>#2 video component other</h2>
            <Video id="BHRyfEbhFFU" />

            <h2>#3 video raw embed</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rUthsu7i7v8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <h2>#4 video privacy</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/rUthsu7i7v8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Flow>
        </Section>
      </PageLayout>
    </>
  )
}

export default Home
