"use client"

import Image from "next/image"
import HeroImg from "@/public/images/Hero-img.jpg"
import HeroImg2 from "@/public/images/hero-img2.jpg"
import Link from "next/link"



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

                <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText font-semibold hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer group">
                  <Link href="/UI-Components/Pages/Services">
                    Get Our Services <i className="bi bi-arrow-right ps-1"></i>
                  </Link>
                </button>

                <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden 2xl:block">
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

      <div>

      </div>

    </>
  )
}

export default Hero