"use client"
import { useEffect, useState } from "react"
export default function SplitFlapText({text}:{text:string}) {
        return (
            <div className="flex flex-row gap-2">
                {text.split("").map((char, index) => (
                    <SplitFlapChar key={index} char={char} duration={2000 + index * 100} intervalSpeed={50} />
                ))}
            </div>
        )
}


  function SplitFlapChar({char,duration=2000,intervalSpeed=50}:{char?:string,duration?:number,intervalSpeed?:number}) {
    const [currentChar, setCurrentChar] = useState("")
    const [isSettled, setIsSettled] = useState(true)
    const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
    useEffect(() => {
        let elasped = 0
        const interval = setInterval(() => {
             elasped+=intervalSpeed

          const randomChar = CHARSET[Math.floor(Math.random() * CHARSET.length)]
            setCurrentChar(randomChar)
            if (elasped >= duration) {
                clearInterval(interval)
                setCurrentChar(char || "")
                setIsSettled(true)
            }
        }, intervalSpeed)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className="text-4xl font-mono">
            {currentChar}
        </div>
    )
}