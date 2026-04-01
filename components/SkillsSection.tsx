"use client"

import { useState } from "react"
import { cn } from "@/utils/utils"

const CORE_SKILLS = [
  "Java",
  "TypeScript",
  "Python",
  "Go",
  "Spring Boot",
  "React",
  "Next.js",
  "REST APIs",
  "Microservices",
  "Docker",
  "PostgreSQL",
  "Redis",
]

export default function SkillsSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes float-dots {
          0%, 100% { transform: translateY(-8px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
        .pulse-line {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .float-indicator {
          animation: float-dots 2s ease-in-out infinite;
        }
      `}</style>

      {/* Clickable Indicator Dots Above */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator"></div>
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator opacity-70" style={{animationDelay: '0.2s'}}></div>
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator opacity-40" style={{animationDelay: '0.4s'}}></div>
      </div>

      {/* Vertical Line Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-1 md:w-1.5 h-24 md:h-32 rounded-full transition-all duration-500 cursor-pointer relative group",
          "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 dark:from-orange-500 dark:via-orange-600 dark:to-orange-700",
          "hover:shadow-lg hover:shadow-orange-500/50 dark:hover:shadow-orange-600/50",
          "pulse-line",
          isOpen && "h-40 md:h-56 shadow-xl shadow-orange-500/60 dark:shadow-orange-600/60 pulse-line"
        )}
        aria-label="Click to view skills"
        title="Click to view skills"
      >
        {/* Floating Label */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap pointer-events-none",
            "font-mono text-xs font-bold text-orange-600 dark:text-orange-400",
            isOpen ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2 md:top-3 opacity-60 group-hover:opacity-100"
          )}
        >
          <span className={cn(isOpen ? "block" : "hidden")}>SKILLS</span>
        </div>

        {/* Hover Label */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 font-mono text-[10px] font-bold text-orange-600 dark:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          CLICK ME
        </div>
      </button>

      {/* Clickable Indicator Dots Below */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator" style={{animationDelay: '0.4s'}}></div>
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator opacity-70" style={{animationDelay: '0.2s'}}></div>
        <div className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full float-indicator opacity-40"></div>
      </div>

      {/* Skills Panel */}
      {isOpen && (
        <div
          className="absolute left-6 md:left-8 top-0 z-50 pointer-events-none"
          style={{
            animation: "slideInLeft 0.4s ease-out",
          }}
        >
          <style>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>

          <div className="flex flex-wrap gap-2 md:gap-3 max-w-xs md:max-w-md">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-mono bg-orange-100/80 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-300/60 dark:border-orange-600/40 rounded-md whitespace-nowrap hover:bg-orange-200/80 dark:hover:bg-orange-900/60 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-lg opacity-0 transition-opacity duration-500 pointer-events-none",
          "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 dark:from-orange-500 dark:via-orange-600 dark:to-orange-700",
          isOpen && "opacity-30"
        )}
      />
    </div>
  )
}
