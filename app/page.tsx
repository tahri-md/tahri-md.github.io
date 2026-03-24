import HeroSection from "@/components/HeroSection";
import { PrinciplesSection } from "@/components/principles-section";
import SplitFlapText from "@/components/SplitFlapText";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <PrinciplesSection />
    </div>
  )
}