"use client"

import Image from "next/image"
import HeroImg from "@/public/images/Hero-img.jpg"
import HeroImg2 from "@/public/images/hero-img2.jpg"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import partner1 from "@/public/images/partner1.svg"
import partner2 from "@/public/images/partner2.svg"
import partner3 from "@/public/images/partner3.svg"
import partner4 from "@/public/images/partner4.svg"
import partner5 from "@/public/images/partner5.svg"
import partner6 from "@/public/images/partner6.svg"

const Partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
]

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-bg-elm"></div>
        <div className="hero-bg-elm2"></div>
        <div className="w-full px-[8%] lg:px-[12%] py-10">
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
            <div className="w-full lg:w-1/2 relative">
              <div>
                <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                  Trusted Design Partner
                </span>

                <h1 className="text-6xl lg:text-8xl CalSans my-5">
                  Find Your Inspired <span className="text-prim">Interior Design</span>
                </h1>

                <p className="text-gray-700 w-full md:w-[60%]">
                  Whether it's your home, office or a commercial project, we are always dedicated to bringing your vision to life.
                </p>

                <div className="flex items-center gap-5">
                  {/* Botón: siempre visible */}
                  <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                    <Link href="/UI-Components/Pages/Services">
                      Get Our Services <i className="bi bi-arrow-right ps-1"></i>
                    </Link>
                  </button>

                  {/* Imagen: solo visible por debajo de 3xl */}
                  <div className="relative block 3xl:hidden mt-9 hero-content-img2">
                    <Image
                      src={HeroImg2}
                      alt="HeroImg2"
                      height={52}
                      width={252}
                      className="rounded-full"
                    />
                    <i className="bi bi-play-fill absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                  </div>
                </div>

                <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden 3xl:block">
                  <Image
                    src={HeroImg2}
                    alt="HeroImg2"
                    className="rounded-full"
                  />
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 z-10">
              <div className="hero-image">
                <Image
                  src={HeroImg}
                  alt="HeroImg"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] pb-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 1500
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: {
              slidesPerView: 5
            },
            991: {
              slidesPerView: 4
            },
            575: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 2
            }
          }}
          className="partner-swiper"
        >
          {
            Partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={partner}
                  alt="partnerImage"
                  className="partner-img"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </>
  )
}

export default Hero