/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          primary: "#0a0a0a",
          secondary: "#1a1a1a",
          tertiary: "#2a2a2a",
        },
        accent: {
          blue: "#00d4ff",
          purple: "#9333ea",
          green: "#10b981",
          neon: "#39ff14",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "web3-gradient": "linear-gradient(135deg, #00d4ff 0%, #9333ea 50%, #10b981 100%)",
        "web3-gradient-hover": "linear-gradient(135deg, #39ff14 0%, #00d4ff 50%, #9333ea 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(147, 51, 234, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "glow-neon": "0 0 30px rgba(57, 255, 20, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

