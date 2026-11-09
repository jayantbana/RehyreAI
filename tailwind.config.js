import animate from "tailwindcss-animate"
import containerQueries from "@tailwindcss/container-queries"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Brand palette — raw values live in src/index.css
        brand: {
          900: "hsl(var(--brand-900))", // #3E3239
          700: "hsl(var(--brand-700))", // #6B5560
          500: "hsl(var(--brand-500))", // #9E8189
          300: "hsl(var(--brand-300))", // #C7A9A3
          200: "hsl(var(--brand-200))", // #E8D2C4
          50: "hsl(var(--brand-50))",   // #F7EFE7
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Cambria", '"Times New Roman"', "serif"],
        sans: ['"Source Sans 3"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      // Major-third scale (1.25), fluid at the display end
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.4" }],
        "2xl": ["1.5625rem", { lineHeight: "1.25" }],
        "3xl": ["clamp(1.75rem, 1.4rem + 1.4vw, 2.4375rem)", { lineHeight: "1.15" }],
        "4xl": ["clamp(2.125rem, 1.5rem + 2.6vw, 3.25rem)", { lineHeight: "1.1" }],
        "5xl": ["clamp(2.5rem, 1.6rem + 3.6vw, 4rem)", { lineHeight: "1.05" }],
      },
      maxWidth: {
        prose: "62ch",
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
        "page-enter": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "page-enter": "page-enter 0.4s cubic-bezier(0.23, 1, 0.32, 1) both",
      },
    },
  },
  plugins: [animate, containerQueries],
}
