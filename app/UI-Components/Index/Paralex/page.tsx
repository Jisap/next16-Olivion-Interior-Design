"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const paralexData = [
  {
    id: 1,
    tag: "Residential",
    number: "01",
    title: (
      <>
        Industrial <br /> elegance combo
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/images/Paralex1.jpg"
  },
  {
    id: 2,
    tag: "Residential",
    number: "02",
    title: (
      <>
        Serene <br /> Space Studio
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/images/Paralex2.jpg"
  },
  {
    id: 3,
    tag: "Residential",
    number: "03",
    title: (
      <>
        Urban Zen <br /> Apartment
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/images/Paralex3.jpg"
  },
]

const Paralex = () => {
  return (
    <div className="mt-20 pb-30">
      {paralexData.map((item) => (
        <ParalexSection item={item} key={item.id} />
      ))}
    </div>
  )
}

function ParalexSection({ item }: { item: any }) {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] // El progreso de la sección empieza desde el inicio y termina cuando llega al comienzo de la siguiente sección
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);      // Conforme se hace scroll la imagen se reduce
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]); // Conforme se hace scroll la imagen se mueve hacia abajo 

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${item.bg})`,
        scale,
        y: translateY,
        zIndex: item.id * 1
      }}
      className="paralex-wrap sticky top-0 left-0 h-full"
    >
      <div className="paralex-content flex flex-col justify-between px-[8%] py-20">
        <div className="flex justify-between items-center gap-5">
          <span className="text-white GolosText border border-gray-300 px-4 p-1 rounded-full uppercase font-bold">
            {item.tag}
          </span>

          <h1 className="GolosText text-6xl font-bold text-prim">
            {item.number}
          </h1>
        </div>

        <div className="text-gray-300 GolosText">
          <h1 className="CalSans text-6xl md:text-8xl">
            {item.title}
          </h1>

          <p className="mt-3 text-2xl">
            {item.location} <br /> {item.year}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Paralex;
