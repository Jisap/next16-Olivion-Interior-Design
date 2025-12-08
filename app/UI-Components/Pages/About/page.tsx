"use client"

import { TitleWithDot } from '@/lib/TitleWithDot'
import Link from 'next/link'
import Image from 'next/image'

import About2 from '@/public/images/About-2.jpg'
import About4 from '@/public/images/About-4.jpg'


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
          <div className='w-full lg:w-2/3 pt-8'>
            <span className='rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold'>
              Started In 1989
            </span>

            <h1 className="CalSans pt-5 text-4xl md:text-5xl w-full lg:w-[80%] mb-5">
              We Shape <span className="text-prim">Interior Designs, Crafting</span> Timeless and Inspiring Spaces
            </h1>

            <div className='about-content md:pt-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className='about-text'>
                  <h2 className='text-[10rem] leading-40 GolosText font-bold text-prim '>
                    26
                  </h2>

                  <p className='text-2xl lg:px-15 CalSans'>
                    Years of Experience
                  </p>
                </div>

                <div className='about-img'>
                  <Image
                    src={About4}
                    alt="About4"
                    width={200}
                    height={200}
                    className='object-cover rounded-2xl h-full w-full'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/3'>
            <div className='about-img md:h-[600px]'>
              <Image
                src={About2}
                alt="About2"
                width={200}
                height={200}
                className='object-cover rounded-2xl h-full w-full'
              />
            </div>

            <div className='about-pere pt-10'>
              <p className='GolosText text-sm text-gray-500'>
                We believe thar every space has the power to inspire, and thar great design brings that inspiration to life. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those whor inhabit them
              </p>

              <button className='mt-9 border border-gray-500/50 font-semibold px-5 py-3 rounded-full hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300'>
                <Link href="/">
                  Learn More <i className='bi bi-arrow-right ps-1'></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About