import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Manually define colors to avoid deprecated color warnings and forbidden colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      stone: colors.stone,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      zinc: colors.zinc,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-surface": "var(--bg-surface)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-faint": "var(--fg-faint)",
        accent: "var(--accent)",
        "accent-warm": "var(--accent-warm)",
        themeborder: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      spacing: {
        'header': 'var(--header-height)',
      }
    },
  },
  plugins: [],
};
export default config;
