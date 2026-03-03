import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-[0_4px_16px_hsl(var(--primary)/0.3)] hover:-translate-y-px active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/85 hover:shadow-[0_4px_16px_hsl(var(--destructive)/0.3)]",
        outline:
          "border border-[var(--glass-component-border)] bg-[var(--glass-component-bg)] backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_2px_12px_hsl(var(--primary)/0.1)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 hover:shadow-[0_2px_12px_hsl(var(--secondary)/0.2)]",
        ghost: "hover:bg-primary/5 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline decoration-primary/40",
        orange: "bg-accent text-accent-foreground",
        gradient: "bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(125,52,255,0.39)]",
        outlinePremium: "border-2 border-primary/20 bg-white/90 backdrop-blur-sm text-primary hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_4px_16px_hsl(var(--primary)/0.15)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
