import React from 'react'

const Nav = () => {
  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-tight text-white"
        >
          Ayush<span className="text-purple-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-white/70 transition-all duration-300 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-white/70 transition-all duration-300 hover:text-purple-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-white/70 transition-all duration-300 hover:text-purple-400"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-white/70 transition-all duration-300 hover:text-purple-400"
          >
            Skills
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >
          Let's Talk →
        </a>

      </div>
    </nav>
  )
}

export default Nav