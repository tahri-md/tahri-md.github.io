"use client"

import { useEffect } from "react"
import SplitFlapText from "./SplitFlapText"
import gsap from "gsap"
import { useRef } from "react"

export default function NewHeroSection() {
    const heroRef = useRef<HTMLDivElement>(null)
    const diskRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!heroRef.current) return
        
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from("h1", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out"
            })
            tl.from(".hero-image", {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")

            if (diskRef.current) {
                gsap.to(diskRef.current, {
                    rotation: 360,
                    duration: 20,
                    repeat: -1,
                    ease: "none"
                })
            }
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div 
            ref={heroRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-caramel-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-caramel-500/3 rounded-full blur-3xl -z-10" />

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center order-2 md:order-1 space-y-6">
                    <div>
                        <h1 className="text-7xl sm:text-8xl md:text-9xl font-(--font-bebas) tracking-tight text-caramel-100 drop-shadow-lg text-left">
                            <SplitFlapText text="Hi, I'm Tahri" />
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <p className="text-base md:text-lg text-caramel-400 leading-relaxed">
                            Full-Stack Developer
                        </p>
                        <p className="text-sm md:text-base text-caramel-300 leading-relaxed max-w-md">
                            Building scalable systems, elegant interfaces, and everything in between. I turn complex problems into elegant solutions.
                        </p>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => {
                                const workSection = document.getElementById('work-section')
                                workSection?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="inline-flex items-center px-6 py-3 border border-caramel-600 text-caramel-100 hover:border-caramel-400 hover:bg-caramel-500/10 transition-all duration-300 group"
                        >
                            View My Work
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                <div className="hero-image flex items-center justify-center order-1 md:order-2">
                    <div 
                        ref={diskRef}
                        className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 border-8 border-caramel-900 rounded-full shadow-inner" />
                        
                        <div className="absolute inset-4 border-2 border-caramel-800/30 rounded-full" />
                        <div className="absolute inset-8 border border-caramel-800/20 rounded-full" />

                        <div className="absolute inset-0 bg-linear-to-br from-black to-caramel-900/40" />
                        
                        <img
                            src="cover.png"
                            alt="Hero Disk"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-caramel-500 to-caramel-700 rounded-full flex items-center justify-center z-10 shadow-lg">
                            <div className="text-center">
                                <p className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                                    Tahri
                                </p>
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full mx-auto mt-2" />
                            </div>
                        </div>

                        <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(212,162,71,0.2)] hover:shadow-[0_0_60px_rgba(212,162,71,0.4)] transition-shadow duration-300" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xs uppercase tracking-widest text-caramel-600 mb-3">
                    Scroll to explore
                </p>
                <div className="flex items-center justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-caramel-500 to-transparent" />
                </div>
            </div>
        </div>
    )
}