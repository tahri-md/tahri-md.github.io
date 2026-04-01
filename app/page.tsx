import { ColophonSection } from "@/components/colophon-section";
import HeroSection from "@/components/HeroSection";
import { PrinciplesSection } from "@/components/principles-section";
import SplitFlapText from "@/components/SplitFlapText";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="relative">
        <div className="absolute left-6 md:left-12 lg:left-16 top-0 bottom-0 flex items-center z-40">
          <SkillsSection />
        </div>
        <WorkSection />
      </div>
      <PrinciplesSection />
      <ColophonSection />
    </div>
  )
}