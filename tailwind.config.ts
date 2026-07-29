import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          faint: "#F7FAFF",
          wash: "#EFF6FF",
          bright: "#3B82F6",
          DEFAULT: "#2563EB",
          deep: "#1746A2",
        },
        ink: "#111827",
        body: "#5F6B7A",
        line: "#E5EAF0",
        success: "#16A34A",
        warning: "#F59E0B",
        app: {
          mail: "#2563EB",
          chat: "#8B5CF6",
          meetings: "#059669",
          calendar: "#F97316",
          drive: "#0D9488",
          documents: "#3B82F6",
          sheets: "#16A34A",
          presentations: "#F59E0B",
          tasks: "#7C3AED",
          notes: "#CA8A04",
          directory: "#0284C7",
          search: "#6366F1",
          ai: "#6D5AE6",
        },
      },
      fontFamily: {
        sans: [
          '"Google Sans"',
          '"Product Sans"',
          "var(--font-inter)",
          "Inter",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        hero: [
          "clamp(2.75rem, 5.5vw, 4.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        display: [
          "clamp(2.125rem, 4vw, 3.25rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        heading: [
          "clamp(1.625rem, 2.6vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        lead: ["1.1875rem", { lineHeight: "1.65" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 24, 39, 0.04), 0 4px 16px rgba(17, 24, 39, 0.05)",
        "card-hover":
          "0 2px 4px rgba(17, 24, 39, 0.05), 0 12px 32px rgba(17, 24, 39, 0.09)",
        panel:
          "0 1px 3px rgba(17, 24, 39, 0.05), 0 24px 64px -12px rgba(23, 70, 162, 0.14)",
        menu: "0 2px 8px rgba(17, 24, 39, 0.04), 0 20px 48px -12px rgba(17, 24, 39, 0.14)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      animation: {
        "orb-slow": "orb 18s ease-in-out infinite",
        "orb-slower": "orb 26s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 42s linear infinite",
      },
      keyframes: {
        orb: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.06)" },
          "66%": { transform: "translate(-5%, 4%) scale(0.96)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.35)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
