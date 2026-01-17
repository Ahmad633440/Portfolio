import React from 'react'

const Project = () => {
  
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-6'>
      <h2 className="text-4xl font-semibold pb-3 p-3 border-b-4 rounded-b-xl shadow-[0_8px_16px_-6px_rgba(255,255,255,)]
      dark:text-white dark:border-white/50 dark:bg-neutral-950/30
      text-neutral-900 border-emerald-400/50 bg-emerald-50">
        Projects
      </h2>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
        <div className='p-8 border-2 rounded-2xl transition-all hover:shadow-lg
        dark:border-emerald-400/50 dark:bg-neutral-900/50
        border-emerald-400/30 bg-emerald-50/30'>
          <h3 className='text-2xl font-semibold mb-4
          dark:text-white text-neutral-900'>ChatApp</h3>
          <p className='text-md mb-4
          dark:text-gray-300 text-gray-700'>A real-time chat application using WebSocket, Node.js and React</p>
          <div className='flex gap-3'>
            <button className='px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition'>View Project</button>
            <button className='px-4 py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500/10 transition'>Code</button>
          </div>
        </div>

<div className='p-8 border-2 rounded-2xl transition-all hover:shadow-lg
        dark:border-emerald-400/50 dark:bg-neutral-900/50
        border-emerald-400/30 bg-emerald-50/30'>
          <h3 className='text-2xl font-semibold mb-4
          dark:text-white text-neutral-900'>E-Commerce</h3>
          <p className='text-md mb-4
          dark:text-gray-300 text-gray-700'>A full-stack e-commerce platform that allows users to explore, add to cart, and purchase fashion items online.</p>
          <div className='flex gap-3'>
            <button className='px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition'>View Project</button>
            <button className='px-4 py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500/10 transition'>Code</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Project