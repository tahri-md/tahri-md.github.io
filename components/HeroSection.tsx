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
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="grid-bg fixed inset-0 -z-10" aria-hidden="true" />
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 sm:gap-10 md:gap-12 relative z-10">
        <div className="text-caramel-500 h-6 sm:h-7 md:h-8">
          <SplitFlapText text={GREETING} />
        </div>
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-(--font-bebas) text-caramel-900 dark:text-caramel-100 tracking-tight leading-tight">
            {HEADLINE}
          </h1>
        </div>
        <p className="font-mono text-xs sm:text-sm md:text-base text-caramel-700 dark:text-caramel-300 max-w-2xl leading-relaxed">
          {DESCRIPTION}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
          {CTA_BUTTONS.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`font-mono text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 w-full sm:w-auto text-center sm:text-left ${
                button.variant === "primary"
                  ? "border-2 border-caramel-500 text-caramel-600 dark:text-caramel-300 hover:bg-caramel-500/10 dark:hover:bg-caramel-500/20"
                  : "text-caramel-700 dark:text-caramel-300 hover:text-caramel-600 dark:hover:text-caramel-200"
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