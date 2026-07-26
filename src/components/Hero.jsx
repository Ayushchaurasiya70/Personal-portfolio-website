import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-6 pt-32 text-white"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-[150px]" />

      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">

        <div className="z-10 w-full lg:w-1/2">

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-purple-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: 'easeOut',
            }}
            className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Ayush<span className="text-purple-500">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut',
            }}
            className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white/90 sm:text-4xl lg:text-5xl"
          >
            Taking Your Business

            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Digital Experience
            </span>

            To The Next Level.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut',
            }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/50"
          >
            I build modern, high-performance digital experiences that help
            businesses stand out, connect with their audience, and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut',
            }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="group rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.35)] transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-[0_0_45px_rgba(147,51,234,0.6)]"
            >
              Contact Me
              <span className="ml-2 transition-all duration-300 group-hover:ml-3">
                →
              </span>
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-white/10 px-7 py-4 font-semibold text-white/70 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
            >
              View My Work
            </a>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: 'easeOut',
          }}
          className="relative hidden w-1/2 items-center justify-center lg:flex"
        >

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-[450px] w-[450px] rounded-full bg-purple-600 blur-[120px]"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative z-10 h-[550px] w-[550px]"
          >
            <img
              src={heroImage}
              alt="Ayush - Developer"
              className="h-full w-full object-contain"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero