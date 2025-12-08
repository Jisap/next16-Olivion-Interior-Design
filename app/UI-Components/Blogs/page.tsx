"use client"

import Link from "next/link"
import Image from 'next/image'
import BlogData from '@/app/JsonData/BlogData.json'
import { useState } from "react"




const Blog = () => {

  const [showAll, setShowAll] = useState(false);
  const visibleBlog = showAll ? BlogData : BlogData.slice(0, 3);

  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText mt-15'>
          Our Blog
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Blogs
          </h2>
        </div>
      </div>

      {/* Grid de Blogs */}
      <div className='px-[8%] lg:px-[12%] py-30'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleBlog.map((blog, index) => (
            <div key={index} className='group cursor-pointer'>
              <Link href={`/UI-Components/Blogs/${blog.id}`}>

                {/* Imagen de la tarjeta */}
                <div className='blog-image w-full relative rounded-2xl overflow-hidden'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={200}
                    height={200}
                    className='w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300 object-cover'
                  />

                  <span className='absolute top-3 left-5 bg-prim px-4 py-1 font-semibold rounded-full text-white GolosText hover:bg-text'>
                    {blog.tag[0]}
                  </span>
                </div>

                {/* Información de la tarjeta */}
                <div className='blog-info w-full mt-3'>
                  <p className='GolosText text-gray-400'>
                    by <span className='text-prim font-semibold'>{blog.postby}</span> - <span>{blog.date}</span>
                  </p>

                  <h2 className='text-3xl md:text-4xl CalSans my-3 hover:text-prim transition-all duration-300'>
                    {blog.title}
                  </h2>

                  <p className='GolosText text-gray-500'>
                    {blog.desc}
                  </p>
                </div>

              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-prim cursor-pointer text-white rounded GolosText text-xl font-semibold hover:bg-black  transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

    </>
  )
}

export default Blog