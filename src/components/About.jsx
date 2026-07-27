import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-zinc-100"
    >
      {/* Background Soft Yellow Glows */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-yellow-400">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            I don't just build websites. I create digital experiences
            designed to make businesses stand out and leave a lasting impact.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Main Card / Bio */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-70 blur-xl" />

              <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
                <span className="text-6xl font-black text-yellow-400/20">
                  "
                </span>

                <h3 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Turning ideas into
                  <span className="text-yellow-400">
                    {' '}digital experiences.
                  </span>
                </h3>

                <p className="mt-6 leading-relaxed text-zinc-300">
                  I'm Ayush, a passionate developer focused on creating
                  modern and engaging digital experiences. I love combining
                  clean code, thoughtful design, and smooth animations to
                  build websites that don't just look good, but actually
                  deliver results.
                </p>

                <p className="mt-5 leading-relaxed text-zinc-300">
                  My goal is simple — help businesses build a powerful online
                  presence that people remember. Whether it's a personal brand,
                  startup, or growing business, I turn ideas into experiences
                  that connect with people.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-yellow-400 transition-all duration-300 hover:gap-4 hover:text-yellow-300"
                >
                  Let's work together
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-yellow-500/10"
            >
              <h3 className="text-4xl font-black text-yellow-400">
                01+
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                Years Learning & Building
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-yellow-500/10"
            >
              <h3 className="text-4xl font-black text-yellow-400">
                10+
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                Projects Built
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-yellow-500/10"
            >
              <h3 className="text-4xl font-black text-yellow-400">
                100%
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                Passion for Code
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-yellow-500/10"
            >
              <h3 className="text-4xl font-black text-yellow-400">
                ∞
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                Ideas to Build
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About