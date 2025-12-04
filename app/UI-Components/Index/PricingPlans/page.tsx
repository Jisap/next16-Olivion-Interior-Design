import { TitleWithDot } from '@/lib/TitleWithDot'
import React from 'react'

const PricingPlans = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15 mt-0 md:mt-[10%]'>
        <div className='flex flex-col lg:flex-row gap-10'>
          <TitleWithDot
            text="Our Pricing Plans"
            addTitleClass={true}
          />

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-5xl md:text-6xl mb-5 w-full lg:w-[60%]">
              Design your <span className="text-prim"> Space Now </span> services
            </h1>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 h-full mt-10'>
          <div className='w-full lg:w-1/2'>
            <div className="pricing-wrap h-full rounded-2xl p-5 pt-20">
              <h1 className="CalSans text-4xl md:text-5xl text-white mb-5 w-full">
                Your Dreams <span className="text-prim"> Our mission, let's </span> make it happen.
              </h1>
            </div>
          </div>

          <div className='w-full lg:w-1/1'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlans