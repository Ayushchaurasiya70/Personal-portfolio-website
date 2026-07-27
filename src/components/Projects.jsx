import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'BMW Website',
    category: 'Luxury Automotive',
    description:
      'A premium automotive website focused on delivering a powerful and immersive digital experience for luxury car enthusiasts.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    number: '02',
    title: 'AI Landing Page UI',
    category: 'AI / SaaS',
    description:
      'A modern AI-focused landing page UI designed with a clean interface, futuristic visuals, and a strong conversion-focused layout.',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
  },
  {
    number: '03',
    title: '3D Website',
    category: '3D Experience',
    description:
      'An upcoming immersive 3D web experience designed to push the boundaries of interactive websites and modern web design.',
    tags: ['React', 'Three.js', '3D'],
    comingSoon: true,
  },
  {
    number: '04',
    title: 'Gaming Website',
    category: 'Gaming',
    description:
      'A visually engaging gaming website built around bold visuals, immersive layouts, and an energetic digital experience.',
    tags: ['React', 'Tailwind CSS', 'Animations'],
  },
  {
    number: '05',
    title: 'Movie Website',
    category: 'Entertainment',
    description:
      'A cinematic movie platform concept designed to showcase movies with an engaging interface and smooth browsing experience.',
    tags: ['React', 'API', 'Tailwind CSS'],
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-zinc-100"
    >
      {/* Background Soft Ambient Yellow Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-yellow-400">
            My Work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Selected{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-zinc-400">
              A collection of digital experiences I've built, designed, and
              experimented with while exploring modern web development.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-lg transition-all duration-300 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Image Preview Container */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden border-b border-zinc-800/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
                <div className="absolute inset-0 bg-yellow-400/0 transition-all duration-500 group-hover:bg-yellow-400/5" />

                <span className="absolute left-6 top-6 text-sm font-bold text-yellow-400">
                  {project.number}
                </span>

                {project.comingSoon ? (
                  <div className="relative text-center">
                    <div className="mb-3 text-5xl font-black tracking-tighter text-zinc-700">
                      3D
                    </div>

                    <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <span className="text-7xl font-black tracking-tighter text-zinc-800 transition-all duration-500 group-hover:text-yellow-400/20">
                    {project.title.split(' ')[0]}
                  </span>
                )}

                {/* Arrow Icon Button */}
                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xl text-zinc-300 shadow-md transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-zinc-950">
                  ↗
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects