"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Clientlayout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const hideLayout = pathname === "/UI-Components/Pages/Page404";

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="relative w-full max-w-screen overflow-clip z-10">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  )
}

export default Clientlayout