
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Nav from './components/nav'

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App