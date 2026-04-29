"use client"

import { cn } from "@/utils/utils"

interface ToastProps {
  message: string
  isVisible: boolean
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 px-4 py-3 rounded-sm font-mono text-sm transition-all duration-300 pointer-events-none",
        "bg-error/15 text-error",
        "border border-error",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-error shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        {message}
      </div>
    </div>
  )
}
