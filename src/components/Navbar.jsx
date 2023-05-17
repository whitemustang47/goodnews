function Navbar() {
  return (
    <nav className="h-16 w-full px-10 fixed bg-white z-20 flex flex-row justify-between items-center">
      <div className="text-4xl font-bold tracking-tighter">
        <h1>GoodNews</h1>
      </div>
      <div className="text-gray-600 flex flex-row justify-center items-center gap-10">
        <a href="/" className="hover:text-black">
          Home
        </a>
        <a href="/services" className="hover:text-black">
          Services
        </a>
        <a to="/" className="hover:text-black">
          About
        </a>
        <a to="/" className="hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
