"use client"

import { TitleWithDot } from '@/lib/TitleWithDot'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import About2 from '@/public/images/About-2.jpg'
import About4 from '@/public/images/About-4.jpg'
import timeline1 from '@/public/images/timeline-1.jpg'
import timeline2 from '@/public/images/timeline-2.jpg'
import timeline3 from '@/public/images/timeline-3.jpg'
import timeline4 from '@/public/images/timeline-4.jpg'
import about2 from '@/public/images/About-2.jpg'
import Award1 from "@/public/images/Award-1.jpg"
import Award2 from "@/public/images/Award-2.jpg"
import Award3 from "@/public/images/Award-3.jpg"
import Award4 from "@/public/images/Award-4.jpg"
import Award5 from "@/public/images/Award-5.jpg"
import { useState } from 'react'
import Expertise from '../../Index/Expertise/page'
import Testimonial from '../../Index/Testimonial/page'
import ExpertiseSlider from '../../Index/ExpertiseSlider/page'
import partner1 from "@/public/images/partner1.svg"
import partner2 from "@/public/images/partner2.svg"
import partner3 from "@/public/images/partner3.svg"
import partner4 from "@/public/images/partner4.svg"
import partner5 from "@/public/images/partner5.svg"
import partner6 from "@/public/images/partner6.svg"
import NewsLetter from '../../Index/Newsletter/page'

const awardsData = [
  {
    year: "2025",
    title: "Best Residential Design",
    category: "Interior Design",
    image: Award1
  },
  {
    year: "2024",
    title: "Top Commercial Design",
    category: "Architecture",
    image: Award2
  },
  {
    year: "2023",
    title: "Sustainable Design Award",
    category: "Community Center",
    image: Award3
  },
  {
    year: "2022",
    title: "Creative Office Space Award",
    category: "Corporation Building",
    image: Award4
  },
  {
    year: "2020",
    title: "Emerging Designer of the Year",
    category: "Interior Design",
    image: Award5
  },

];


const historyData = [
  {
    image: timeline1,
    year: "2025",
    text: "Celebrates 15 years with a retrospective showcase of the company's most iconic projects and milestones."
  },
  {
    image: timeline2,
    year: "2020",
    text: "Wins a prestigious national design award for innovative mixed-use development in the city of New York."
  },
  {
    image: timeline3,
    year: "2018",
    text: "Participates in a national interior design expo, showcasing innovative concepts and trends in the industry."
  },
  {
    image: timeline4,
    year: "2010",
    text: "Open a second office in a neighboring city to meet growing demand and takes on more projects."
  },
  {
    image: about2,
    year: "1990",
    text: "The company is founded by a visionary designer with a focus on personalized and innovative design solutions."
  },
];

const Partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
];


