import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Mr. Pizza & Momos',
    category: 'FOOD / E-COMMERCE',
    description:
      'A fast-food restaurant web app featuring an interactive digital menu, category filters, cart functionality, and direct WhatsApp order booking UI.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    liveUrl: 'https://mr-pizza-and-momose-website.vercel.app/', // Replace with your link
    githubUrl: 'https://github.com/ayushchaurasiya70', // Replace with your repo
    status: 'Live'
  },
  {
    id: '02',
    title: 'Immersive Gaming Website',
    category: 'GAMING / INTERACTIVE',
    description:
      'High-octane gaming website inspired by modern web layouts, re-architected with custom UI components, smooth scroll animations, and dynamic media galleries.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Custom UI'],
    liveUrl: 'https://your-gaming-site.vercel.app',
    githubUrl: 'https://github.com/ayushchaurasiya70',
    status: 'Live'
  },
  {
    id: '03',
    title: 'EveryGO - Super App',
    category: 'E-COMMERCE / TAXI / FOOD',
    description:
      'All-in-one ecosystem integrating food delivery, e-commerce, and cab booking under one high-speed platform with real-time tracking architecture.',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Coming Soon'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Coming Soon'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0c] text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Yellow Glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-yellow-400 font-semibold tracking-widest text-xs uppercase mb-1 block">
              // Portfolio Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Selected <span className="text-yellow-400">Projects.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-zinc-400 max-w-md text-sm leading-relaxed"
          >
            A curated collection of digital experiences I built using modern web technologies.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isComingSoon = project.status === 'Coming Soon';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#121216] border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Top Banner / Card Header */}
                <div className="relative h-44 bg-zinc-900/60 flex items-center justify-center border-b border-zinc-800/80 p-4">
                  <span className="absolute top-4 left-4 text-yellow-400 font-mono font-bold text-base">
                    {project.id}
                  </span>
                  
                  <span className={`absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isComingSoon 
                      ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {project.status}
                  </span>

                  <h4 className="text-2xl font-black text-zinc-700 tracking-wider uppercase select-none group-hover:text-yellow-500/20 transition-colors duration-300">
                    {project.title.split(' ')[0]}
                  </h4>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-yellow-500 text-[11px] font-semibold tracking-wider uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-zinc-900 text-zinc-300 px-2.5 py-0.5 rounded border border-zinc-800 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                    {!isComingSoon ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1"
                        >
                          Live Preview <span>↗</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white"
                        >
                          GitHub Code
                        </a>
                      </>
                    ) : (
                      <span className="text-zinc-500 italic font-mono text-[11px]">
                        In Development...
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}