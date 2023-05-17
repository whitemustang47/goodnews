function ContactForm() {
  return (
    <div className="w-full min-h-[60vh] py-20 flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-bold">
        <h2>Get in touch</h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10 ">
        <form className="w-full py-10 px-10 md:px-0 md:w-2/5 flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="johndoe@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="w-auto btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
