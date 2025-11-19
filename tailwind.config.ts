import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand yellow (buttons, accents, etc.)
        primary: {
          DEFAULT: "#f8AE00",
          dark: "#E5A513",
          foreground: "#1F2937",
        },

        // Accent can reuse primary for now
        accent: {
          DEFAULT: "#FDB714",
          foreground: "#1F2937",
        },

        // Backgrounds
        background: {
          DEFAULT: "#FFFFFF",   // page background / cards
          dark: "#444547",      // dark band under hero, footer, etc.
          darker: "#212529",
        },

        // Card styling (used by shadcn-style components)
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },

        // Borders & inputs
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#FDB714",

        // Muted surfaces (light grey sections, chips, etc.)
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },

        // Text helpers
        foreground: "#111827", // used by `text-foreground` (body text)
        text: {
          primary: "#1F2937",
          secondary: "#6B7280",
          white: "#FFFFFF",
        },

        // Destructive / error
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["'Fira Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
