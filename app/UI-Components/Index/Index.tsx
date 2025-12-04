import Image from "next/image"
import Hero from "./Hero/page"
import { About } from "./About/page"
import { Paralex } from "./Paralex/page"
import { Services } from "./Services/page"
import { Expertise } from "./Expertise/page"
import { ExpertiseSlider } from "./ExpertiseSlider/page"
import PricingPlans from "./PricingPlans/page"

Image

export const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Paralex />
      <Services />
      <Expertise />
      <ExpertiseSlider />
      <PricingPlans />
    </>


  )
}
