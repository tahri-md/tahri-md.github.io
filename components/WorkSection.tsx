import { Play, PlayIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

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
            <div className="flex h-full min-h-112 items-center justify-center  border-red-800/50 bg-black/40 p-6">
                <p className="text-sm font-mono text-red-400/50">
                    Select a project to view details
                </p>
            </div>
        )
    }

    return (
        <div
            className="project-card group overflow-hidden border rounded animate-pulse border-red-800/50 bg-black/40 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
        >
       

                <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-mono text-red-300">
                        {project.title}
                    </p>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-red-800/60 p-2 text-red-400 transition-colors duration-300 hover:border-red-500/70 hover:text-red-300"
                        aria-label={`Open ${project.title}`}
                    >
                        <PlayIcon className="h-4 w-4" />
                    </a>
                </div>

                <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 translate-y-2 group-hover:max-h-80 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="space-y-3 pt-1">
                        <p className="text-sm text-red-400">
                            {project.type}
                        </p>

                        <p className="text-xs leading-relaxed text-red-300">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="whitespace-nowrap border border-red-800 bg-black px-2 py-0.5 font-mono text-[10px] text-red-400"
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
                "group flex items-center gap-4 px-4 py-3 transition-all duration-200",
                "border-b border-red-800/50 hover:border-red-600/50",
                "hover:bg-red-500/10"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-8 flex justify-center shrink-0">
                {isHovered ? (
                    <button
                        onClick={() => chooseProject(project)}
                        className="text-red-400 hover:text-red-300"
                    >
                        <Play className="w-5 h-5 fill-current" />
                    </button>
                ) : (
                    <span className="text-sm text-red-400 font-mono">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-red-100 truncate group-hover:text-red-300 transition-colors">
                    {project.title}
                </h3>

                <p className="text-xs text-red-400 truncate">
                    {project.type}
                </p>
            </div>

            <div className="hidden md:flex gap-1.5 flex-wrap justify-end max-w-xs">
                {project.tech.slice(0, 2).map((tech) => (
                    <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 bg-black border border-red-800 text-red-400 font-mono whitespace-nowrap"
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

    const [selectedProject, setSelectedProject] = useState<
        Project | undefined
    >()

    return (
        <section
            id="work-section"
            className="relative w-full px-4 sm:px-6 lg:px-8 py-12 bg-linear-to-br from-black via-black to-black"
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-red-100 mb-8">
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