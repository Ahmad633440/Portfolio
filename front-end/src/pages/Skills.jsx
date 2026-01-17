import React, { useState } from 'react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: 'HTML5' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: 'CSS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: 'JS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: 'TailwindCSS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: 'ReactJS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: 'NodeJS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: 'ExpressJS' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: 'MongoDB' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: 'Github' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: 'MySQL' },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", name: 'C++' },
  ]

  return (
    <div className="flex flex-col items-center px-6 py-20 min-h-screen">
      
      <h2 className="text-4xl font-semibold pb-3 p-3 border-b-4 rounded-b-xl shadow-[0_8px_16px_-6px_rgba(255,255,255,)]
      dark:text-white dark:border-white/50 dark:bg-neutral-950/30
      text-neutral-900 border-emerald-400/50 bg-emerald-50">
        Skills
      </h2>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-27.5"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-20 w-20 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />

            <p
              className={`text-sm mt-3 font-medium transition-opacity duration-200 dark:text-gray-300 text-emerald-900 ${
                hoveredSkill === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills
