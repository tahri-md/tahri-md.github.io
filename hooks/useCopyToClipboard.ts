import { useState, useCallback } from "react"

export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        const timer = setTimeout(() => {
          setIsCopied(false)
        }, timeout)

        return () => clearTimeout(timer)
      } catch (err) {
        return undefined
      }
    },
    [timeout]
  )

  return { copy, isCopied }
}
