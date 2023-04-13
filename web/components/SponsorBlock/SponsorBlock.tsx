import { Flex, Section, Block } from "components/Layout"

import styles from "./SponsorBlock.module.scss"
import { SanityImageWrap } from "components/SanityImageWrap"

type Props = {
  data: {
    title: string
    sponsors: []
  }
}

export const SponsorBlock = ({ data }: Props) => {
  return (
    <Section centerContent width="full">
      <Section width="large" noPadding="sides">
        {data?.title && (
          <Block top="8" bottom="6">
            <h2>{data?.title}</h2>
          </Block>
        )}

        <Flex justify="center" align="center" gap="medium" wrap>
          {data?.sponsors?.map(
            ({
              image,
              url = "#",
              _key,
            }: {
              title: string
              image: {
                altText?: string
                asset: {
                  _ref: string
                }
              }
              url: string
              _key: string
            }) => (
              <a href={url} key={_key} className={styles.imageWrap}>
                <SanityImageWrap
                  image={image}
                  isRoundCorners={false}
                  width={300}
                  fill="contain"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "150px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </a>
            )
          )}
        </Flex>
      </Section>
    </Section>
  )
}
