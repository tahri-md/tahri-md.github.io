import SplitFlapText from "./SplitFlapText";

export default function HeroSection() {
    return (
         <div className="flex flex-col justify-center w-full min-h-screen p-6 gap-12">
                   <div className="grid-bg fixed inset-0" aria-hidden="true" />
       
               <div className="text-orange-500">
                 <SplitFlapText text="Hi, I'm Tahri" />
               </div>
               <h2 className="text-4xl text-neutral-700 text-muted-foreground/60 tracking-wide ">Crafting Experiences. Building Products.</h2>
       
               <p className="font-mono text-neutral-500 max-w-md leading-relaxed text-muted-foreground">I design and build digital experiences that merge thoughtful design with robust engineering. Each project represents meticulous attention to detail, accessibility, and performance.</p>
       
             <div className="flex flex-row items-center gap-4 mt-6 text-neutral-500">
                 <a className="border border-2 px-4 py-2 font-mono hover:border-teal-500 hover:text-teal-500 transition-colors duration-300 ">View Work</a>
                 <a className="font-mono  hover:text-white">About Me</a>
             </div>
           </div>
    )
} 