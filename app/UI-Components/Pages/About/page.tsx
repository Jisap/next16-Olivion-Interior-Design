import { TitleWithDot } from '@/lib/TitleWithDot'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText mt-15'>
          About Us
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            About Us
          </h2>
        </div>
      </div>

      <div className='px-[8%] lg:px-[12%] py-20'>
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="About Olivion" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl">
              We Shape <span className="text-prim">Interior Designs, Crafting</span> Timeless and Inspiring Spaces
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default About