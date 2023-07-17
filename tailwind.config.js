/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {},
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [require("daisyui"),
  require('@tailwindcss/aspect-ratio')
  ],
  
  daisyui: {
    themes: [
      {
        cornellDark: {
          "primary": "#fda4af",
          "secondary": "#f0abfc",
          "accent": "#e879f9",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#d1d5db",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        cornellLight: {
          "primary": "#f43f5e",
          "secondary": "#f472b6",
          "accent": "#a855f7",
          "neutral": "#1f2333",
          "base-100": "#faf9fb",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#f8ca6d",
          "error": "#be123c",
        },
      },
    ],
    darkTheme: "cornellDark",
  },
};
