"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

const Clientlayout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const hideLayout = pathname === "/UI-Components/Pages/Page404";

  return (
    <>
      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && <Footer />}
    </>
  )
}

export default Clientlayout