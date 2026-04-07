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
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots"></div>
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots-delay-400 opacity-40"></div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-1 md:w-1.5 h-24 md:h-32 rounded-full transition-all duration-500 cursor-pointer animate-pulse relative group",
          "bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 dark:from-purple-500 dark:via-purple-600 dark:to-purple-700",
          "hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-600/50",
          "animate-pulse-glow",
          isOpen && "h-40 md:h-56 shadow-xl shadow-purple-500/60 dark:shadow-purple-600/60"
        )}
        aria-label="Click to view skills"
        title="Click to view skills"
      >
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap pointer-events-none",
            "font-mono text-xs font-bold text-purple-600 dark:text-purple-400",
            isOpen ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2 md:top-3 opacity-60 group-hover:opacity-100"
          )}
        >
          <span className={cn(isOpen ? "block" : "hidden")}>SKILLS</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 font-mono text-[10px] font-bold text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          CLICK ME
        </div>
      </button>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots-delay-400"></div>
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-dots opacity-40"></div>
      </div>

      {isOpen && (
        <div
          className="absolute left-6 md:left-8 top-0 z-50 animate-slide-in-left"
        >
          <div className="flex flex-wrap gap-2 md:gap-3 max-w-xs md:max-w-md">
            {selectedSkills.size > 0 && (
              <button
                onClick={onClear}
                className="px-3 py-1.5 text-xs font-mono bg-neutral-950 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-950 border border-neutral-950 dark:border-neutral-50 rounded-md whitespace-nowrap hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300"
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
                      ? "bg-purple-500 dark:bg-purple-500 text-white border-purple-500"
                      : "bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-300/60 dark:border-purple-600/40 hover:bg-purple-200/80 dark:hover:bg-purple-900/60"
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
          "bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 dark:from-purple-500 dark:via-purple-600 dark:to-purple-700",
          isOpen && "opacity-30"
        )}
      />
    </div>
  )
}

