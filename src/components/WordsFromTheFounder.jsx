import founderImage from "/assets/WordsFromTheFounder/founder.jpg"

function WordsFromTheFounder() {
  return (
    <div className="min-h-[50vh] w-full py-20 bg-gray-200 flex flex-col justify-center items-center gap-10">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <img src={founderImage} className="w-40 rounded-full" />
        <p className="text-3xl">John Doe</p>
        <p>CEO</p>
      </div>
      <div className="w-3/5">
        <p className="italic text-center">
          "At our company, we believe that innovation and customer satisfaction
          are the keys to success. We are constantly pushing the boundaries of
          what is possible to create cutting-edge products and services that
          exceed our customers' expectations. Our team is made up of passionate
          individuals who are dedicated to making a positive impact in the
          world. We are committed to building strong relationships with our
          customers and delivering exceptional value in everything we do."
        </p>
      </div>
    </div>
  )
}

export default WordsFromTheFounder
