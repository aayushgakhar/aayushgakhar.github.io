import { About } from './sections/About'
import { Achievements } from './sections/Achievements'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { GitHubActivity } from './sections/GitHubActivity'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App