"use client"

import Link from "next/link"




const Blog = () => {
  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText pt-10'>
          Blogs
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
    </>
  )
}

export default Blog