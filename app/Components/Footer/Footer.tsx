import Link from "next/link"
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"




const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 pb-0 footer relative">
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
                href="/UI-Components/Blogs"
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

          <div className="footer-content py-3">
            <ul className="footer-link flex flex-col">
              <Link
                href="/UI-Components/Projects"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Our Projects
              </Link>
              <Link
                href="/"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Partners
              </Link>
              <Link
                href="/"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Partners Program
              </Link>
              <Link
                href="/"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Affiliate Program
              </Link>
              <Link
                href="/"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/UI-Components/Pages/Contact"
                className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-prim hover:ml-2"
              >
                Support Center
              </Link>
            </ul>
          </div>

          <div className="footer-content py-3 flex flex-col">
            <h2 className="text-sm lg:text-xl 3xl:text-2xl text-prim underline CalSans mb-3">
              (509) 222-2222
            </h2>

            <h4 className="text-sm lg:text-xl 3xl:text-2xl text-gray-300 underline GolosText mb-3">
              support@olivioninterior.com
            </h4>

            <div className="footer-social flex gap-3 py-6 cursor-pointer">
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-prim font-semibold hover:-translate-y-1 size-4">
                <FaFacebookF />
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-prim font-semibold hover:-translate-y-1 size-4">
                <BsInstagram />
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-prim font-semibold hover:-translate-y-1 size-4">
                <BsTwitter />
              </p>
              <p className="text-gray-300 GolosText transition-all duration-300 hover:text-prim font-semibold hover:-translate-y-1 size-4">
                <BsYoutube />
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex flex-col justify-center items-center py-8 border-t border-gray-500">
          <p className="text-gray-300 text-lg GolosText">
            © 2025 Olivion Interior. All rights reserved.
          </p>

          <Link
            href="/https://www.privacypolicyonline.com/"
            className="transition-all duration-300 text-white text-sm  text-center hover:text-prim"
          >
            Privacy Policy | Terms & Conditions
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer;
