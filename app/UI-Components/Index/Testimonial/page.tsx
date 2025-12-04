"use client"

import { TitleWithDot } from '@/lib/TitleWithDot'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Image from 'next/image'
import test1 from '@/public/images/team-1.jpg'
import test2 from '@/public/images/testimonials-1.jpg'


const TestimonialData = [
  {
    id: "1",
    desc: "A wonderful experience! They knew what they ware doing. The team was professional and delivered a space that exceeded my expectations.",
    image: test1,
    name: "Olivia Peterson",
    role: "Co-founder"
  },
  {
    id: "2",
    desc: "I absolutely love my new modern living room! The clean line, a neutral color palette, and the perfect balance of functionality. ",
    image: test2,
    name: "Morgan Dufresne",
    role: "Company owner"
  }
]


export const Testimonial = () => {
  return (
    <>
      <div className='testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE]'>
        <div className='w-full lg:w-1/2 testimonial-image'></div>

        <div className='w-full lg:w-1/2 pe-[8%] lg:pe-[12%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20'>
          <div>
            <div className='flex flex-col gap-10'>
              <TitleWithDot
                text="Testimonials"
                addTitleClass={false}
              />

              <div className='w-full lg:w-1.2'>
                <h1 className="CalSans text-5xl md:text-7xl">
                  Here's what <span className="text-prim"> warn words our clients</span> say.
                </h1>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-5 mt-5'>
              <h1 className='text-7xl CalSans'>
                4.80
              </h1>

              <div className='flex flex-col items-center'>
                <div className='stars-icon flex items-center gap-1 bg-prim text-white px-3 py-1 rounded-full'>
                  <i className='bi bi-star-fill text-xs'></i>
                  <i className='bi bi-star-fill text-xs'></i>
                  <i className='bi bi-star-fill text-xs'></i>
                  <i className='bi bi-star-fill text-xs'></i>
                  <i className='bi bi-star-fill text-xs'></i>
                </div>

                <p className='GolosText'>
                  2,688 reviews
                </p>
              </div>

              <p className='w-full lg:w-[50%] font-semibold GolosText'>
                From concept to reality, the team turned my vision into a stunning, livable space. I couldn't be happier with this!.
              </p>
            </div>
          </div>

          <div className='mt-10'>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
              }}
              speed={2000}
            >
              {TestimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <p className='GolosText text-2xl font-semibold tracking-wide'>
                    "{testimonial.desc}"
                  </p>

                  <div className='flex items-center gap-3 mt-8'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full w-[70px] h-[70px] object-cover"
                    />

                    <div className='flex flex-col'>
                      <h3 className='GolosText text-2xl font-semibold'>
                        {testimonial.name}
                      </h3>

                      <p className='GolosText font-semibold text-gray-600'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

