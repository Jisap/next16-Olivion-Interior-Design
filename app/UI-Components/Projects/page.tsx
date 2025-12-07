"use client"

import Link from 'next/link'
import ProjectsData from '@/app/JsonData/Projects.json'
import { NewsLetter } from '../Index/Newsletter/page'

const Projects = () => {
  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-8xl GolosText pt-10'>
          Projects
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            Projects
          </h2>
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className='px-[8%] lg:px-[12%] pt-30 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            ProjectsData.map((project, index) => (
              <div key={index}>
                <div className='project-card group'>
                  <Link href={`/UI-Components/Projects/${project.id}`}>
                    <div className='project-image relative w-full h-[550px] overflow-hidden rounded-2xl cursor-pointer'>
                      {/* Imagen de fondo de cada tarjeta */}
                      <div
                        className='project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-300 bg-center'
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>

                      {/* Tags de cada tarjeta */}
                      <div className='absolute top-5 left-5 flex gap-2 z-50'>
                        {project.tags.map((tag, idx) => (
                          <div key={idx} className='bg-white/20 backdrop-blur-sm text-white border border-gray-300 px-4 py-1 rounded-full hover:bg-prim hover:border-transparent transition-all duration-300'>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>

                  {/* Información de la tarjeta */}
                  <div className='project-info my-5'>
                    <Link href={`/UI-Components/Projects/${project.id}`}>
                      <h2 className='GolosText font-semibold text-4xl hover:tex-prim transition-all duration-300'>
                        {project.title}
                      </h2>
                    </Link>

                    <h5 className='GolosText text-2xl mt-2'>
                      {project.location}
                    </h5>

                    <p className='GolosText text-md text-gray-700 mt-2'>
                      {project.date}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>

      <NewsLetter />
    </>
  )
}

export default Projects