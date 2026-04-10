"use client"

import { useEffect, useState } from "react"

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

export default function SplitFlapText({ text }: { text: string }) {
  return (
    <div className="flex flex-row gap-2">
      {text.split("").map((char, index) => (
        <SplitFlapChar
          key={`${char}-${index}`}
          char={char}
          duration={2000 + index * 100}
          intervalSpeed={50}
        />
      ))}
    </div>
  )
}

function SplitFlapChar({
  char,
  duration = 2000,
  intervalSpeed = 50,
}: {
  char?: string
  duration?: number
  intervalSpeed?: number
}) {
  const [currentChar, setCurrentChar] = useState("")

  useEffect(() => {
    let elapsed = 0

    const interval = setInterval(() => {
      elapsed += intervalSpeed
      const randomChar = CHARSET[Math.floor(Math.random() * CHARSET.length)]
      setCurrentChar(randomChar)

      if (elapsed >= duration) {
        clearInterval(interval)
        setCurrentChar(char ?? "")
      }
    }, intervalSpeed)

    return () => clearInterval(interval)
  }, [char, duration, intervalSpeed])

  return <div className="text-4xl font-mono">{currentChar}</div>
}
