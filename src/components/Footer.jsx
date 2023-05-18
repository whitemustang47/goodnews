function Footer() {
  return (
    <footer className="footer bg-gray-200">
      <div className="w-full p-10 flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div className="w-full md:w-72 flex flex-col gap-4">
          <h6 className="text-2xl font-bold md:text-center">Social Media</h6>
          <div>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="w-full md:w-72 flex flex-col gap-4">
          <h6 className="text-2xl font-bold md:text-center">Find us</h6>
          <p className="tracking-wide">
            Good News Printers<br></br>
            1234 Elm Street,<br></br>
            Anytown,<br></br>
            USA<br></br>
            +91 32847238472
          </p>
        </div>
      </div>
      <div className="w-full p-2 flex justify-center text-sm text-center">
        <p>
          Copyright &copy; 2023 | GoodNews Printing | All rights reserved |
          Designed by Steave
        </p>
      </div>
    </footer>
  )
}

export default Footer
