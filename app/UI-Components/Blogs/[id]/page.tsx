"use client"

import Link from 'next/link'
import BlogData from '@/app/JsonData/BlogData.json'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import quote from '@/public/images/quote.png'

interface Blog {
  id: string;
  image: string;
  imageDet: string;
  tag: string;
  postby: string;
  date: string;
  title: string;
  desc: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
  title4: string;
  desc4: string;
  title5: string;
  desc5: string;
  gallery: string[];
  quote: string;
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

            {/* Blog Image & Content */}
            <div className='rounded-2xl overflow-hidden mt-10'>
              <Image
                src={blog.imageDet}
                alt={blog.title}
                width={1000}
                height={600}
                className='w-full h-auto rounded-2xl'
              />
            </div>

            <h2 className='text-4xl md:text-4xl CalSans my-5'>
              {blog.title2}
            </h2>

            <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
              {blog.desc2}
            </p>

            <h2 className='text-4xl md:text-4xl CalSans my-5'>
              {blog.title3}
            </h2>
            <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
              {blog.desc3}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
              {blog.gallery.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt={blog.title}
                  width={1000}
                  height={600}
                  className='w-full h-auto rounded-2xl'
                />
              ))}
            </div>

            <h2 className='text-4xl md:text-4xl CalSans my-5'>
              {blog.title4}
            </h2>

            <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
              {blog.desc4}
            </p>

            <div className='my-5'>
              <div className='bg-[#efebe8] rounded-2xl flex flex-col justify-center items-center text-center px-10 py-10'>
                <Image
                  src={quote}
                  alt='quote'
                  className='rounded-2xl'
                />

                <p className='GolosText text-2xl mb-3'>
                  {blog.quote}
                </p>

                <h4 className='GolosText font-bold'>
                  {blog.postby}
                </h4>
              </div>
            </div>

            <h2 className='text-4xl md:text-4xl CalSans my-5'>
              {blog.title5}
            </h2>

            <p className='text-gray-500 GolosText mt-5 leading-relaxed'>
              {blog.desc5}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails