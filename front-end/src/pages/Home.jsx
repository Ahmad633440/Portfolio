import { motion } from "framer-motion";

const Home = () => {
  return (
<section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20">
  {/* Background Effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
    <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />
  </div>

  <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-slate-900/50 px-4 py-2 backdrop-blur-xl">
        <div className="h-2 w-2 rounded-full bg-violet-300"></div>
        <span className="text-sm text-slate-300">
          Available for Freelance & Internship
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Ahmad Nazir
        </span>
      </h1>

      <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
        Full Stack Developer
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        I build responsive, modern, and scalable web applications using
        React, Next.js, Node.js, Express, and MongoDB with a strong focus on
        clean UI and user experience.
      </p>

      {/* Skills Tags */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          React
        </span>

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Next.js
        </span>

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Node.js
        </span>

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          MongoDB
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="/Ahmad_Nazir_Resume.pdf"
          download
          className="rounded-2xl bg-violet-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500"
        >
          Download Resume
        </a>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-2xl border border-slate-800 bg-slate-900/50 px-8 py-4 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900"
        >
          Get In Touch
        </button>
      </div>
    </motion.div>

    {/* Stats Cards */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mx-auto mt-24 grid w-full max-w-5xl gap-6 md:grid-cols-3"
    >
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <h3 className="text-4xl font-bold text-violet-300">3+</h3>
        <p className="mt-3 text-slate-400">
          Years Learning
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <h3 className="text-4xl font-bold text-violet-300">MERN</h3>
        <p className="mt-3 text-slate-400">
          Stack Developer
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <h3 className="text-4xl font-bold text-violet-300">AI & Web</h3>
        <p className="mt-3 text-slate-400">
Application Builder
        </p>
      </div>
    </motion.div>
  </div>
</section>

  );
};

export default Home;
