import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'HTML',
    level: 'Advanced',
  },
  {
    name: 'CSS',
    level: 'Advanced',
  },
  {
    name: 'JavaScript',
    level: 'Intermediate',
  },
  {
    name: 'React',
    level: 'Intermediate',
  },
  {
    name: 'Tailwind CSS',
    level: 'Intermediate',
  },
  {
    name: 'Framer Motion',
    level: 'Intermediate',
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-purple-400">
            My Expertise
          </p>

          <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            My <span className="text-purple-500">Skills.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/40">
            Technologies and tools I use to create modern, interactive, and
            high-performance digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-2xl font-black text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
                  {skill.name.charAt(0)}
                </div>

                <h3 className="font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                  {skill.level}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills