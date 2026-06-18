const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-4xl border border-emerald-400/10 bg-slate-900/80 shadow-[0_40px_120px_-70px_rgba(16,185,129,0.7)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_-40px_rgba(16,185,129,0.5)]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/95 via-slate-950/50 to-transparent px-5 py-4">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/80">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-50">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-slate-300 leading-7">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            View Live
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-slate-950/50 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/10"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;
