"use client"

import { useState } from "react"
import { ColophonSection } from "@/components/colophon-section"
import HeroSection from "@/components/HeroSection"
import { PrinciplesSection } from "@/components/principles-section"
import SkillsSection from "@/components/SkillsSection"
import WorkSection from "@/components/WorkSection"

export default function Home() {
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set())

  const handleSkillToggle = (skill: string) => {
    const newSelected = new Set(selectedSkills)
    if (newSelected.has(skill)) {
      newSelected.delete(skill)
    } else {
      newSelected.add(skill)
    }
    setSelectedSkills(newSelected)
  }

  const handleClearSkills = () => {
    setSelectedSkills(new Set())
  }

  return (
    <div>
      <HeroSection />
      <div className="relative">
        <div className="absolute left-6 md:left-12 lg:left-16 top-0 bottom-0 flex items-center z-40">
          <SkillsSection
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            onClear={handleClearSkills}
          />
        </div>
        <WorkSection selectedSkills={selectedSkills} />
      </div>
      <PrinciplesSection />
      <ColophonSection />
    </div>
  )
}