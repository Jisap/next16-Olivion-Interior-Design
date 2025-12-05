"use client"


import { TitleWithDot } from '@/lib/TitleWithDot'
import Image from 'next/image'

import BlogData from '@/app/JsonData/BlogData.json'
import Link from 'next/link'



export const Blogs = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 pb-20">
        <div className='flex flex-col lg:flex-row gap-10'>
          <TitleWithDot
            text="Latest Blogs"
          />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl mb-5 w-full 3xl:w-[80%]">
              Take a look <span className="text-prim">Our latest blog</span> & Articles.
            </h1>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-5 mt-20">
          <div className='w-full lg:w-1/2'>
            {BlogData.slice(0, 1).map((blog, index) => (
              <div key={index} className='group cursor-pointer'>
                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                  <div className='blog-image relative rounded-2xl overflow-hidden'>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className='w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300 object-cover'

                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