const About = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number>(0)

  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText mt-15'>
          About Us
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            About Us
          </h2>
        </div>
      </div>

      {/* Contenido de la sección */}
      <div className='px-[8%] lg:px-[12%] py-20'>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className='w-full lg:w-2/3 pt-8'>
            <span className='rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold'>
              Started In 1989
            </span>

            <h1 className="CalSans pt-5 text-4xl md:text-5xl w-full lg:w-[80%] mb-5">
              We Shape <span className="text-prim">Interior Designs, Crafting</span> Timeless and Inspiring Spaces
            </h1>

            <div className='about-content md:pt-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className='about-text'>
                  <h2 className='text-[10rem] leading-40 GolosText font-bold text-prim '>
                    26
                  </h2>

                  <p className='text-2xl lg:px-15 CalSans'>
                    Years of Experience
                  </p>
                </div>

                <div className='about-img'>
                  <Image
                    src={About4}
                    alt="About4"
                    width={200}
                    height={200}
                    className='object-cover rounded-2xl h-full w-full'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/3'>
            <div className='about-img md:h-[600px]'>
              <Image
                src={About2}
                alt="About2"
                width={200}
                height={200}
                className='object-cover rounded-2xl h-full w-full'
              />
            </div>

            <div className='about-pere pt-10'>
              <p className='GolosText text-sm text-gray-500'>
                We believe thar every space has the power to inspire, and thar great design brings that inspiration to life. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those whor inhabit them
              </p>

              <button className='mt-9 border border-gray-500/50 font-semibold px-5 py-3 rounded-full hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300'>
                <Link href="/">
                  Learn More <i className='bi bi-arrow-right ps-1'></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className='video w-full pb-10'>
        <video
          src="/images/Video-bg.mp4"
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
        />
      </div>

      {/* Timeline */}
      <div className='px-[8%] lg:px-[12%] py-20 pb-0'>
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="About Olivion" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Our History <span className="text-prim">Is Full Of Interesting</span> Stages And Events.
            </h1>
          </div>
        </div>

        <div className='history-swiper py-15 pb-0'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            speed={200}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4
              },
              991: {
                slidesPerView: 2
              },
              575: {
                slidesPerView: 1
              },
              0: {
                slidesPerView: 1
              }
            }}
          >
            {
              historyData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='history-card'>
                    {/* Contenedor con dimensiones fijas y centrado flex */}
                    <div className="w-40 h-40 flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt="HistoryImage"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    <div className='history-content py-15'>
                      <h2 className='text-3xl CalSans font-bold mb-5'>
                        {item.year}
                      </h2>

                      <p className='GolosText text-sm text-gray-500'>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

      {/* Awards */}
      <div className='px-[8%] lg:px-[12%] py-20 pb-0'>
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="Award & Achievement" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-6xl mb-5">
              Design That <span className="text-prim">Speals Our Industry</span> Awards.
            </h1>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-10 relative py-15"
          onMouseMove={(e) => {
            if (hoveredIndex === null) setHoveredIndex(0)
          }}
          onMouseLeave={() => setHoveredIndex(0)}
        >
          <div className='w-full lg:w-1/3 relative overflow-hidden rounded-2xl'>
            <div className='relative h-[420px] w-full'>
              {awardsData.map((item, index) => (
                // Solo se muestra la imagen sobre la que hace hover en la lista de años
                <Image
                  key={index}
                  src={item.image}
                  alt="AwardImage"
                  width={500}
                  height={500}
                  className={`
                    absolute inset-0 h-full w-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>
          </div>

          {/* Lista de años */}
          <div className='w-full lg:w-2/3 '>
            {awardsData.map((item, index) => (
              <div
                key={index}
                onMouseMove={() => setHoveredIndex(index)}
                className='award-item-wrapper border-b border-gray-300 py-6 flex justify-between items-center cursor-pointer group'
              >
                <div className='flex items-center gap-5'>
                  <span className='GolosText text-gray-500 text-2xl'>
                    {item.year}
                  </span>

                  <h2 className='text-xl lg:text-2xl 2xl:text-3xl CalSans transition-all duration-300 group-hover:translate-x-[25%] group-hover:text-prim'>
                    {item.title}
                  </h2>
                </div>

                <p className='GolosText text-gray-500 hidden md:block'>
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className='bg-[#EEE]'>
        <Expertise />
        <ExpertiseSlider />
      </div>

      {/* Testimonials */}
      <div className='bg-[#EEE]'>
        <Testimonial />
      </div>

      {/* Partners */}
      <div className="px-[8%] lg:px-[12%] pt-20 pb-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 1500
          }}
          modules={[Autoplay]}
          breakpoints={{
            1200: {
              slidesPerView: 5
            },
            991: {
              slidesPerView: 4
            },
            575: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 2
            }
          }}
          className="partner-swiper"
        >
          {
            Partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={partner}
                  alt="partnerImage"
                  className="partner-img"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      {/* NewsLetter */}
      <NewsLetter />
    </>
  )
}

export default About