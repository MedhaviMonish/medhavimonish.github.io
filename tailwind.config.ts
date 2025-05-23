import type { Config } from "tailwindcss";

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
        ember: '#ff6b00',
        iron: '#1a1a1a',
        soot: '#0f0f0f',
        steel: '#2d2d2d',
        pale: '#f4f4f5',
      },
    },
  },
  plugins: [],
} satisfies Config;
