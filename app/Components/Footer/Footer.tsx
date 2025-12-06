import Link from "next/link"




export const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 mb-0 footer relative">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
          <div className="footer-content">
            {/* Logo */}
            <Link href="/" className="text-3xl lg:text-5xl font-bold Audiowide text-white">
              Oli<span className="text-prim">vion</span>
            </Link>

            <h2 className="text-gray-300 text-lg my-5 GolosText">
              We transform your vision into beautifully crafted spaces.
            </h2>

            <p className="text-gray-300 GolosText">
              5609 E Sprague Ave, Spokane Valley, WA 99212, USA.
            </p>
          </div>

          <div className="footer-content py-3">
            <ul className="footer-link flex flex-col">
              <Link
                href="/UI-Components/Pages/About"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                About Us
              </Link>
              <Link
                href="/UI-Components/Pages/Services"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Services
              </Link>
              <Link
                href="/UI-Components/Pages/Gallery"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Gallery
              </Link>
              <Link
                href="/UI-Components/Pages/Teams"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Our Team
              </Link>
              <Link
                href="/UI-Components/Pages/Blogs"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Blog
              </Link>
              <Link
                href="/UI-Components/Pages/Contact"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
