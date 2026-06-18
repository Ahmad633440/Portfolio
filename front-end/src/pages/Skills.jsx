import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: 'HTML5' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: 'CSS3' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: 'JavaScript' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: 'TailwindCSS' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: 'ReactJS' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", name: 'NodeJS' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: 'ExpressJS', invertDark: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: 'MongoDB' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: 'GitHub', invertDark: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: 'MySQL' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", name: 'C++' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: 'TypeScript' },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", name: 'Salesforce' },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100 px-6 py-28 md:px-10 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-semibold tracking-wider text-violet-400 uppercase bg-violet-500/10 border border-violet-500/20 rounded-full mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Technical Toolbelt
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md text-base leading-relaxed"
          >
            A collection of technologies, frameworks, and tools I use to turn structural ideas into production-ready web platforms.
          </motion.p>
        </div>

        {/* Premium Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center p-6 h-36 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60 hover:-translate-y-1"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative w-12 h-12 flex items-center justify-center mb-4">
                <img
                  src={skill.src}
                  alt={`${skill.name} Icon`}
                  className={`w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 ${
                    skill.invertDark ? 'dark:invert dark:group-hover:invert-0' : ''
                  }`}
                />
              </div>

              <span className="text-sm font-medium text-slate-400 group-hover:text-white tracking-wide text-center transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills