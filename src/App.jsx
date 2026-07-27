import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

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