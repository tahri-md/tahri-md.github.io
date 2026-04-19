"use client"

import { useState } from "react";
import { cn } from "@/utils/utils";
import { Play, ArrowRight, X, ExternalLink } from "lucide-react";

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
        type: "GraphQL / Microservices",
        description:
            "Production-ready GraphQL API Gateway with Apollo Server federation, intelligent routing, JWT authentication, Prometheus monitoring, and resilient microservice communication.",
        tech: ["Node.js", "Apollo Server", "GraphQL", "Express", "JWT", "Prometheus", "TypeScript"],
        link: "https://github.com/tahri-md/qirel",
    },
    {
        title: "Dexoria",
        type: "Game / TUI",
        description:
            "Turn-based Pokemon battle game with TUI interface. Battle against a bot, select your team from real Pokemon, and compete in dynamic terminal-based combat with multiplayer WebSocket support.",
        tech: ["TypeScript", "Node.js", "WebSocket"],
        link: "https://github.com/tahri-md/dexoria",
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

function AllProjectsPanel({ projects, isOpen, onClose, type }: { projects: Project[]; isOpen: boolean; onClose: () => void; type: string }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-gradient-to-b from-caramel-900/20 to-black border border-caramel-800 rounded w-full max-w-6xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between p-8 border-b border-caramel-800">
                    <h3 className="text-3xl font-bold text-caramel-100">{type}</h3>
                    <button
                        onClick={onClose}
                        className="text-caramel-400 hover:text-caramel-300 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="overflow-y-auto flex-1 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded transition-all duration-300 bg-linear-to-br from-black to-black/80 border border-caramel-800 hover:border-caramel-500 hover:shadow-lg h-full flex flex-col">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="w-8 h-8 rounded bg-caramel-600 group-hover:bg-caramel-500 transition-all duration-300 flex items-center justify-center shadow-lg transform group-hover:scale-110">
                                            <Play className="w-6 h-6 text-black fill-black" />
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col justify-between h-full relative z-0">
                                        <div className="space-y-3">
                                            <h4 className="text-lg font-bold text-caramel-100 group-hover:text-caramel-300 transition-colors line-clamp-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-xs text-caramel-500 font-semibold uppercase tracking-wide">
                                                {project.type}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm text-caramel-300 line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tech.slice(0, 4).map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs px-2.5 py-1 bg-caramel-600/20 text-caramel-300 rounded-full border border-caramel-600/40 group-hover:bg-caramel-600/30 group-hover:text-caramel-200 transition-colors"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                                {project.tech.length > 4 && (
                                                    <span className="text-xs px-2.5 py-1 bg-caramel-600/20 text-caramel-400 rounded-full border border-caramel-600/40 group-hover:bg-caramel-600/30 transition-colors">
                                                        +{project.tech.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "absolute top-0 left-0 right-0 h-0.5 bg-caramel-500 transition-all duration-300",
                                        "opacity-0 group-hover:opacity-100"
                                    )} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function NewDiscography() {
    const [activeTab, setActiveTab] = useState<'singles' | 'featured'>('singles')
    const [showAll, setShowAll] = useState(false)
    const displayProjects = activeTab === 'singles' ? SINGLE_PROJECTS.slice(0, 4) : FEATURED_PROJECTS.slice(0, 4)
    const allProjects = activeTab === 'singles' ? SINGLE_PROJECTS : FEATURED_PROJECTS

    return (
        <div className="relative flex flex-col w-full px-4 sm:px-6 lg:px-8 py-12 bg-linear-to-br from-black via-black to-black">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-caramel-100 mb-8">
                    Discography
                </h2>

                <div className="flex gap-8 border-b border-caramel-700 mb-8 items-center justify-between">
                    <div className="flex gap-8">
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
                    {(activeTab === 'singles' ? SINGLE_PROJECTS.length : FEATURED_PROJECTS.length) > 4 && (
                        <button 
                            onClick={() => setShowAll(true)}
                            className={cn(
                                "pb-3 px-1 font-medium transition-all border-b-2 flex items-center gap-2",
                                "text-caramel-400 border-transparent hover:text-caramel-300"
                            )}
                        >
                            Show All
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>

                <ProjectsGrid projects={displayProjects} />
                
                <AllProjectsPanel 
                    projects={allProjects}
                    isOpen={showAll}
                    onClose={() => setShowAll(false)}
                    type={activeTab === 'singles' ? 'All Singles' : 'All Featured'}
                />
            </div>
        </div>
    )
}