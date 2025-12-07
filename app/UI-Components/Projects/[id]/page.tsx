"use client"

import Link from "next/link";
import ProjectsData from '@/app/JsonData/Projects.json';
import { useParams } from "next/navigation";
import Image from "next/image";



const ProjectDetails = () => {

  const { id } = useParams();

  const project = ProjectsData.find((project) => project.id === id);
  if (!project) {
    return (
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-5xl md:text-6xl GolosText mt-15">
          Project not found
        </h1>

        <div className="flex items-center gap-5 mt-3">
          <Link
            href="/UI-Components/Projects"
            className="hover:text-prim text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white hover:text-prim"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Banner superior de la sección */}
      <div className='section-bg text-white flex flex-col'>
        <h1 className='text-6xl md:text-8xl GolosText nt-15'>
          Projects Details
        </h1>

        <div className='flex items-center text-xl mt-3'>
          <Link href='/' className='hover:text-prim transition-all duration-300'>
            Home
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <Link href='/UI-Components/Projects' className='hover:text-prim transition-all duration-300'>
            Projects
          </Link>

          <i className='ri-arrow-right-wide-fill mt-1' />

          <h2 className='GolosText'>
            {project.title}
          </h2>
        </div>
      </div>

      {/* Project Details */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <h2 className="CalSans text-5xl md:text-7xl">
          {project.title}
        </h2>

        <div className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Architect:
            </h2>

            <h3 className="GolosText text-xl">
              {project.architect}
            </h3>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Project Type:
            </h2>

            <h3 className="GolosText text-xl flex flex-wrap">
              {project.tags.map((tag, idx) => (
                <div key={idx} className="flex">
                  {tag}
                </div>
              ))}
            </h3>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Client:
            </h2>

            <h3 className="GolosText text-xl">
              {project.client}
            </h3>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Terms:
            </h2>

            <h3 className="GolosText text-xl">
              {project.terms}
            </h3>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Strategy:
            </h2>

            <h3 className="GolosText text-xl">
              {project.strategy}
            </h3>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">
              Date:
            </h2>

            <h3 className="GolosText text-xl">
              {project.date}
            </h3>
          </div>
        </div>

        <div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project info */}
        <div className="mt-10">
          <h2 className="CalSans text-5xl md:text-7xl">
            Design in Details
          </h2>

          <p className="GolosText text-gray-500 mt-5">
            {project.designDetails}
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
            {project.designDetailsList?.map((info) => (
              <div key={info.id} className="flex gap-2">
                <i className="bi bi-check-circle-fill text-prim"></i>
                <p className="GolosText text-gray-500">
                  <span className="font-bold text-black">{info.title}</span> {info.pere}
                </p>


              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails