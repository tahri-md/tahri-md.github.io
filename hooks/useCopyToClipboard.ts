import { useState, useCallback, useEffect, useRef } from "react"

export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setIsCopied(false)
        }, timeout)

        return true
      } catch {
        setIsCopied(false)
        return undefined
      }
    },
    [timeout]
  )

  return { copy, isCopied }
}
