import { ArrowUpRight, Play } from "lucide-react"
import { useState } from "react"

import { cn } from "@/utils/utils"

interface Project {
    title: string
    type: string
    description: string
    tech: string[]
    link: string
    span?: string
}

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
    {
        title: "Pinlio",
        type: "Incoming",
        description: "Coming soon...",
        tech: ["???"],
        link: "#",
        span: "col-span-1",
    },
]

function ProjectShow({ project }: { project?: Project }) {
    if (!project) {
        return (
            <div className="flex min-h-112 items-center justify-center rounded-sm border border-brand-800/50 bg-card/70 p-6">
                <p className="text-sm font-mono text-brand-400/70">
                    Pick a project to preview details.
                </p>
            </div>
        )
    }

    return (
        <div className="project-card relative min-h-112 overflow-hidden rounded-sm border border-brand-800/50 bg-linear-to-br from-card to-card/80 p-6 shadow-lg">
            <div className="pointer-events-none absolute -top-16 -right-12 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-brand-700/15 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand-500">
                            {project.type}
                        </p>
                        <h3 className="text-2xl font-(--font-bebas) tracking-tight text-brand-100 sm:text-3xl">
                            {project.title}
                        </h3>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-brand-700/80 px-3 py-1.5 font-mono text-xs text-brand-300 transition-all duration-300 hover:border-brand-500 hover:text-brand-200"
                        aria-label={`Open ${project.title}`}
                    >
                        Open
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                <p className="text-sm leading-relaxed text-brand-300">
                    {project.description}
                </p>

                <div className="mt-6 border-t border-brand-800/50 pt-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand-500/90">
                        Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="whitespace-nowrap rounded-sm border border-brand-700/60 bg-main/70 px-2.5 py-1 font-mono text-[10px] text-brand-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            </div>
    )
}

function ProjectRow({
    project,
    index,
    chooseProject,
}: {
    project: Project
    index: number
    chooseProject: (project: Project) => void
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={cn(
                "group flex cursor-pointer items-center gap-4 px-4 py-3 transition-all duration-200",
                "border-b border-brand-800/50 hover:border-brand-600/50",
                "hover:bg-brand-500/10"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => chooseProject(project)}
        >
            <div className="w-8 flex justify-center shrink-0">
                {isHovered ? (
                    <button
                        onClick={() => chooseProject(project)}
                        className="text-brand-400 hover:text-brand-300"
                    >
                        <Play className="w-5 h-5 fill-current" />
                    </button>
                ) : (
                    <span className="text-sm text-brand-400 font-mono">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-brand-100 truncate group-hover:text-brand-300 transition-colors">
                    {project.title}
                </h3>

                <p className="text-xs text-brand-400 truncate">
                    {project.type}
                </p>
            </div>

            <div className="hidden md:flex gap-1.5 flex-wrap justify-end max-w-xs">
                {project.tech.slice(0, 2).map((tech) => (
                    <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 bg-main border border-brand-800 text-brand-400 font-mono whitespace-nowrap"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function WorkSection() {
    const featuredProjects = PROJECTS.filter(
        (project) => project.type !== "Incoming"
    )

    const [selectedProject, setSelectedProject] = useState<Project | undefined>(featuredProjects[0])

    return (
        <section
            id="work-section"
            className="relative w-full px-4 sm:px-6 lg:px-8 py-12"
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-brand-100 mb-8">
                Featured Work
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
                <div className="w-full lg:w-1/2 space-y-1">
                    {featuredProjects.map((project, index) => (
                        <ProjectRow
                            key={project.title}
                            project={project}
                            index={index}
                            chooseProject={setSelectedProject}
                        />
                    ))}
                </div>

                <div className="w-full lg:w-1/2">
                    <ProjectShow project={selectedProject} />
                </div>
            </div>
        </section>
    )
}