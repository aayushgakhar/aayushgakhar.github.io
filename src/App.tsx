import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar/> */}
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
