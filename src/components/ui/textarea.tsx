import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-xl border border-[var(--glass-component-border)] bg-[var(--input-bg)] px-3 py-2 text-sm placeholder:text-muted-foreground/60 transition-all duration-200 focus-visible:outline-none focus-visible:border-[var(--input-border-focus)] focus-visible:shadow-[var(--input-shadow-focus)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
