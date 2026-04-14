import { AboutSection } from "@/components/AboutSection"

export const metadata = {
  title: "About | Tahri",
  description: "Learn more about Tahri, a full-stack developer passionate about building scalable systems and elegant interfaces."
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
    </main>
  )
}
