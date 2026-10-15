import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillsList = [
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Dynamic scripting language for building modern web applications.'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'A JavaScript library for building component-based user interfaces.'
    },
    { 
      name: 'Framer Motion', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
      description: 'Production-ready motion library for creating smooth React animations.'
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      description: 'Utility-first CSS framework for rapid and clean UI development.'
    },
    { 
      name: 'HTML5', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Standard markup language for structuring web pages.'
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: 'Styling language used for describing the presentation of web pages.'
    }
  ];

  return (
    <section id="skills" className="relative w-full bg-zinc-950 text-zinc-100 py-24 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 mb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full uppercase">
            Tech Stack Showcase
          </span>
          <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tight">
            My <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Core technologies and tools I use to build robust, scalable, and high-performance digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Interactive Cards Grid */}
      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-amber-500/50 shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              {/* Subtle hover gradient bloom inside card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group-hover:border-amber-500/30 transition-colors">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}