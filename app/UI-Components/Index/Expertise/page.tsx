"use client"

import Image from "next/image"
import expertise1 from "../../../../public/images/expertise1.jpg"
import expertise2 from "../../../../public/images/expertise2.jpg"
import expertise3 from "../../../../public/images/expertise3.jpg"
import expertise4 from "../../../../public/images/expertise4.jpg"
import { TitleWithDot } from "@/lib/TitleWithDot"

const ExpertiseData = [
  {
    id: "1",
    title: "Renovation and remodeling",
    desc: "We transform spaces into masterpieces with our expertise in renovation and remodeling.",
    image: expertise1,
  },
  {
    id: "02",
    title: "Custom design consultation",
    desc: "We provide personalized design consultations to help you create a unique and personalized space that reflects your style and preferences.",
    image: expertise2,
  },
  {
    id: "03",
    title: "Space planning and layout",
    desc: "We create functional and efficient layouts that optimize space and enhance the overall experience of your environment.",
    image: expertise3,
  },
  {
    id: "04",
    title: "3d design visualization",
    desc: "We create detailed 3D visualizations to help you visualize your design ideas and make informed decisions.",
    image: expertise4,
  },
]


const Expertise = () => {
  return (
    <>
      <div className="expertise bg-[#241c18]">
        <div className="px-[8%] lg:px-[12%] md:py-50 pt-10 pb-20 overflow-x-hidden">

          <div className="flex flex-col gap-10">
            <TitleWithDot
              text="Our Expertise"
              textColor="text-white"
              addTitleClass={false}
            />

            <div className="w-full lg:w-2/3">
              <h1 className="CalSans text-5xl text-white md:text-7xl mb-5">
                Curating the perfect <span className="text-prim">Pieces to complete</span> your space
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {ExpertiseData.map((item, idx) => (
              <div
                key={idx}
                className="expertise-card"
                style={{ marginTop: `${idx * 40}px` }}
              >
                <div className="expertise-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full rounded-2xl"
                  />
                </div>

                <div className="expertise-info my-5">
                  <h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">
                    {item.title}
                  </h1>

                  <p className="text-gray-400 mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Expertise;
