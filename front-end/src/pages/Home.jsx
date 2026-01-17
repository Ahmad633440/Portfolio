 import { motion } from "framer-motion"; 
 

const Home = () => {

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 text-center">
      <motion.h2 className="text-7xl font-semibold tracking-tight dark:text-white text-neutral-900"
      initial={{ opacity: 0, y: -20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8 }}>
        Ahmad Nazir
      </motion.h2>

  <motion.p
  className="text-xl font-medium overflow-hidden whitespace-nowrap"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 4, ease: "linear" }}
>
  BSCS, Final Year · University of the Punjab
</motion.p>

      <div className="mt-6 flex gap-7">
        <a href="/Ahmad_Nazir_Resume.pdf" download
        className="p-3 rounded-xl font-medium transition-all duration-300
        dark:text-black dark:bg-emerald-400/90 dark:hover:bg-emerald-400 dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]
        text-white bg-emerald-500 hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]"
        >
          Download Resume
          </a>
        

<button
onClick={() => document.getElementById("contact")?.scrollIntoView({
  behavior: "smooth"
})}
className=" px-5 py-2.5 rounded-lg border border-emerald-400 text-emerald-400
hover:bg-emerald-400 hover:shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-shadow hover:text-black">
Get In Touch 
</button>
      </div>
    </div>
  )
}

export default Home
