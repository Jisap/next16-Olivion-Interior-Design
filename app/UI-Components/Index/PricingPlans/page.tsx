"use client"

import { TitleWithDot } from '@/lib/TitleWithDot'

const PricingPlansData = [
  {
    id: "1",
    plan: "Basic Plan",
    desc: "Our Foundation plan offers essential features at an affordable price, perfect for those just starting their journey.",
    price: "$99.0",
    planInfo: [
      "Individuals & small projects",
      "Access to design features",
      "Limited library of decoration items",
      "Email support",
      "Monthly updates"
    ]
  },
  {
    id: "2",
    plan: "Premium Plan",
    desc: "Our Premium plan unlocks tools and broader, ideal for growing teams ready to take their projects to the next level.",
    price: "$169.0",
    planInfo: [
      "Small teams & growing bussinesses",
      "Full access to design features",
      "Extended library of decoration items",
      "Priority email support",
      "Bi-weekly updates"
    ]
  },

]


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
              {PricingPlansData.map((plan, index) => (
                <div key={index} className='pricing-card bg-white shadow p-5 rounded-2xl'>
                  <h2 className="GolosText font-semibold text-3xl mb-5">
                    {plan.plan}
                  </h2>

                  <p className="text-gray-500 text-[15px] lg:text-[20px]">
                    {plan.desc}
                  </p>

                  <h1 className="text-6xl lg:text-7xl mt-5 text-prim CalSans flex border-b border-gray-300 pb-3">
                    {plan.price} <span className='text-xl text-gray-600'>/ Per Month</span>
                  </h1>

                  <div className='flex flex-col gap-2 mt-5'>
                    {plan.planInfo.map((info, index) => (
                      <p key={index} className="text-gray-800 font-semibold text-[15px] GolosText">
                        <i className='bi bi-check-circle-fill text-prim'></i>  {info}
                      </p>
                    ))}
                  </div>

                  <button className='mt-4 border border-gray-300 GolosText rounded-full px-4 py-2 hover:bg-prim hover:text-white hover:border-transparent transition-all duration-300'>
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlans;

