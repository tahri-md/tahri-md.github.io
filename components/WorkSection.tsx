"use client"

import { cn } from "@/utils/utils"
import { useMemo, useState } from "react"

interface Project {
  title: string
  type: string
  description: string
  tech: string[]
  link: string
  span: string
}

interface WorkSectionProps {
  selectedSkills: Set<string>
}

const SECTION_ID = "projects"
const SECTION_TITLE = "FEATURED PROJECTS"
const SECTION_SUBTITLE = "A selection of recent projects spanning web applications, design systems, and digital experiences."

const PROJECTS: Project[] = [
  {
    title: "QuerySence",
    type: "Full Stack Platform",
    description:
      "SQL analysis platform with AI-powered optimization, security scanning, and team collaboration features.",
    tech: ["Spring Boot", "PostgreSQL", "Next.js", "JWT", "Docker"],
    link: "https://github.com/tahri-md/querysence",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Verity",
    type: "Blockchain / Security",
    description:
      "Blockchain verification system with ECDSA signatures, Merkle proofs, consensus mechanisms, and immutable audit trails.",
    tech: ["Go", "Gin", "GORM", "PostgreSQL", "Redis"],
    link: "https://github.com/tahri-md/verity",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "JobPulse",
    type: "Distributed Systems",
    description:
      "Job scheduling and monitoring platform with retries, dead-letter queues, and distributed execution using Redis locks.",
    tech: ["Spring Boot", "Angular", "Redis", "Quartz", "Docker"],
    link: "https://github.com/tahri-md/jobpulse",
    span: "col-span-1",
  },
  {
    title: "API Gateway",
    type: "Backend / Microservices",
    description:
      "Centralized API gateway handling routing, authentication, and request filtering in a microservices architecture.",
    tech: ["Spring Cloud Gateway", "JWT", "Microservices"],
    link: "https://github.com/tahri-md/apigateway",
    span: "col-span-1",
  },
  {
    title: "Synapse",
    type: "Message Queue / Broker",
    description:
      "Production-grade message queue broker with priority queues, consumer groups, dead-letter handling, and distributed processing.",
    tech: ["Spring Boot", "PostgreSQL", "Redis", "Flyway"],
    link: "https://github.com/tahri-md/synapse",
    span: "col-span-1",
  },
  {
    title: "Bolt Cache System",
    type: "Systems / Backend",
    description:
      "Distributed cache system with consistent hashing, replication, LRU/LFU eviction, and pub/sub messaging.",
    tech: ["Go", "Gin", "Distributed Systems"],
    link: "https://github.com/tahri-md/bolt",
    span: "col-span-1",
  },
  {
    title: "ScriptFormer",
    type: "AI / OCR",
    description:
      "Deep learning pipeline for Arabic manuscript OCR using Transformers and custom preprocessing.",
    tech: ["PyTorch", "Transformers", "OCR", "NLP"],
    link: "https://github.com/tahri-md/ScriptFormer",
    span: "col-span-1",
  },
]

function SectionHeader() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-bebas)] text-neutral-950 dark:text-neutral-50 tracking-tight leading-tight">
        {SECTION_TITLE}
      </h2>
      <p className="font-mono text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
        {SECTION_SUBTITLE}
      </p>
    </div>
  )
}

interface WorkCardProps {
  project: Project
  alwaysActive?: boolean
}

function WorkCard({ project, alwaysActive = false }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isActive = alwaysActive || isHovered

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col justify-between p-4 md:p-5 lg:p-6 border transition-all duration-500 overflow-hidden cursor-pointer",
        project.span,
        isActive
          ? "border-purple-500 dark:border-purple-500"
          : "border-neutral-300 dark:border-neutral-700"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          "bg-purple-500/5 dark:bg-purple-500/10",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="relative z-10">
        <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
          {project.type}
        </span>

        <h3
          className={cn(
            "text-xl md:text-2xl lg:text-3xl font-[var(--font-bebas)] transition-colors duration-300 mt-4 tracking-tight line-clamp-2",
            isActive ? "text-purple-500" : "text-neutral-900 dark:text-neutral-100"
          )}
        >
          {project.title}
        </h3>
      </div>

      <div className="relative z-10 space-y-2 md:space-y-3">
        <p
          className={cn(
            "text-xs md:text-sm font-mono text-neutral-600 dark:text-neutral-400 transition-all duration-500 line-clamp-2",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          {project.description}
        </p>

        <div
          className={cn(
            "flex flex-wrap gap-1.5 md:gap-2 transition-all duration-500",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] md:text-xs px-2 py-0.5 md:py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500 pointer-events-none",
          isActive ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-purple-500" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-purple-500" />
      </div>
    </a>
  )
}

interface ProjectGridProps {
  projects: Project[]
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 auto-rows-[220px]">
      {projects.length > 0 ? (
        projects.map((project, i) => (
          <div
            key={project.title}
            className={cn(
              project.span,
              "transition-all duration-500 opacity-100"
            )}
          >
            <WorkCard project={project} alwaysActive={i === 0} />
          </div>
        ))
      ) : (
        <div className="col-span-full flex items-center justify-center py-12">
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
            No projects found with selected skills.
          </p>
        </div>
      )}
    </div>
  )
}

export default function WorkSection({ selectedSkills }: WorkSectionProps) {
  const filteredProjects = useMemo(() => {
    if (selectedSkills.size === 0) {
      return PROJECTS
    }
    return PROJECTS.filter((project) =>
      project.tech.some((t) => selectedSkills.has(t))
    )
  }, [selectedSkills])

  return (
    <section id={SECTION_ID} className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  )
}