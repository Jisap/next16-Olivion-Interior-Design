"use client"

import Image from "next/image"
import HeroImg from "@/public/images/Hero-img.jpg"
import HeroImg2 from "@/public/images/Hero-img2.jpg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero