"use client"

import Link from "next/link"
import TeamsData from "@/app/JsonData/Teams.json"
import { TitleWithDot } from "@/lib/TitleWithDot"
import Image from "next/image"
import quote from "@/public/images/quote.png"
import team1 from "@/public/images/team-1.jpg"
import team2 from "@/public/images/team-2.jpg"
import team3 from "@/public/images/team-3.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const testimonials = [
  {
    id: 1,
    image: team1,
    name: "Olivia Peterson",
    role: "Co-founder",
    message: "As a Co-founder, Olivia Peterson values simplicity and elegance - and this design team delivered both perfectly. her new modern living room feels open, calm, and sophisticated. The neutral tones and minimalist design create a beatigul harmony that majes every guest admire her home's atmosphere."
  },
  {
    id: 2,
    image: team2,
    name: "Ethan Collins",
    role: "Lead Architect",
    message: "Ethan Collins has directed multiple award-winning architectural projects focused on sustainability and modern living. His portfolio incluye complejos residenciales y espacios públicos diseñados para maximizar luz natural y eficiencia energética."
  },
  {
    id: 3,
    image: team3,
    name: "Sophia Ramirez",
    role: "Design Consultant",
    message: "Sophia Ramirez specializes in client-focused consulting for interior transformations. Su trabajo destaca por integrar estética contemporánea con soluciones ergonómicas para oficinas y viviendas."
  }
]


const Teams = () => {
  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText mt-15'>
          Our Team
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Teams
          </h2>
        </div>
      </div>

      {/* Teams */}
      <div className='px-[8%] lg:px-[12%] py-20 pb-0 about'>
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="Our Best Team" size="sm" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[80%]">
              Meet The <span className="text-prim">Experts Our Interior</span> Designers.
            </h1>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 team-wrapper">
          {TeamsData.map((team, index) => (
            <div key={index} className="team-card cursor-pointer rounded-2xl overflow-hidden">
              <Image
                src={team.image}
                alt={team.name}
                width={400}
                height={400}
                className="w-full h-full rounded-2xl object-cover"
              />

              <div className="team-content text-white">
                <h2 className="CalSans text-4xl">
                  {team.name}
                </h2>

                <h2 className="GolosText">
                  {team.role}
                </h2>

                <div className="flex items-center gap-2 mt-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:boder-transparent cursor-pointer transition-all duration-300">
                    <i className="ri-facebook-fill"></i>
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:boder-transparent cursor-pointer transition-all duration-300">
                    <i className="ri-twitter-x-fill"></i>
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:boder-transparent cursor-pointer transition-all duration-300">
                    <i className="ri-instagram-line"></i>
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white hover:text-black hover:boder-transparent cursor-pointer transition-all duration-300">
                    <i className="ri-linkedin-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teams testimonials */}
      <div className="mt-30 px-[8%] lg:px-[12%] teams-bg py-20 flex flex-col justify-center items-center">
        <Image
          src={quote}
          alt="quote"
          width={130}
          height={130}
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1800,
          }}
          className="w-full justify-center items-center lg:w-[70%]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col justify-center items-center">
                <p className="GolosText text-2xl font-semibold text-center">
                  "{testimonial.message}"
                </p>

                <div className="flex items-center gap-5 mt-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={150}
                    height={100}
                    className="rounded-2xl"
                  />

                  <div className="">
                    <h2 className="GolosText font-bold text-2xl">
                      {testimonial.name}
                    </h2>

                    <p className="GolosText font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>




              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Teams