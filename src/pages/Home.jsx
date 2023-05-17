import ContactForm from "../components/ContactForm"
import Landing from "../components/Landing"
import WhatWeOffer from "../components/WhatWeOffer"
import WordsFromTheFounder from "../components/WordsFromTheFounder"

function Home() {
  return (
    <div>
      <Landing />
      <WhatWeOffer />
      <WordsFromTheFounder />
      <ContactForm />
    </div>
  )
}

export default Home
