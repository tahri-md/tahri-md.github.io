import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/utils";

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
        description:
            "Coming soon...",
        tech: ["???"],
        link: "#",
        span: "col-span-1",
    },
]

function ProjectRow({ project, index }: { project: Project; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <div
                className={cn(
                    "flex items-center gap-4 px-4 py-3 transition-all duration-200",
                    "border-b border-red-800/50 hover:border-red-600/50",
                    "hover:bg-red-500/10"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-8 flex justify-center shrink-0">
                    {isHovered ? (
                        <button className="text-red-400 hover:text-red-300">
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
        </a>
    )
}

export default function WorkSection() {
    const featuredProjects = PROJECTS.filter(p => p.type !== "Incoming")
    
    return (
        <div id="work-section" className="relative flex flex-col w-full px-4 sm:px-6 lg:px-8 py-12 bg-linear-to-br from-black via-black to-black">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-red-100 mb-8">
                    Featured Work
                </h2>

                <div className="space-y-1">
                    {featuredProjects.map((project, index) => (
                        <ProjectRow key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}