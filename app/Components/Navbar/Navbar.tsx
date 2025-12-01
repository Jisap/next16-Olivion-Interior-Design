"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/UI-Components/Pages/Services" },
  {
    label: "Projects",
    href: "/UI-Components/Projects",
    dropdown: [
      { label: "Projects", href: "/UI-Components/Projects" },
      { label: "Project Details", href: "/UI-Components/Projects/2" },
    ]
  },
  {
    label: "Blog",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/2" },
    ]
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/about" },
      { label: "Team", href: "/UI-Components/Pages/Teams" },
      { label: "Gallery", href: "/UI-Components/Pages/Gallery" },
      { label: "Contact", href: "/UI-Components/Pages/Contact" },
      { label: "Page 404", href: "/UI-Components/Pages/Page404" },
    ]
  },
  { label: "Contac Us", href: "/UI-Components/Pages/Contact" },


]

export const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  const togleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? { ...prev, [label]: false } : { ...prev, [label]: true }))
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`
      w-full transition-all bg-white duration-500 fixed top-0 left-0 z-100
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
    `}>
      <div className="flex items-center justify-between px-[8%] lf:px-[12%] py-5">
        <div className="flex items-center gap-5">
          {/* Logo */}
          <Link href="/" className="text-5xl font-bold Audiowide text-black">
            Oli<span className="text-prim">vion</span>
          </Link>

          {/* Destop Nav */}
          <div className="hidden lg:flex space-x-6 menu-link relative ms-10">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group z-50">
                  <Link
                    href={link.href}
                    className="flex menu-links text-xl items-center gap-1 hover:text-prim transition-all duration-300"
                  >
                    {link.label} <i className="ri-arrow-down-s-line"></i>

                    <div className="absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl border border-gray-50/10 rounded-lg z-500 min-w-[180px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-md rounded-md hover:text-prim transition-all duration-300"
                        >
                          <i className="bi bi-gear text-xs"></i> {item.label}
                        </Link>
                      ))}
                    </div>
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xl hover:text-prim transition-all duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-1">
            <i className="bi bi-telephone-inbound text-2xl px-3 py-2 rounded-full"></i>

            <div className="flex flex-col items-start">
              <p>Call Us Now</p>
              <h3 className="text-prim GolosText">+91 (123) 4567890</h3>
            </div>
          </button>

          <Link href="/UI-Components/Pages/Contact">
            <button className="">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
