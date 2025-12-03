import Image from "next/image"
import Hero from "./Hero/page"
import { About } from "./About/page"
import { Paralex } from "./Paralex/page"


Image

export const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Paralex />
    </>


  )
}
