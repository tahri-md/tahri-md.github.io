"use client"

import { useState } from "react";
import { cn } from "@/utils/utils";
import { Play, ArrowRight, X } from "lucide-react";

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
                    "bg-linear-to-br from-secondary to-card/90 border border-brand-800",
                    "hover:border-brand-500 hover:shadow-xl"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-5 h-full flex flex-col justify-between min-h-72">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-brand-100 line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-brand-500 mt-1">
                                    {project.type}
                                </p>
                            </div>
                            <Play className={cn(
                                "w-5 h-5 transition-all duration-300 shrink-0",
                                isHovered ? "text-brand-400 translate-x-0" : "text-brand-700 translate-x-1"
                            )} />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t) => (
                            <span 
                                key={t} 
                                className="text-xs px-2 py-1 bg-brand-600/15 text-brand-400 rounded-sm border border-brand-600/30 transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-brand-600/15 text-brand-500 rounded-sm border border-brand-600/30">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className={cn(
                        "text-xs leading-relaxed transition-all duration-300",
                        isHovered ? "text-brand-200 opacity-100" : "text-brand-400 opacity-60"
                    )}>
                        {project.description}
                    </div>
                </div>

                <div className={cn(
                    "absolute top-0 left-0 right-0 h-0.5 bg-brand-500 transition-all duration-300",
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
                    ? "text-brand-100 border-brand-400"
                    : "text-brand-400 border-transparent hover:text-brand-300"
            )}
        >
            {children}
        </button>
    )
}

function AllProjectsPanel({ projects, isOpen, onClose, type }: { projects: Project[]; isOpen: boolean; onClose: () => void; type: string }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-main/85 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-linear-to-br from-secondary to-card w-full max-w-7xl max-h-[90vh] flex flex-col overflow-hidden rounded-sm border border-brand-800/60 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                {/* Header bar */}
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-700 via-brand-500 to-brand-400" />
                    <div className="flex items-center justify-between p-8 border-b border-brand-800/40">
                        <div className="space-y-2">
                            <h3 className="text-5xl md:text-3xl font-(--font-bebas) tracking-tight text-brand-100">{type}</h3>
                            <p className="text-xs text-brand-500 font-mono uppercase tracking-widest">All {projects.length} Projects</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-3 hover:bg-brand-800/20 transition-colors rounded-sm border border-brand-800/30 group"
                        >
                            <X className="w-6 h-6 text-brand-400 group-hover:text-brand-300 transition-colors" />
                        </button>
                    </div>
                </div>

                <div className="overflow-y-auto flex-1 p-8">
                    <div className="space-y-3">
                        {projects.map((project, index) => (
                            <a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="relative overflow-hidden transition-all duration-300 bg-linear-to-r from-card/60 to-secondary/40 hover:from-card hover:to-card/70 border border-brand-800/40 hover:border-brand-500/60 hover:shadow-lg rounded-sm px-6 py-4 flex items-center justify-between gap-6 h-20">
                                    <div className="absolute inset-0 bg-linear-to-r from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Index */}
                                    <div className="relative z-10 flex items-center gap-4 flex-1 min-w-0">
                                        <span className="text-brand-500/60 group-hover:text-brand-500 transition-colors font-mono text-sm font-bold w-8 text-right shrink-0">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-base font-bold text-brand-100 group-hover:text-brand-300 transition-colors truncate">
                                                {project.title}
                                            </h4>
                                            <div className="flex items-center gap-3 mt-0.5">
                                                <p className="text-xs font-mono uppercase tracking-widest text-brand-500/80 group-hover:text-brand-500 transition-colors whitespace-nowrap">
                                                    {project.type}
                                                </p>
                                                <span className="text-xs text-brand-500/40 shrink-0">•</span>
                                                <p className="text-xs text-brand-400 truncate">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech tags */}
                                    <div className="relative z-10 flex items-center gap-2 flex-wrap justify-end shrink-0">
                                        {project.tech.slice(0, 2).map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2.5 py-1 bg-brand-500/15 text-brand-500 rounded-sm border border-brand-500/40 group-hover:bg-brand-500/25 group-hover:border-brand-500/60 transition-all duration-300 font-mono whitespace-nowrap"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 2 && (
                                            <span className="text-xs px-2.5 py-1 bg-brand-500/15 text-brand-400 rounded-sm border border-brand-500/40 group-hover:bg-brand-500/25 group-hover:border-brand-500/60 transition-all duration-300 font-mono">
                                                +{project.tech.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    {/* Play icon */}
                                    <div className="relative z-10 p-2.5 bg-brand-500/0 group-hover:bg-brand-500/20 rounded-sm transition-all duration-300 shrink-0">
                                        <Play className="w-5 h-5 text-brand-500/60 group-hover:text-brand-500 fill-brand-500/60 group-hover:fill-brand-500 transition-all duration-300" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-500 to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100" />
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
        <div className="relative flex flex-col w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-(--font-bebas) tracking-tight text-brand-100 mb-8">
                    Discography
                </h2>

                <div className="flex gap-8 border-b border-brand-700 mb-8 items-center justify-between">
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
                                "text-brand-400 border-transparent hover:text-brand-300"
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