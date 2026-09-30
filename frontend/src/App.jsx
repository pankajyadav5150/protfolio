import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import Footer from "./components/Footer/Footer"
import Galaxy from "./components/Effects/Galaxy"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop />
      <Galaxy
        starSpeed={0.5}
        density={1}
        speed={1}
        glowIntensity={0.3}
        mouseRepulsion
        repulsionStrength={2}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        transparent
      />
      <Navbar />
      <Mainroutes />
      <Footer />
    </>
  )
}

export default App
