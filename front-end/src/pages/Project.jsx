import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Thumblify',
    subtitle: 'AI-Powered Thumbnail Generation Platform',
    description: 'A full-stack web application that recreates and generates high-quality thumbnails using AI. Users can upload an image or provide a URL, customize styles, and generate improved thumbnails instantly.',
    liveUrl: 'https://thumblify-rho-smoky.vercel.app/',
    codeUrl: 'https://github.com/Ahmad633440/Thumblify',
    image: 'thumblify.png', // Replace with your actual image path or import
    tags: ['NextJS', 'Tailwind', 'MongoDB', 'Hugging Face API', 'TypeScript'],
    featured: true,
  },
  {
    title: 'CryptoInsight',
    subtitle: 'Semantic Market Context & News Analytics',
    description: 'Analyzes real-time crypto news and matches it with similar past events using semantic search (embeddings). Instead of predicting the future, it provides historical context and actual price reactions to help users make informed decisions.',
    liveUrl: 'https://cryptoinsight-red.vercel.app/',
    codeUrl: 'https://github.com/Ahmad633440/cryptoinsight',
    image: 'cryptoinsight.png', // Replace with your actual image path or import
    tags: ['NextJS', 'MongoDB Atlas', 'TypeScript', 'Gemini API', 'CoinGecko API', 'NewsData API'],
    featured: true,
  },
]

const Project = () => {
  // Container animation configuration for staggered child entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100 px-6 py-28 md:px-10 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Premium Vercel/Linear Style Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10">
        
        {/* SaaS-Style Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-semibold tracking-wider text-violet-400 uppercase bg-violet-500/10 border border-violet-500/20 rounded-full mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Things I've Built
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl text-base md:text-lg font-normal leading-relaxed"
          >
            A curated selection of my latest development work, merging AI capability, clean engineering paradigms, and optimized front-end systems.
          </motion.p>
        </div>

        {/* Dynamic Project Grid Layout with Equal Card Heights */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60"
            >
              <div>
                {/* Top Section: Media Container with Gradient Mask */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    onError={(e) => {
                      // Fallback placeholder container style in case images are missing
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-900');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Contextual Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-violet-400 uppercase bg-slate-950/80 backdrop-blur-md border border-violet-500/30 rounded-md">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Middle Section: Typography and Metadata */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-medium text-violet-400/80 tracking-wide mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:text-slate-300 transition-colors duration-200">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Pills Container */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md transition-colors duration-300 group-hover:bg-violet-500/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Section: Explicit CTA Action Panel */}
              <div className="p-6 md:p-8 pt-0 mt-auto flex items-center gap-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 bg-violet-500 text-white hover:bg-violet-600 transition-colors duration-200 shadow-md shadow-violet-500/10"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 bg-slate-950 border border-slate-700 text-slate-300 hover:border-violet-500 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </motion.a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Project