"use client"

import Image from "next/image"
import AboutImg1 from "@/public/images/About-1.jpg"
import AboutImg2 from "@/public/images/About-2.jpg"
import AboutImg3 from "@/public/images/About-3.jpg"
import { TitleWithDot } from "../../../../lib/TitleWithDot"
import CountUp from "react-countup"

const statsData = [
  {
    value: 18,
    suffix: "",
    title: "Years experience",
    desc: "Improving homes with expert craftsmanship for year"
  },
  {
    value: 190,
    suffix: "+",
    title: "Projects completed",
    desc: "Over 250 successful projects delivered with quality and care"
  },
  {
    value: 260,
    suffix: "+",
    title: "Skilled Tradespeople",
    desc: "Our team of 30 experts ensures top-quality result"
  },
  {
    value: 328,
    suffix: "+",
    title: "Client satisfaction",
    desc: "IAll of our clients are satisfied with our work"
  }
]

export const About = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="About Olivion" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl">
              We Shape <span className="text-prim">Interior Designs, Crafting</span> Timeless and Inspiring Spaces
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          <div className="about-image">
            <Image
              src={AboutImg1}
              alt="AboutImg1"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-10">
            <Image
              src={AboutImg2}
              alt="AboutImg2"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
          <div className="about-image lg:pt-20">
            <Image
              src={AboutImg3}
              alt="AboutImg3"
              className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <div key={index} className="about-card">
            <h2 className="text-5xl tracking-wider CalSans font-bold mb-6">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
              {item.suffix}
            </h2>

            <div className="about-content py-6 border-t border-gray-400">
              <h3 className="mb-3 text-2xl CalSans">
                {item.title}
              </h3>

              <p className="text-gray-400 GolosText">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
