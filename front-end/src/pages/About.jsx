import { CalendarDays, MapPin } from "lucide-react"

const About = () => {
  return (
<div className="relative px-4 py-24 sm:px-6 lg:px-8">
  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />
    <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-[120px]" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <div className="text-center">
      <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        About Me
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Education & Certifications
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        I'm a passionate Computer Science student with a strong interest in
        full-stack development. I enjoy building scalable applications and
        continuously learning modern technologies while focusing on clean code
        and user experience.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-20 grid gap-6 md:grid-cols-2">

      {/* BSCS */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <span className="text-sm text-violet-300">Education</span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          Bachelor of Computer Science
        </h3>

        <p className="mt-3 text-slate-400">
          University of the Punjab
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            2022 - 2026
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Lahore, Pakistan
          </span>
        </div>
      </div>

      {/* ICS */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <span className="text-sm text-violet-300">Education</span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          Intermediate in ICS
        </h3>

        <p className="mt-3 text-slate-400">
          Govt. Shalimar College Lahore
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            2019 - 2021
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Lahore, Pakistan
          </span>
        </div>
      </div>

      {/* Project Management */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <span className="text-sm text-violet-300">Certification</span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          Project Management
        </h3>

        <p className="mt-3 text-slate-400">
          Simplilearn
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            17 Dec 2025
          </span>

          <span>
            Code: 9600361
          </span>
        </div>
      </div>

      {/* Web Development */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
        <span className="text-sm text-violet-300">Certification</span>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          Web Development
        </h3>

        <p className="mt-3 text-slate-400">
          Simplilearn
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={14} />
            17 Dec 2025
          </span>

          <span>
            Code: 9600035
          </span>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default About
