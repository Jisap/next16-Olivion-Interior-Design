"use client"

import Link from 'next/link'
import BlogData from '@/app/JsonData/BlogData.json'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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

          <h2 className='GolosText'>
            Blog
          </h2>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Blog Details
          </h2>
        </div>
      </div>
    </>
  )
}

export default BlogDetails