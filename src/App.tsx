import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
