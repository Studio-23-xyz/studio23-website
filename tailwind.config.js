/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate_gray: "#1b222c",
        fiery_black: "#12151c",
        crimson_red: "#661b1c",
        brick_red: "#531516",
        studio_blue: "#0097CB",
        footer_black: "#070707",
        silent2_red: "#FF1F00",
        silent2_button_text: "#260202",
      },
      backgroundImage: {
        'ss2-button-bg': "url('/assets/ss2-button1.png')",
        'ss2-banner-ls': "url('/assets/ss2-back-banner-ls.png')",
        'ss2-banner-ms': "url('/assets/ss2-back-banner-ms.png')",
        'ss2-banner-lm': "url('/assets/ss2-back-banner-lm.png')",
        'ss2-banner-mm': "url('/assets/ss2-back-banner-mm.png')",
      },
    },
  },
  plugins: [],
};
