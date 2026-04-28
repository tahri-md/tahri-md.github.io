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
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots"></div>
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots-delay-400 opacity-40"></div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-1 md:w-1.5 h-24 md:h-32 rounded-full transition-all duration-500 cursor-pointer animate-pulse relative group",
          "bg-linear-to-b from-red-300 via-red-500 to-red-700 dark:from-red-400 dark:via-red-600 dark:to-red-800",
          "hover:shadow-lg hover:shadow-red-500/50 dark:hover:shadow-red-700/50",
          "animate-pulse-glow",
          isOpen && "h-40 md:h-56 shadow-xl shadow-red-500/60 dark:shadow-red-700/60"
        )}
        aria-label="Click to view skills"
        title="Click to view skills"
      >
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap pointer-events-none",
            "font-mono text-xs font-bold text-red-700 dark:text-red-300",
            isOpen ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2 md:top-3 opacity-60 group-hover:opacity-100"
          )}
        >
          <span className={cn(isOpen ? "block" : "hidden")}>SKILLS</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 font-mono text-[10px] font-bold text-red-700 dark:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          CLICK ME
        </div>
      </button>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots-delay-400"></div>
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full animate-float-dots opacity-40"></div>
      </div>

      {isOpen && (
        <div
          className="absolute left-6 md:left-8 top-0 z-50 animate-slide-in-left"
        >
          <div className="flex flex-wrap gap-2 md:gap-3 max-w-xs md:max-w-md">
            {selectedSkills.size > 0 && (
              <button
                onClick={onClear}
                className="px-3 py-1.5 text-xs font-mono bg-red-900 dark:bg-red-100 text-red-100 dark:text-red-900 border border-red-900 dark:border-red-100 rounded-md whitespace-nowrap hover:bg-red-800 dark:hover:bg-red-200 transition-all duration-300"
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
                      ? "bg-red-500 dark:bg-red-500 text-red-50 border-red-500"
                      : "bg-red-100/80 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-300/60 dark:border-red-600/40 hover:bg-red-200/80 dark:hover:bg-red-900/60"
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
          isOpen && "opacity-10"
        )}
      />
    </div>
  )
}

