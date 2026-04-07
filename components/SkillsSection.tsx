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
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots"></div>
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots-delay-400 opacity-40"></div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-1 md:w-1.5 h-24 md:h-32 rounded-full transition-all duration-500 cursor-pointer animate-pulse relative group",
          "bg-gradient-to-b from-yellow-400 via-amber-500 to-amber-600 dark:from-amber-500 dark:via-amber-600 dark:to-yellow-700",
          "hover:shadow-lg hover:shadow-amber-500/50 dark:hover:shadow-amber-600/50",
          "animate-pulse-glow",
          isOpen && "h-40 md:h-56 shadow-xl shadow-amber-500/60 dark:shadow-amber-600/60"
        )}
        aria-label="Click to view skills"
        title="Click to view skills"
      >
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap pointer-events-none",
            "font-mono text-xs font-bold text-amber-600 dark:text-amber-400",
            isOpen ? "top-1/2 -translate-y-1/2 opacity-100" : "top-2 md:top-3 opacity-60 group-hover:opacity-100"
          )}
        >
          <span className={cn(isOpen ? "block" : "hidden")}>SKILLS</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          CLICK ME
        </div>
      </button>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots-delay-400"></div>
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots-delay-200 opacity-70"></div>
        <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-float-dots opacity-40"></div>
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
                      ? "bg-amber-500 dark:bg-amber-500 text-white border-amber-500"
                      : "bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-300/60 dark:border-amber-600/40 hover:bg-amber-200/80 dark:hover:bg-amber-900/60"
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
          "bg-gradient-to-b from-yellow-400 via-amber-500 to-amber-600 dark:from-amber-500 dark:via-amber-600 dark:to-yellow-700",
          isOpen && "opacity-30"
        )}
      />
    </div>
  )
}

