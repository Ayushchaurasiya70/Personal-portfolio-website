
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Nav from './components/nav'
import Prices from './components/Prices'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Prices />
      <Skills />
      <Contact />
    </div>
  )
}

export default App