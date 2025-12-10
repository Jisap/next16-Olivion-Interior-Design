"use client"

import Image from "next/image"
import Link from "next/link"
import page404Img from "@/public/images/404.png"



const Page404 = () => {
  return (
    <>
      <div className="page404 px-[8%] flex justify-center items-center text-center flex-col h-screen">
        <Image
          src={page404Img}
          alt="404"
        />

        <div className="my-5">
          <h1 className="CalSans text-4xl md:text-7xl">
            <span className="text-prim">Oops! </span>Page Not Found
          </h1>
        </div>

        <p className="text-gray-400 w-full lg:w-[30%]">
          We searched everywhere but couldn't find what you were looking for. Let's find a better place for you to go.
        </p>

        <Link href="/" className="mt-5">
          <button className="px-5 py-3 bg-white border border-gray-300 font-semibold rounded-lg hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300">
            Go Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default Page404