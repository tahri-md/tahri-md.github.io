"use client"

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-800 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-brand-600">
          <p>© 2026 Tahri. All rights reserved.</p>
          <p>Designed & built with Next.js, Tailwind & GSAP</p>
        </div>
      </div>
    </footer>
  )
}
