"use client"

import Image from "next/image"
import expertiseSlide1 from "../../../../public/images/banner-slide-1.jpg"
import expertiseSlide2 from "../../../../public/images/banner-slide-2.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCreative } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-creative"

export const ExpertiseSlider = () => {
  return (
    <div className="expertise-slider-wrapper px-[8%] lg:px-[12%] -mt-32 mb-32 relative z-10">
      <div className="expertise-slider">
        <Swiper
          modules={[Autoplay, EffectCreative]}
          effect="creative"
          creativeEffect={{
            prev: {
              // Slide que sale: se va a la izquierda escalando a 0
              translate: ["-100%", 0, 0],
              scale: 0,
            },
            next: {
              // Slide que entra: viene desde la derecha escalando desde 0 a 1
              translate: ["100%", 0, 0],
              scale: 0,
            },
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={2000}
        >
          <SwiperSlide>
            <Image
              src={expertiseSlide1}
              alt="Expertise Slide 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={expertiseSlide2}
              alt="Expertise Slide 2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
