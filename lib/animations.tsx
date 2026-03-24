import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animateInFromLeft = (element: HTMLElement | null) => {
  if (!element) return

  gsap.from(element, {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  })
}

export const animateInFromBottom = (elements: NodeListOf<Element> | null, stagger = 0.1) => {
  if (!elements) return

  gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements[0],
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  })
}

export const animateInSlight = (element: HTMLElement | null) => {
  if (!element) return

  gsap.from(element, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  })
}

export const parallaxY = (element: HTMLElement | null, speed = 0.3) => {
  if (!element) return

  gsap.to(element, {
    yPercent: -20 * speed,
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  })
}