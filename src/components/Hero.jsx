import React from 'react'
import { motion } from 'framer-motion'
import Wave from './Wave'

const Hero = () => {
  return (
    <section
      id="home"
     
      className="relative h-[100vh] top-[75px] w-full overflow-hidden bg-black px-6 pt-16 text-white flex items-center justify-center"
    >
    
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
        <Wave 
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          linesGradient={["#F43F5E", "#FB923C", "#FBBF24"]}
        />
      </div>

      {/* 🎯 MAIN HERO CONTENT CONTAINER */}
      <div className="mx-auto flex max-w-4xl flex-col justify-center items-center text-center relative z-10 w-full pointer-events-none">

        <div className="w-full pointer-events-auto flex flex-col items-center">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-amber-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Ayush<span className="text-amber-500">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white/90 sm:text-4xl lg:text-5xl"
          >
            Taking Your Business{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Digital Experience
            </span>{" "}
            To The Next Level.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/60"
          >
            I build modern, high-performance digital experiences that help
            businesses stand out, connect with their audience, and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-6 flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="#contact"
              className="group rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300 hover:scale-105 hover:bg-orange-400 hover:shadow-[0_0_45px_rgba(249,115,22,0.6)]"
            >
              Contact Me
              <span className="ml-2 transition-all duration-300 group-hover:ml-3">
                →
              </span>
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-white/10 px-7 py-4 font-semibold text-white/70 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-white"
            >
              View My Work
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Hero