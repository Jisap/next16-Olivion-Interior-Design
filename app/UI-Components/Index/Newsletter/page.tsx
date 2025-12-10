"use client"

import { TitleWithDot } from '@/lib/TitleWithDot'


const NewsLetter = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] pt-20 pb-20 newsletter relative'>
        <div className='flex flex-col  items-center justify-center gap-5'>
          <TitleWithDot
            addTitleClass={false}
            isCentered={true}
            text="Subscribe to the newsletter"
          />


          <h1 className="CalSans text-4xl md:text-6xl my-5 w-full lg:w-[60%] text-center">
            Join <span className="text-prim">Our Newsletter Stay </span> Up to date.
          </h1>

          <p className='text-center GolosText w-full text-lg lg:w-[60%] mb-5'>
            Join our newsletter. Learn something new, gain access to exclusive content, and stay informed with the lastest updates in the industry.
          </p>

          <div className='email-details border-b border-gray-300 w-[450px] flex items-center transition-all duration-300 hover:border-prim cursor-pointer'>
            <input
              type="email"
              placeholder='Enter your email'
              className='focus:outline-none w-full py-3'
            />
            <i className='bi bi-arrow-up-right px-2 py-1 bg-prim text-white rounded-full transition-all duration-300 hover:rotate-45'></i>
          </div>

        </div>
      </div>
    </>
  )
}

export default NewsLetter;