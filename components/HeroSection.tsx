import SplitFlapText from "./SplitFlapText"

const GREETING = "Hi, I'm Tahri"
const HEADLINE = "Crafting Experiences. Building Products."
const DESCRIPTION = "I design and build digital experiences that merge thoughtful design with robust engineering. Each project represents meticulous attention to detail, accessibility, and performance."

const CTA_BUTTONS = [
  { label: "View Work", href: "#projects", variant: "primary" },
  { label: "About Me", href: "#approach", variant: "secondary" },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-28 py-20">
      <div className="grid-bg fixed inset-0 -z-10" aria-hidden="true" />
      <div className="flex flex-col gap-16 max-w-5xl">
        <div className="text-orange-500">
          <SplitFlapText text={GREETING} />
        </div>
        <h2 className="text-5xl md:text-7xl font-[var(--font-bebas)] text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
          {HEADLINE}
        </h2>
        <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
          {DESCRIPTION}
        </p>
        <div className="flex flex-row items-center gap-4 mt-8">
          {CTA_BUTTONS.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`font-mono text-sm px-4 py-2 transition-all duration-300 ${
                button.variant === "primary"
                  ? "border-2 border-neutral-400 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 hover:border-teal-500 hover:text-teal-500"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-teal-500 dark:hover:text-teal-500"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 