"use client"

import { TitleWithDot } from "@/lib/TitleWithDot"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <TitleWithDot
            text="Your Best Choice"
            textColor="text-white"
            addTitleClass={false}
            isCentered={true}
          />

          <h1 className="CalSans text-5xl md:text-8xl w-full lg:w-[70%] my-5 text-white text-center">
            Let's Start <span className="text-prim">Your New Dream</span> Project
          </h1>

          <Link href="/UI-Components/Pages/Contact">
            <button className="rounded-full font-semibold px-10 py-4 GolosText text-white bg-[#5b6063] text-xl hover:bg-prim transition-all duration-300">
              Get Quote
            </button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Banner;
