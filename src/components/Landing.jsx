function Landing() {
  return (
    <div className="relative min-h-[80vh] w-full bg-[url('/assets/Landing/landing_bg.jpg')] bg-no-repeat bg-center bg-cover filter grid grid-cols-7 grid-rows-5">
      <div className="absolute h-full w-full bg-black opacity-50"></div>
      <div className="z-10 col-start-2 col-end-5 row-start-3 row-end-3 text-white text-5xl font-bold tracking-wide">
        <p className="text-gray-200">
          Your future is decided by what you do today not tommorow !
        </p>
      </div>
    </div>
  )
}

export default Landing
