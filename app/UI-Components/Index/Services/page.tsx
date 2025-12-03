"use client"

import Image from "next/image"
import service1 from "../../../../public/images/service-1.jpg"
import service2 from "../../../../public/images/service-2.jpg"
import service3 from "../../../../public/images/service-3.jpg"
import service4 from "../../../../public/images/service-4.jpg"
import service5 from "../../../../public/images/service-5.jpg"
import { TitleWithDot } from "@/lib/TitleWithDot"




export const Services = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] pt-20 pb-60 service relative">
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="Our Services" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Explore our <span className="text-prim">Comprehensive interior design</span> services
            </h1>

            <p className="text-gray-400 GolosText">
              We specialize in transforming visions into reality. Explore our portfolio of innovative architecture and interior design projects crafted with precision.
            </p>
          </div>
        </div>

        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
            <h4 className="text-4xl CalSans">01</h4>

            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Residential Interior Design
              </h2>

              <p className="text-gray-400 GolosText">
                Tailored design services for private homes, including stylish room makeovers, complete home transformations, and personalized decor planning - creating confortable, functional, and visually stunning living spaces thar reflect each client's unique taste and lifestyle.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service1}
              alt="service1"
              className="w-full service-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300" />
        </div>

        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
            <h4 className="text-4xl CalSans">02</h4>

            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Commercial Interior Design
              </h2>

              <p className="text-gray-400 GolosText">
                Designing functional and attractive interiors for bussinnes, including offices, retail spaces, and hospitality venues blending creativity with practicality to enhance brand identity, improve productivity, and create inspiring enviroments thar leave a lasting impression on clients and visitors.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service2}
              alt="service2"
              className="w-full service-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300" />
        </div>

        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
            <h4 className="text-4xl CalSans">03</h4>

            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Interior Design Consultation
              </h2>

              <p className="text-gray-400 GolosText">
                Providing professional advice on concepts, color schemes, and material selection - helping clients make informed design choices thar balance aesthetics and funcionality while ensuring each space reflects their personal vision, style, and desired atmosphere.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service3}
              alt="service3"
              className="w-full service-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300" />
        </div>

        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
            <h4 className="text-4xl CalSans">04</h4>

            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Outdoor & Landscape Design
              </h2>

              <p className="text-gray-400 GolosText">
                Extending design services to outdoor spaces such as gardens, patios, and decks - creating harmonious, functional, and visually appealing environments that seamlessly connect indoor and outdoor living.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service4}
              alt="service4"
              className="w-full service-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300" />
        </div>

        <div className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
            <h4 className="text-4xl CalSans">05</h4>

            <div className="service-content">
              <h2 className="mb-3 text-4xl CalSans">
                Renovation and Remodeling
              </h2>

              <p className="text-gray-400 GolosText">
                Overhauling existing spaces to modernize and improve functionality and aesthetics - transforming outdated interiors into styleish, efficient, and inviting environments thar align with contemporary design trends and enhance everyday living experiences.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
            <Image
              src={service5}
              alt="service5"
              className="w-full service-img object-cover rounded-2xl border-2 border-black"
            />
          </div>
          <i className="bi bi-arrow-up-right transition-all duration-300" />
        </div>
      </div>
    </>
  )
}

