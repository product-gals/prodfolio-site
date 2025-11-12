
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand Colors
        navy: {
          DEFAULT: "#100D22",
          light: "#1E1B35",
          dark: "#0A0814",
        },
        purple: {
          DEFAULT: "#9E85F9",
          secondary: "#484689",
          light: "#D6CEFF",
          dark: "#3D3770",
        },
        coral: {
          DEFAULT: "#FF8B7B",
          light: "#FFB4A8",
          dark: "#FF6B58",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"], // Body text
        display: ["Poppins", "Inter", "sans-serif"], // Headings/UI
        serif: ["Playfair Display", "Georgia", "serif"], // Elegant headlines
        heading: ["Poppins", "Inter", "sans-serif"], // Alias for headings
        body: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"], // Alias for body text
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(158, 133, 249, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(158, 133, 249, 0.5)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scale-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "glow": "glow 3s ease-in-out infinite",
      },
      backdropBlur: {
        'glass': '20px',
        'glass-sm': '12px',
        'glass-lg': '32px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(254 91% 75%) 0%, hsl(248 31% 41%) 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, hsla(254, 91%, 75%, 0.08) 0px, transparent 50%), radial-gradient(at 80% 70%, hsla(6, 100%, 74%, 0.06) 0px, transparent 50%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
