"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import { animateInFromLeft } from "@/lib/animations"
import { cn } from "@/utils/utils"
import gsap from "gsap"

interface TitlePart {
  text: string
  highlight: boolean
}

interface Principle {
  number: string
  titleParts: TitlePart[]
  description: string
  align: "left" | "right"
}

const SECTION_TITLE = "MY APPROACH"
const SECTION_ID = "approach"

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    titleParts: [
      { text: "FULL STACK", highlight: true },
      { text: " ENGINEERING", highlight: false },
    ],
    description: "From backend systems to frontend interfaces. I build complete solutions that scale, leveraging Spring Boot, Node.js, and modern frameworks.",
    align: "left",
  },
  {
    number: "02",
    titleParts: [
      { text: "DISTRIBUTED", highlight: true },
      { text: " SYSTEMS", highlight: false },
    ],
    description: "Designing resilient architectures with microservices, caching layers, and job scheduling. Building systems that handle real-world complexity.",
    align: "right",
  },
  {
    number: "03",
    titleParts: [
      { text: "DATA-", highlight: false },
      { text: "DRIVEN", highlight: true },
    ],
    description: "Leveraging AI and machine learning for intelligent solutions. From OCR pipelines to optimization algorithms, data informs every decision.",
    align: "left",
  },
  {
    number: "04",
    titleParts: [
      { text: "CLEAN ", highlight: false },
      { text: "CODE", highlight: true },
    ],
    description: "Writing maintainable, well-documented code that others can build upon. Quality over shortcuts, always.",
    align: "right",
  },
]

function useAnimatePrinciples(
  sectionRef: React.RefObject<HTMLElement | null>,
  headerRef: React.RefObject<HTMLDivElement | null>,
  principlesRef: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      animateInFromLeft(headerRef.current)
      animateArticles(principlesRef.current)
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, headerRef, principlesRef])
}

function animateArticles(container: HTMLElement | null) {
  if (!container) return

  const articles = container.querySelectorAll("article")
  articles.forEach((article, index) => {
    const isRight = PRINCIPLES[index].align === "right"
    gsap.from(article, {
      x: isRight ? 80 : -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: article,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    })
  })
}

interface SectionHeaderProps {
  ref: React.RefObject<HTMLDivElement | null>
  title: string
}

function SectionHeader({ ref, title }: SectionHeaderProps) {
  return (
    <div ref={ref} className="mb-16 sm:mb-20 md:mb-24">
      <h2 className="font-(--font-bebas) text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-caramel-900 dark:text-caramel-100 leading-tight">
        {title}
      </h2>
    </div>
  )
}

interface PrincipleCardProps {
  principle: Principle
}

function PrincipleCard({ principle }: PrincipleCardProps) {
  const isRight = principle.align === "right"
  const firstWord = principle.titleParts[0].text.split(" ")[0]

  return (
    <article className={`flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"}`}>
      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-caramel-500 mb-3 sm:mb-4 md:mb-6">
        {principle.number} / {firstWord}
      </span>

      <h3 className="font-(--font-bebas) text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-tight text-caramel-900 dark:text-caramel-100">
        {principle.titleParts.map((part, i) =>
          part.highlight ? (
            <HighlightText key={i} parallaxSpeed={0.6} highlightColor="bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400">
              {part.text}
            </HighlightText>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </h3>

      <p className="mt-4 sm:mt-6 md:mt-8 max-w-lg font-mono text-xs sm:text-sm md:text-base text-caramel-700 dark:text-caramel-300 leading-relaxed">
        {principle.description}
      </p>

      <div className={cn("mt-6 sm:mt-8 md:mt-10 h-px bg-caramel-300 dark:bg-caramel-700 w-16 sm:w-20 md:w-24 lg:w-48", isRight ? "mr-0" : "ml-0")} />
    </article>
  )
}

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  useAnimatePrinciples(sectionRef, headerRef, principlesRef)

  return (
    <section
      ref={sectionRef}
      id={SECTION_ID}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className="max-w-7xl mx-auto pl-0 md:pl-8 lg:pl-12">
        <SectionHeader ref={headerRef} title={SECTION_TITLE} />

        <div ref={principlesRef} className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">
          {PRINCIPLES.map((principle) => (
            <PrincipleCard key={principle.number} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  )
}