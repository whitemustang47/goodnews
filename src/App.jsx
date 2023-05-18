import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
