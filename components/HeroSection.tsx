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
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-32">
      <div className="grid-bg fixed inset-0 -z-10" aria-hidden="true" />
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <div className="text-orange-500 h-8">
          <SplitFlapText text={GREETING} />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-[var(--font-bebas)] text-neutral-950 dark:text-neutral-50 tracking-tight leading-tight">
            {HEADLINE}
          </h1>
        </div>
        <p className="font-mono text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          {DESCRIPTION}
        </p>
        <div className="flex flex-row items-center gap-6 mt-4">
          {CTA_BUTTONS.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`font-mono text-sm px-6 py-3 transition-all duration-300 ${
                button.variant === "primary"
                  ? "border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500/10 dark:hover:bg-orange-500/20"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400"
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