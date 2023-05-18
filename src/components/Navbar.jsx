import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="h-16 w-full px-10 fixed bg-white z-20 flex flex-row justify-between items-center">
      <div className="text-4xl font-bold tracking-tighter">
        <h1>GoodNews</h1>
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="flex flex-col gap-1 md:hidden"
      >
        <div className="w-7 border border-gray-600"></div>
        <div className="w-7 border border-gray-600"></div>
        <div className="w-7 border border-gray-600"></div>
      </button>
      <div
        className={
          `fixed top-16 left-0 right-0 md:top-auto md:left-auto md:right-16 w-full md:w-auto bg-white shadow-md md:shadow-none rounded md:translate-y-auto text-gray-600 py-10 md:py-0 flex flex-col md:flex-row justify-center items-center gap-10 text-2xl transition duration-300 ease-in-out` +
          (isOpen
            ? " translate-y-0 "
            : " -translate-y-[150%] md:transform-none")
        }
      >
        <a href="/" className="hover:text-black">
          Home
        </a>
        <a href="/services" className="hover:text-black">
          Services
        </a>
        <a href="/about" className="hover:text-black">
          About
        </a>
        <a href="/contact" className="hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
