import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Keyboard, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import styles from "./Slideshow.module.scss"
import { SanityImageWrap } from "components/SanityImageWrap"
import { Block } from "components/Layout"

type Props = {
  data: {
    title?: string
    images: []
  }
}

export const Slideshow: React.FC<Props> = ({ data }) => {
  if (!data) return null

  return (
    <div>
      {data?.title && (
        <Block bottom="3">
          <h3>{data.title}</h3>
        </Block>
      )}
      <div className={styles.wrap}>
        <Swiper
          autoHeight={false}
          navigation={true}
          pagination={{
            clickable: true,
            currentClass: styles.pagination,
          }}
          slidesPerView={1}
          spaceBetween={16}
          a11y={{
            prevSlideMessage: "Forrige bilde",
            nextSlideMessage: "Neste bilde",
          }}
          loop={true}
          cssMode={true}
          keyboard={true}
          modules={[Pagination, Keyboard, Navigation]}
          className={styles.slideshow}
        >
          {data?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <SanityImageWrap image={image} isFeaturedImage loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
