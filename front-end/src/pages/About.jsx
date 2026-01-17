import { CalendarDays, MapPin } from "lucide-react"

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 min-h-screen">
<h2 className="text-4xl font-semibold pb-3 p-3 border-b-4 rounded-b-xl shadow-[0_8px_16px_-6px_rgba(255,255,255,)]
      dark:text-white dark:border-white/50 dark:bg-neutral-950/30
      text-neutral-900 border-emerald-400/50 bg-emerald-50">
      About Me
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed line-clamp-5 dark:text-slate-400 text-neutral-700">
        I am a passionate Computer Science student with a strong interest in web
        development. I enjoy exploring new technologies and applying them to
        real-world problems. I work with React, Node.js, Express, and MongoDB to
        build full-stack applications, focusing on clean code, scalable APIs,
        and continuous improvement in problem-solving skills.
      </p>

{/* Eduaction */}
      <div className="grid gap-6 mt-10 md:grid-cols-2 ">
      <div
        className="
          mt-16 max-w-xl rounded-xl p-6
          dark:border dark:border-white/10 dark:bg-neutral-900/60 dark:shadow-[0_10px_28px_-14px_rgba(255,255,255,0.6)]
          border border-emerald-300 bg-emerald-100 shadow-[0_10px_28px_-14px_rgba(52,211,153,0.3)]
        "
      >
        <h3 className="text-lg font-medium dark:text-slate-100 text-neutral-900">
          Education
        </h3>

        <p className="mt-2 dark:text-slate-400 text-neutral-700">
          Bachelor of Computer Science
        </p>

        <p className="dark:text-slate-500 text-neutral-600">
          University of the Punjab
        </p>

        <div className="mt-4 flex gap-6 dark:text-slate-400 text-neutral-700">
          <span className="flex items-center gap-2">
            <CalendarDays size={12} />
            2022 – 2026
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={12} />
            Lahore, Pakistan
          </span>
        </div>
      </div>

{/* Eduaction */}
 <div
        className="
          mt-16 max-w-xl rounded-xl p-6
          dark:border dark:border-white/10 dark:bg-neutral-900/60 dark:shadow-[0_10px_28px_-14px_rgba(255,255,255,0.6)]
          border border-emerald-300 bg-emerald-100 shadow-[0_10px_28px_-14px_rgba(52,211,153,0.3)]
        "
      >
        <h3 className="text-lg font-medium dark:text-slate-100 text-neutral-900">
          Education
        </h3>

        <p className="mt-2 dark:text-slate-400 text-neutral-700">
          Intermediate in ICS
        </p>

        <p className="dark:text-slate-500 text-neutral-600">
          Govt Shalimar College Lahore
        </p>

        <div className="mt-4 flex gap-6 dark:text-slate-400 text-neutral-700">
          <span className="flex items-center gap-2">
            <CalendarDays size={12} />
            2019 – 2021
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={12} />
            Lahore, Pakistan
          </span>
        </div>
      </div>


{/* Certificate */}
 <div
        className="
          mt-16 max-w-xl rounded-xl p-6
          dark:border dark:border-white/10 dark:bg-neutral-900/60 dark:shadow-[0_10px_28px_-14px_rgba(255,255,255,0.6)]
          border border-emerald-300 bg-emerald-100 shadow-[0_10px_28px_-14px_rgba(52,211,153,0.3)]
        "
      >
        <h3 className="text-lg font-medium dark:text-slate-100 text-neutral-900">
          Certification
        </h3>

        <p className="mt-2 dark:text-slate-400 text-neutral-700">
         Project Management
        </p>

        <p className="dark:text-slate-500 text-neutral-600">
          Simplilearn
        </p>

        <div className="mt-4 flex gap-6 dark:text-slate-400 text-neutral-700">
          <span className="flex items-center gap-2">
            <CalendarDays size={12} />
        17 December 2025
          </span>

          <span className="flex items-center gap-1.5 ">
            <div className="text-sm">code: </div>
              9600361
          </span>
        </div>
      </div>

{/* Certificate */}
<div
        className="
          mt-16 max-w-xl rounded-xl p-6
          dark:border dark:border-white/10 dark:bg-neutral-900/60 dark:shadow-[0_10px_28px_-14px_rgba(255,255,255,0.6)]
          border border-emerald-300 bg-emerald-100 shadow-[0_10px_28px_-14px_rgba(52,211,153,0.3)]
        "
      >
        <h3 className="text-lg font-medium dark:text-slate-100 text-neutral-900">
          Certification
        </h3>

        <p className="mt-2 dark:text-slate-400 text-neutral-700">
         Web Development
        </p>

        <p className="dark:text-slate-500 text-neutral-600">
          Simplilearn 
        </p>

        <div className="mt-4 flex gap-6 dark:text-slate-400 text-neutral-700">
          <span className="flex items-center gap-2">
            <CalendarDays size={12} />
        17 December 2025
          </span>

          <span className="flex items-center  gap-1.5 ">
            <div className="text-sm">code:</div>
             9600035
          </span>
        </div>
      </div>


      </div>
    </div>
  )
}

export default About
