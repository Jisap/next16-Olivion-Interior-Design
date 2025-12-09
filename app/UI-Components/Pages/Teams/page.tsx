"use client"

import Link from "next/link"
import TeamsData from "@/app/JsonData/Teams.json"
import { TitleWithDot } from "@/lib/TitleWithDot"
import Image from "next/image"

const Teams = () => {
  return (
    <>
      {/* Banner superior de la sección */}
      <div className='teams-bg text-white flex flex-col'>
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
    </>
  )
}

export default Teams