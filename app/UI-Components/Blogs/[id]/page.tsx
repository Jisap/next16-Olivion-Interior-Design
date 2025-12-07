"use client"

import Link from 'next/link'
import BlogData from '@/app/JsonData/BlogData.json'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Blog {
  id: string;
  image: string;
  imageDet: string;
  tag: string;
  postby: string;
  date: string;
  title: string;
  desc: string;
}

const BlogDetails = () => {

  const { id } = useParams();

  const [blog, setBlog] = useState<Blog | undefined>(undefined)

  useEffect(() => {
    const foundBlog = BlogData.find((item) => item.id === id);
    setBlog(foundBlog)
  }, [id]);

  if (!blog) {
    return (
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-5xl md:text-6xl GolosText mt-15'>
          Blog not found
        </h1>

        <div className='flex items-center gap-5 mt-3'>
          <Link
            href="/UI-Components/Blogs"
            className='hover:text-prim text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white'>
            Back To Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText pt-10'>
          Blog Details
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <Link href='/UI-Components/Blogs' className='hover:text-prim transition-all duration-300'>
            <h2 className='GolosText'>
              Blog
            </h2>
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            {blog.title}
          </h2>
        </div>
      </div>

      <div className='px-[8%] lg:px-[12%] py-20'>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-8'>
          {/* Blog - Tag - PostBy - Date & Title */}
          <div className='w-full lg:w-1/1'>
            <div>
              <p className='text-gray-400 GolosText mb-4'>
                <span className='bg-prim px-4 py-1 rounded-full text-white mr-3'>
                  {blog.tag}
                </span>

                by <span className='text-prim font-semibold'>{blog.postby}</span> -{" "} <span>{blog.date}</span>
              </p>

              <h2 className='text-4xl md:text-6xl CalSans mb-3'>
                {blog.title}
              </h2>

              <p className='text-gray-500 GolosText leading-relaxed'>
                {blog.desc}
              </p>
            </div>

            {/* Blog Image */}
            <div className='rounded-2xl overflow-hidden mt-10'>
              <Image
                src={blog.imageDet}
                alt={blog.title}
                width={1000}
                height={600}
                className='w-full h-auto rounded-2xl'
              />
            </div>

            <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
              {blog.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails