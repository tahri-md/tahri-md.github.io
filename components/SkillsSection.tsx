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


interface SkillsSectionProps {
  selectedSkills: Set<string>
  onSkillToggle: (skill: string) => void
  onClear: () => void
}

export default function SkillsSection({
  selectedSkills,
  onSkillToggle,
  onClear,
}: SkillsSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots"></div>
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots-delay-400 opacity-40"></div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-1 md:w-1.5 h-24 md:h-32 rounded-full transition-all duration-500 cursor-pointer animate-pulse relative group",
          "bg-linear-to-b from-caramel-300 via-caramel-500 to-caramel-700 dark:from-caramel-400 dark:via-caramel-600 dark:to-caramel-800",
          "hover:shadow-lg hover:shadow-caramel-500/50 dark:hover:shadow-caramel-700/50",
          "animate-pulse-glow",
          isOpen && "h-40 md:h-56 shadow-xl shadow-caramel-500/60 dark:shadow-caramel-700/60"
        )}
        aria-label="Click to view skills"
        title="Click to view skills"
      >
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap pointer-events-none",
            "font-mono text-xs font-bold text-caramel-700 dark:text-caramel-300",
            isOpen ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2 md:top-3 opacity-60 group-hover:opacity-100"
          )}
        >
          <span className={cn(isOpen ? "block" : "hidden")}>SKILLS</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 font-mono text-[10px] font-bold text-caramel-700 dark:text-caramel-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          CLICK ME
        </div>
      </button>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots-delay-400"></div>
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-caramel-500 dark:bg-caramel-400 rounded-full animate-float-dots opacity-40"></div>
      </div>

      {isOpen && (
        <div
          className="absolute left-6 md:left-8 top-0 z-50 animate-slide-in-left"
        >
          <div className="flex flex-wrap gap-2 md:gap-3 max-w-xs md:max-w-md">
            {selectedSkills.size > 0 && (
              <button
                onClick={onClear}
                className="px-3 py-1.5 text-xs font-mono bg-caramel-900 dark:bg-caramel-100 text-caramel-100 dark:text-caramel-900 border border-caramel-900 dark:border-caramel-100 rounded-md whitespace-nowrap hover:bg-caramel-800 dark:hover:bg-caramel-200 transition-all duration-300"
              >
                Clear
              </button>
            )}
            {CORE_SKILLS.map((skill) => {
              const isSelected = selectedSkills.has(skill)
              return (
                <button
                  key={skill}
                  onClick={() => onSkillToggle(skill)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono rounded-md whitespace-nowrap transition-all duration-300 border",
                    isSelected
                      ? "bg-caramel-500 dark:bg-caramel-500 text-caramel-50 border-caramel-500"
                      : "bg-caramel-100/80 dark:bg-caramel-900/40 text-caramel-700 dark:text-caramel-300 border-caramel-300/60 dark:border-caramel-600/40 hover:bg-caramel-200/80 dark:hover:bg-caramel-900/60"
                  )}
                >
                  {skill}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 rounded-full blur-lg opacity-0 transition-opacity duration-500 pointer-events-none",
          "bg-linear-to-b from-orange-400 via-orange-500 to-orange-700 dark:from-orange-500 dark:via-orange-600 dark:to-orange-800",
          isOpen && "opacity-30"
        )}
      />
    </div>
  )
}

