"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import { animateInFromLeft } from "@/lib/animations"
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
  sectionRef: React.RefObject<HTMLElement>,
  headerRef: React.RefObject<HTMLDivElement>,
  principlesRef: React.RefObject<HTMLDivElement>
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
  ref: React.RefObject<HTMLDivElement>
  label: string
  title: string
}

function SectionHeader({ ref, title }: SectionHeaderProps) {
  return (
    <div ref={ref} className="mb-24">
      <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
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
      <span className="font-mono text-xs uppercase tracking-widest text-orange-500 mb-6">
        {principle.number} / {firstWord}
      </span>

      <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none text-neutral-950 dark:text-neutral-50">
        {principle.titleParts.map((part, i) =>
          part.highlight ? (
            <HighlightText key={i} parallaxSpeed={0.6}>
              {part.text}
            </HighlightText>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </h3>

      <p className="mt-8 max-w-md font-mono text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {principle.description}
      </p>

      <div className="mt-10 h-[1px] bg-neutral-300 dark:bg-neutral-700 w-24 md:w-48" style={{ [isRight ? "marginRight" : "marginLeft"]: 0 }} />
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
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto pl-0 md:pl-12">
        <SectionHeader ref={headerRef} title={SECTION_TITLE} />

        <div ref={principlesRef} className="space-y-28 md:space-y-32">
          {PRINCIPLES.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  )
}