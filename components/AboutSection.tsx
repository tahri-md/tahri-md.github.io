"use client"

import { useState } from "react"
import { X, Mail, Check, ArrowRight, GitBranch } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { cn } from "@/utils/utils"

const EMAIL = "tahrimedamine00@gmail.com"
const GITHUB_URL = "https://github.com/tahri-md"

export function AboutSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const { copy } = useCopyToClipboard()

  const handleEmailCopy = async () => {
    await copy(EMAIL)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <>
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-black">
        <div className="flex justify-start pl-0 md:pl-12 lg:pl-20">
          <div
            onClick={() => setIsOpen(true)}
            className={cn(
              "relative w-full sm:w-[480px] md:w-1/2 h-[600px] overflow-hidden cursor-pointer group",
              "bg-linear-to-br from-black to-black/50 border border-caramel-800",
              "hover:border-caramel-600 transition-all duration-300 hover:shadow-xl hover:shadow-caramel-500/10"
            )}
          >
            <div className="absolute inset-0">
              <img 
                src="profil.jpg" 
                alt="Tahri" 
                className="w-full h-full object-cover opacity-20"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-caramel-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <p className="text-xs text-caramel-500">Click for more</p>
                  <ArrowRight className="w-4 h-4 text-caramel-500 inline" />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <h2 className="text-4xl font-(--font-bebas) tracking-tight text-caramel-100 mb-1">
                    Tahri
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-caramel-500 mb-2">
                    Full-Stack Developer
                  </p>
                  <p className="text-sm text-caramel-400">
                    Digital Architect & System Builder
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-caramel-300/90">
                  Designing scalable systems and elegant interfaces. Building the future, one line at a time.
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-caramel-600">
                    Specializing in
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-xs px-2 py-1 bg-caramel-500/15 text-caramel-300 border border-caramel-700/30">
                      Systems Design
                    </span>
                    <span className="text-xs px-2 py-1 bg-caramel-500/15 text-caramel-300 border border-caramel-700/30">
                      Backend Dev
                    </span>
                    <span className="text-xs px-2 py-1 bg-caramel-500/15 text-caramel-300 border border-caramel-700/30">
                      Full-Stack
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2 border border-caramel-700 hover:border-caramel-500 hover:bg-caramel-500/10",
                      "transition-all duration-300 group/icon"
                    )}
                  >
                    <GitBranch className="w-4 h-4 text-caramel-400 group-hover/icon:text-caramel-300" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleEmailCopy()
                    }}
                    className={cn(
                      "p-2 border border-caramel-700 hover:border-caramel-500 hover:bg-caramel-500/10",
                      "transition-all duration-300 group/icon"
                    )}
                  >
                    <Mail className="w-4 h-4 text-caramel-400 group-hover/icon:text-caramel-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={cn(
            "bg-linear-to-br from-black to-black/80 max-w-3xl w-full max-h-[90vh] overflow-y-auto",
            "border border-caramel-800 shadow-2xl shadow-caramel-500/10"
          )}>
            <div className="sticky top-0 flex items-center justify-between p-6 bg-black/80 backdrop-blur border-b border-caramel-800">
              <div>
                <h2 className="text-3xl font-(--font-bebas) tracking-tight text-caramel-100">
                  Tahri
                </h2>
                <p className="text-sm text-caramel-500">Full-Stack Developer</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-caramel-800/30 transition-colors rounded border border-caramel-800/30"
              >
                <X className="w-5 h-5 text-caramel-100" />
              </button>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-5 border-b border-caramel-800/30 pb-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-caramel-600 mb-3">
                    About Me
                  </h3>
                  <p className="text-lg leading-relaxed text-caramel-200">
                    I'm a full-stack developer obsessed with building systems that don't just work—they excel. I solve complex engineering problems, architect scalable solutions, and craft elegant interfaces that users love.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-caramel-400">
                  My journey spans from backend systems optimization and blockchain verification to AI-powered data platforms. I believe in clean code, thoughtful architecture, and the power of shipping great products. Every project is an opportunity to push boundaries and learn something new.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-caramel-100">
                  What I Work With
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-caramel-600 mb-2">Backend & Systems</p>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "Go", "Node.js", "PostgreSQL", "Redis", "Kafka", "gRPC"].map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs bg-caramel-500/10 border border-caramel-700 text-caramel-300 hover:bg-caramel-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-widest text-caramel-600 mb-2">Frontend & UI</p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "Angular", "Tailwind"].map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs bg-caramel-500/10 border border-caramel-700 text-caramel-300 hover:bg-caramel-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-caramel-600 mb-2">Infrastructure & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "CI/CD", "AWS", "Git", "System Design"].map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs bg-caramel-500/10 border border-caramel-700 text-caramel-300 hover:bg-caramel-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-caramel-100">
                  Areas of Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: "Distributed Systems", desc: "Designing scalable, resilient architectures" },
                    { title: "Security & Performance", desc: "Optimization and threat mitigation" },
                    { title: "Full-Stack Development", desc: "From database to user interface" },
                    { title: "System Architecture", desc: "Building for scale and maintainability" }
                  ].map((item) => (
                    <div key={item.title} className="p-4 border border-caramel-800/50 hover:border-caramel-700 transition-colors">
                      <p className="text-sm font-bold text-caramel-100 mb-1">{item.title}</p>
                      <p className="text-xs text-caramel-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-caramel-800/30">
                <h3 className="text-sm font-bold uppercase tracking-widest text-caramel-100">
                  Let's Connect
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={handleEmailCopy}
                    className={cn(
                      "group relative px-4 py-3 border border-caramel-600 overflow-hidden",
                      "hover:border-caramel-400 transition-all duration-300 hover:shadow-lg hover:shadow-caramel-500/10",
                      "flex items-center justify-between"
                    )}
                  >
                    <div className="absolute inset-0 bg-caramel-500/5 group-hover:bg-caramel-500/10 transition-colors" />
                    <div className="relative flex items-center gap-2">
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-caramel-400" />
                          <span className="text-sm font-medium text-caramel-100">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 text-caramel-500" />
                          <span className="text-sm font-medium text-caramel-100">Copy Email</span>
                        </>
                      )}
                    </div>
                    <ArrowRight className="relative w-4 h-4 text-caramel-600 group-hover:text-caramel-400 transition-colors" />
                  </button>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative px-4 py-3 border border-caramel-600 overflow-hidden",
                      "hover:border-caramel-400 transition-all duration-300 hover:shadow-lg hover:shadow-caramel-500/10",
                      "flex items-center justify-between"
                    )}
                  >
                    <div className="absolute inset-0 bg-caramel-500/5 group-hover:bg-caramel-500/10 transition-colors" />
                    <div className="relative flex items-center gap-2">
                      <span className="text-lg font-bold"><GitBranch /></span>
                      <span className="text-sm font-medium text-caramel-100">View GitHub</span>
                    </div>
                    <ArrowRight className="relative w-4 h-4 text-caramel-600 group-hover:text-caramel-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
