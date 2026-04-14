"use client"

import HeroSection from "@/components/HeroSection"
import WorkSection from "@/components/WorkSection"
import Discography from "@/components/Discography"
import { AboutSection } from "@/components/AboutSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <Discography />
      <AboutSection />
      <Footer />
    </div>
  )
}