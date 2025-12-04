"use client"

import Image from "next/image"
import service1 from "../../../../public/images/service-1.jpg"
import service2 from "../../../../public/images/service-2.jpg"
import service3 from "../../../../public/images/service-3.jpg"
import service4 from "../../../../public/images/service-4.jpg"
import service5 from "../../../../public/images/service-5.jpg"
import { TitleWithDot } from "@/lib/TitleWithDot"

const servicesData = [
  {
    id: "01",
    title: "Residential Interior Design",
    description: "Tailored design services for private homes, including stylish room makeovers, complete home transformations, and personalized decor planning - creating comfortable, functional, and visually stunning living spaces that reflect each client's unique taste and lifestyle.",
    image: service1,
    alt: "Residential Interior Design"
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    description: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues blending creativity with practicality to enhance brand identity, improve productivity, and create inspiring environments that leave a lasting impression on clients and visitors.",
    image: service2,
    alt: "Commercial Interior Design"
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    description: "Providing professional advice on concepts, color schemes, and material selection - helping clients make informed design choices that balance aesthetics and functionality while ensuring each space reflects their personal vision, style, and desired atmosphere.",
    image: service3,
    alt: "Interior Design Consultation"
  },
  {
    id: "04",
    title: "Outdoor & Landscape Design",
    description: "Extending design services to outdoor spaces such as gardens, patios, and decks - creating harmonious, functional, and visually appealing environments that seamlessly connect indoor and outdoor living.",
    image: service4,
    alt: "Outdoor & Landscape Design"
  },
  {
    id: "05",
    title: "Renovation and Remodeling",
    description: "Overhauling existing spaces to modernize and improve functionality and aesthetics - transforming outdated interiors into stylish, efficient, and inviting environments that align with contemporary design trends and enhance everyday living experiences.",
    image: service5,
    alt: "Renovation and Remodeling"
  }
]

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

        {servicesData.map((service) => (
          <div key={service.id} className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-4">
            <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
              <h4 className="text-4xl CalSans">{service.id}</h4>

              <div className="service-content">
                <h2 className="mb-3 text-4xl CalSans">
                  {service.title}
                </h2>

                <p className="text-gray-400 GolosText">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
              <Image
                src={service.image}
                alt={service.alt}
                className="w-full service-img object-cover rounded-2xl border-2 border-black"
              />
            </div>
            <i className="bi bi-arrow-up-right transition-all duration-300" />
          </div>
        ))}
      </div>
    </>
  )
}
