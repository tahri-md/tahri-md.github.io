"use client"

import { useRef, useEffect } from "react"
import { animateInFromLeft, animateInFromBottom, animateInSlight } from "../lib/animations"
import gsap from "gsap"

const SECTION_LABEL = "05 / Contact"
const SECTION_TITLE = "LET'S WORK TOGETHER"
const CONTACT_LINKS = [
  { label: "Email", href: "mailto:tahrimedamine00@gmail.com" },
  { label: "GitHub", href: "https://github.com/tahri-md", external: true },
]

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      animateInFromLeft(headerRef.current)
      animateInFromBottom(gridRef.current?.querySelectorAll(":scope > div") ?? null, 0.1)
      animateInSlight(footerRef.current)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12 sm:mb-16 md:mb-20">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-orange-500">
            {SECTION_LABEL}
          </span>
          <h2 className="mt-3 sm:mt-4 md:mt-6 font-[var(--font-bebas)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
            {SECTION_TITLE}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="col-span-1">
            <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-orange-500 mb-3 sm:mb-4 md:mb-6">
              Reach Out
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-orange-500 mb-3 sm:mb-4 md:mb-6">
              Status
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">Open to</li>
              <li className="font-mono text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-medium">Opportunities</li>
            </ul>
          </div>
        </div>

        <div
          ref={footerRef}
          className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 sm:gap-4 md:items-center md:justify-between md:gap-6 md:flex-row"
        >
          <p className="font-mono text-[9px] sm:text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
            © 2026 Tahri. All rights reserved.
          </p>
          <p className="font-mono text-[9px] sm:text-xs text-neutral-600 dark:text-neutral-400">
            Built with Next.js, Tailwind & GSAP.
          </p>
        </div>
      </div>
    </section>
  )
}