"use client"

import Link from 'next/link'
import serviceImg1 from "@/public/images/service-1.jpg"
import serviceImg2 from "@/public/images/service-2.jpg"
import serviceImg3 from "@/public/images/service-3.jpg"
import serviceImg4 from "@/public/images/service-4.jpg"
import serviceImg5 from "@/public/images/service-5.jpg"
import serviceImg6 from "@/public/images/service-6.jpg"


const ServicesData = [
  {
    id: "1",
    image: serviceImg1,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
  },
  {
    id: "2",
    image: serviceImg2,
    title: "Commercial Interior Design",
    desc: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
  },
  {
    id: "3",
    image: serviceImg3,
    title: "Interior Design Consultation",
    desc: "Providing professional advice on concepts, color schemes & material",
  },
  {
    id: "4",
    image: serviceImg4,
    title: "Outdor & Landscape Desing",
    desc: "Extending ddesign services to outdoor spaces such as gardens, patios and decks.",
  },
  {
    id: "5",
    image: serviceImg5,
    title: "Renovation and Remodeling",
    desc: "Overhauling existing spaces to modernize and improve functionality.",
  },
  {
    id: "6",
    image: serviceImg6,
    title: "Interior 2D/3D Layouts",
    desc: "Realistic 3D visualizations to help you envision your space before it's build in real life.",
  },
]

const Services = () => {
  return (
    <>
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText pt-10'>
          Services
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Services
          </h2>
        </div>
      </div>

      <div className='px-[8%] lg:px-[12%] pt-30 pb-20'>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='w-full lg:w-1/3 title pt-8'>
            <span className='rounded-full title-span border border-gray-400 px-6 py-2 uppercase font-bold GolosText'>
              Our Services
            </span>
          </div>

          <div className='w-full lg:w-2/3'>
            <h1 className='CalSans text-4xl md:text-6xl w-full lg:w-[80%] mb-5'>
              Explore Our <span className='text-prim'>Comprehensive Interior Design</span> Services
            </h1>

            <p className='text-gray-400 GolosText'>
              We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Services