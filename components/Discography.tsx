"use client"

import { useState } from "react";
import { cn } from "@/utils/utils";
import { Play } from "lucide-react";

interface Project {
    title: string
    type: string
    description: string
    tech: string[]
    link: string
    span?: string
}

const SINGLE_PROJECTS: Project[] = [
    {
        title: "QuerySence",
        type: "Full Stack Platform",
        description:
            "SQL analysis platform with AI-powered optimization, security scanning, and team collaboration features.",
        tech: ["Spring Boot", "PostgreSQL", "Next.js", "JWT", "Docker"],
        link: "https://github.com/tahri-md/querysence",
    },
    {
        title: "Verity",
        type: "Blockchain / Security",
        description:
            "Blockchain verification system with ECDSA signatures, Merkle proofs, consensus mechanisms, and immutable audit trails.",
        tech: ["Go", "Gin", "GORM", "PostgreSQL", "Redis"],
        link: "https://github.com/tahri-md/verity",
    },
    {
        title: "JobPulse",
        type: "Distributed Systems",
        description:
            "Job scheduling and monitoring platform with retries, dead-letter queues, and distributed execution using Redis locks.",
        tech: ["Spring Boot", "Angular", "Redis", "Quartz", "Docker"],
        link: "https://github.com/tahri-md/jobpulse",
    },
    {
        title: "API Gateway",
        type: "Backend / Microservices",
        description:
            "Centralized API gateway handling routing, authentication, and request filtering in a microservices architecture.",
        tech: ["Spring Cloud Gateway", "JWT", "Microservices"],
        link: "https://github.com/tahri-md/apigateway",
    },
    {
        title: "Synapse",
        type: "Message Queue / Broker",
        description:
            "Production-grade message queue broker with priority queues, consumer groups, dead-letter handling, and distributed processing.",
        tech: ["Spring Boot", "PostgreSQL", "Redis", "Flyway"],
        link: "https://github.com/tahri-md/synapse",
    },
    {
        title: "Bolt Cache System",
        type: "Systems / Backend",
        description:
            "Distributed cache system with consistent hashing, replication, LRU/LFU eviction, and pub/sub messaging.",
        tech: ["Go", "Gin", "Distributed Systems"],
        link: "https://github.com/tahri-md/bolt",
    },
    {
        title: "ScriptFormer",
        type: "AI / OCR",
        description:
            "Deep learning pipeline for Arabic manuscript OCR using Transformers and custom preprocessing.",
        tech: ["PyTorch", "Transformers", "OCR", "NLP"],
        link: "https://github.com/tahri-md/ScriptFormer",
    },
      {
        title: "Qirel",
        type: "Incoming",
        description:
            "Coming soon...",
        tech: ["???"],
        link: "#",
    },
]
const FEATURED_PROJECTS: Project[] = [
    {
        title: "Pinlio",
        type: "Incoming",
        description:
            "Coming soon...",
        tech: ["???"],
        link: "#",
    },
    {
        title: "Kairo",
        type: "Incoming",
        description:
            "Coming soon...",
        tech: ["???"],
        link: "#",
    },
]

function ProjectCard({ project }: { project: Project }) {
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
                    "relative overflow-hidden transition-all duration-300",
                    "bg-linear-to-br from-black to-black/80 border border-caramel-800",
                    "hover:border-caramel-500 hover:shadow-xl"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-5 h-full flex flex-col justify-between min-h-72">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-caramel-100 line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-caramel-500 mt-1">
                                    {project.type}
                                </p>
                            </div>
                            <Play className={cn(
                                "w-5 h-5 transition-all duration-300 shrink-0",
                                isHovered ? "text-caramel-400 translate-x-0" : "text-caramel-700 translate-x-1"
                            )} />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t) => (
                            <span 
                                key={t} 
                                className="text-xs px-2 py-1 bg-caramel-600/15 text-caramel-400 rounded border border-caramel-600/30 transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-caramel-600/15 text-caramel-500 rounded border border-caramel-600/30">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className={cn(
                        "text-xs leading-relaxed transition-all duration-300",
                        isHovered ? "text-caramel-200 opacity-100" : "text-caramel-400 opacity-60"
                    )}>
                        {project.description}
                    </div>
                </div>

                <div className={cn(
                    "absolute top-0 left-0 right-0 h-0.5 bg-caramel-500 transition-all duration-300",
                    isHovered ? "opacity-100" : "opacity-0"
                )} />
            </div>
        </a>
    )
}

function ProjectsGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    )
}

interface TabButtonProps {
    active: boolean
    onClick: () => void
    children: React.ReactNode
}

function TabButton({ active, onClick, children }: TabButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "pb-3 px-1 font-medium transition-all border-b-2",
                active
                    ? "text-caramel-100 border-caramel-400"
                    : "text-caramel-400 border-transparent hover:text-caramel-300"
            )}
        >
            {children}
        </button>
    )
}

export default function NewDiscography() {
    const [activeTab, setActiveTab] = useState<'singles' | 'featured'>('singles')

    return (
        <div className="relative flex flex-col w-full px-4 sm:px-6 lg:px-8 py-12 bg-linear-to-br from-black via-black to-black">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-caramel-100 mb-8">
                    Discography
                </h2>

                <div className="flex gap-8 border-b border-caramel-700 mb-8">
                    <TabButton 
                        active={activeTab === 'singles'} 
                        onClick={() => setActiveTab('singles')}
                    >
                        Singles
                    </TabButton>
                    <TabButton 
                        active={activeTab === 'featured'} 
                        onClick={() => setActiveTab('featured')}
                    >
                        Featured
                    </TabButton>
                </div>

                {activeTab === 'singles' && <ProjectsGrid projects={SINGLE_PROJECTS} />}
                {activeTab === 'featured' && <ProjectsGrid projects={FEATURED_PROJECTS} />}
            </div>
        </div>
    )
}