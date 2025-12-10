"use client"


import { TitleWithDot } from '@/lib/TitleWithDot'
import Image from 'next/image'
import faqBanner from '@/public/images/faq-banner.jpg'
import { useState } from 'react'

const faqData = [
  {
    id: "01",
    question: "¿Cuál es su proceso de diseño de interiores?",
    answer: "Nuestro proceso comienza con una consulta inicial para entender sus necesidades y visión, seguido de la conceptualización, desarrollo de diseño, selección de materiales y mobiliario, y finalmente la implementación y supervisión del proyecto."
  },
  {
    id: "02",
    question: "¿Ofrecen servicios de diseño para espacios comerciales?",
    answer: "Sí, ofrecemos servicios completos de diseño de interiores para una variedad de espacios comerciales, incluyendo oficinas, tiendas minoristas, restaurantes y hoteles, enfocándonos en la funcionalidad y la estética de la marca."
  },
  {
    id: "03",
    question: "¿Pueden trabajar con un presupuesto específico?",
    answer: "Absolutamente. Trabajamos estrechamente con nuestros clientes para establecer un presupuesto realista desde el principio y nos esforzamos por ofrecer soluciones de diseño excepcionales que se ajusten a sus límites financieros."
  },
  {
    id: "04",
    question: "¿Cuánto tiempo suele durar un proyecto de diseño?",
    answer: "La duración de un proyecto varía según su complejidad y escala. Después de la consulta inicial, le proporcionaremos un cronograma estimado detallado para su proyecto específico."
  },
  {
    id: "05",
    question: "¿Qué estilos de diseño manejan?",
    answer: "Tenemos experiencia en una amplia gama de estilos, desde moderno y minimalista hasta clásico y rústico. Nos adaptamos a las preferencias de nuestros clientes y creamos espacios que reflejan su personalidad y gusto."
  },
  {
    id: "06",
    question: "What interior design services do you offer?",
    answer: "We provide a wide range of interior design services including residential, commercial, and outdoor design."
  },
]

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-30'>
        <div className="flex flex-col lg:flex-row gap-10">
          <TitleWithDot text="Popular Queries" />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-5xl md:text-7xl mb-5">
              Quik and clear <span className="text-prim"> Answers To Your Key</span> services
            </h1>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 py-10'>
          <div className='w-full lg:w-1/1'>
            <div className='space-y-4 w-full'>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`
                      overflow-hidden py-2 transition-all duration-300 border-b border-gray-300
                      ${openIndex === index ? 'border-prim' : ''} 
                    `}
                >
                  <button
                    className='w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer'
                    onClick={() => toggle(index)}
                  >
                    <div className='faq-heading flex items-center gap-5'>
                      <h3 className='text-3xl font-semibold text-prim'>
                        {item.id}
                      </h3>

                      <span className='text-2xl md:text-3xl GolosText font-semibold text-gray-800'>
                        {item.question}
                      </span>
                    </div>

                    {openIndex === index ? (
                      <i className="bi bi-dash text-prim text-3xl transition-all duration-300" />
                    ) : (
                      <i className="bi bi-plus text-prim text-3xl transition-all duration-300" />
                    )}
                  </button>

                  <div
                    className={`
                        transition-all durartion-500 ease-in-out overflow-hidden
                        ${openIndex === index
                        ? 'max-h-[300px] opacity-100 py-3'
                        : 'max-h-0 opacity-0 py-0'
                      } 
                      `}
                  >
                    <p className='GolosText px-7'>
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='w-full lg:w-1/3 pt-5'>
            <div className='faq-card flex flex-col md:flex-row lg:flex-col items-center  gap-6'>
              <Image
                src={faqBanner}
                alt="faqBanner"
                className='rounded-2xl mb-5'
              />

              <div className='flex flex-col'>
                <h2 className='capitalize text-3xl CalSans mb-5'>
                  Still looking for answers or need more information?
                </h2>

                <p className='GolosText text-gray-400 text-lg'>
                  Our team will guide you througb our design process, project specifications and cost estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq;
