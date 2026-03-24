"use client"
import { cn } from "@/utils/utils"
import { useState } from "react"

const projects = [
  {
    title: "QuerySence",
    type: "Full Stack Platform",
    description:
      "SQL analysis platform with AI-powered optimization, security scanning, and team collaboration features.",
    tech: ["Spring Boot", "PostgreSQL", "Next.js", "JWT", "Docker"],
    link: "https://github.com/tahri-md/querysence",
    span: "col-span-2 row-span-2",
  },
  {
    title: "JobPulse",
    type: "Distributed Systems",
    description:
      "Job scheduling and monitoring platform with retries, dead-letter queues, and distributed execution using Redis locks.",
    tech: ["Spring Boot", "Angular", "Redis", "Quartz", "Docker"],
    link: "https://github.com/tahri-md/jobpulse",
    span: "col-span-1 row-span-2",
  },
  {
    title: "API Gateway",
    type: "Backend / Microservices",
    description:
      "Centralized API gateway handling routing, authentication, and request filtering in a microservices architecture.",
    tech: ["Spring Cloud Gateway", "JWT", "Microservices"],
    link: "#",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Bolt Cache System",
    type: "Systems / Backend",
    description:
      "Distributed cache system with consistent hashing, replication, LRU/LFU eviction, and pub/sub messaging.",
    tech: ["Go", "Gin", "Distributed Systems"],
    link: "#",
    span: "col-span-2 row-span-1",
  },
  {
    title: "ScriptFormer",
    type: "AI / OCR",
    description:
      "Deep learning pipeline for Arabic manuscript OCR using Transformers and custom preprocessing.",
    tech: ["PyTorch", "Transformers", "OCR", "NLP"],
    link: "#",
    span: "col-span-1 row-span-1",
  },
]

export default function WorkSection() {
    return (
        <div className="flex flex-col justify-center w-full min-h-screen p-6 gap-12">
            <div className="flex flex-row justify-between">
                <h2 className="text-5xl text-neutral-300 text-muted-foreground/60 tracking-wide ">FEATURED PROJECTS</h2>
                <p className="font-mono text-neutral-700 text-xs max-w-md">A selection of recent projects spanning web applications, design systems, and digital experiences.</p>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
                    {projects.map((p, i) => (
                        <WorkCard key={i} project={p} alwaysActive={i === 0} />
                    ))}
                </div>

            </div>
        </div>
    )
}

type Project = {
  title: string
  type: string
  description: string
  tech: string[]
  link: string
  span: string
}

function WorkCard({ project, alwaysActive = false }: { project: Project; alwaysActive?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const isActive = alwaysActive || isHovered

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col justify-between p-6 border transition-all duration-500 overflow-hidden cursor-pointer",
        project.span,
        isActive ? "border-orange-500" : "border-neutral-300/60"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-orange-500/10 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-10">
        <span className="font-mono text-xs text-neutral-500">
          {project.type}
        </span>

        <h3
          className={cn(
            "text-2xl md:text-3xl transition-colors duration-300 mt-5",
            isActive ? "text-orange-500" : "text-neutral-300"
          )}
        >
          {project.title}
        </h3>
      </div>

      <div className="relative z-10 space-y-3">
        <p
          className={cn(
            "text-sm font-mono text-neutral-400 transition-all duration-500 line-clamp-2",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          {project.description}
        </p>

        <div
          className={cn(
            "flex flex-wrap gap-2 transition-all duration-500",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-orange-500" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-orange-500" />
      </div>
    </a>
  )
}