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
      className="relative py-32 px-6 md:px-12 lg:px-28 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-500">
          {SECTION_LABEL}
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          {SECTION_TITLE}
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-orange-500 mb-4">
            Reach Out
          </h4>
          <ul className="space-y-2">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-xs text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-500 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-orange-500 mb-4">
            Status
          </h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-neutral-600 dark:text-neutral-400">Open to</li>
            <li className="font-mono text-xs text-orange-500">Opportunities</li>
          </ul>
        </div>
      </div>

      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
          © 2026 Tahri. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-neutral-500">
          Built with Next.js, Tailwind & GSAP.
        </p>
      </div>
    </section>
  )
}