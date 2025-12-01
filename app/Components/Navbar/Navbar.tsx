"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
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
    <div className={`
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
                  <Link href={link.href} className="flex menu-links text-xl items-center gap-1 hover:text-prim transition-all duration-300">
                    {link.label} <i className="ri-arrow-down-s-line"></i>

                    <div className="absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl border border-gray-50/10 rounded-lg z-500 min-w-[180px]">

                    </div>
                  </Link>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="block px-4 py-2 text-md rounded-md hover:text-prim transition-all duration-300">
                  <i className="bi bi-gear text-xs"></i>{link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
