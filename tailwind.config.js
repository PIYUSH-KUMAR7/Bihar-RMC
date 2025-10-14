/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        "neutral-dark": "var(--neutral-dark)",
        "neutral-gray": "var(--neutral-gray)",
        "primary-orange": "var(--primary-orange)",
        "secondary-orange": "var(--secondary-orange)",
        "accent-peach": "var(--accent-peach)",
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
}

