import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
