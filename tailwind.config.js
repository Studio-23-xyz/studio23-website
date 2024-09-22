/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/swiper/**/*.{js,ts,jsx,tsx}", // Include Swiper's components
  ],
  theme: {
    extend: {
      colors: {
        slate_gray: "#1b222c",
        fiery_black: "#12151c",
        mordern_black: "#151515",
        crimson_red: "#661b1c",
        brick_red: "#531516",
        studio_blue: "#0097CB",
        footer_black: "#070707",
        silent2_red: "#FF1F00",
        silent2_button_text: "#260202",
        main_gradient_Color1: "#002E3E",
        main_gradient_Color2: "#000000",
        button_presskit_color: '#EE1D52',
      },
      backgroundImage: {
        "titles-hero":
          "url('../../public/assets/titles-page/titlespagehero.png')",
        "home-titles-controloverride":
          "url('../../public/assets/home-page/control_override.png')",
        "home-titles-westwood":
          "url('../../public/assets/home-page/westwood-home.png')",
        "home-titles-highnoon":
          "url('../../public/assets/home-page/highnoon-home.png')",
        "ss2-button-bg":
          "url('../../public/assets/ss2-game-page/ss2-button1.png')",
        "ss2-ss-full-bg":
          "url('../../public/assets/ss2-game-page/ss2-ss-full-bg.png')",
        "ss2-ss-small-bg1":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg1.png')",
        "ss2-ss-small-bg2":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg2.png')",
        "ss2-ss-small-bg3":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg3.png')",
        "ss2-ss-small-bg4":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg4.png')",
        "ss2-ss-small-bg5":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg5.png')",
        "ss2-ss-small-bg6":
          "url('../../public/assets/ss2-game-page/ss2-ss-small-bg6.png')",
        "ss2-quill-bg":
          "url('../../public/assets/ss2-game-page/ss2-quill-large.svg')",
        "ss2-banner-ls":
          "url('../../public/assets/ss2-game-page/ss2-back-banner-ls.png')",
        "ss2-banner-lm":
          "url('../../public/assets/ss2-game-page/ss2-back-banner-lm.png')",
        "ss2-banner-ms":
          "url('../../public/assets/ss2-game-page/ss2-back-banner-ms.png')",
        "ss2-banner-mm":
          "url('../../public/assets/ss2-game-page/ss2-back-banner-mm.png')",
        "ss1-banner-1":
          "url('../../public/assets/home-page/SilentScreamBGLarge.png')",
        "ss2-parallax-1":
          "url('../../public/assets/ss2-game-page/ss2-hero-bg-layer1.png')",
        "ss2-parallax-2":
          "url('../../public/assets/ss2-game-page/ss2-hero-bg-layer2.png')",
        "ss2-parallax-3":
          "url('../../public/assets/ss2-game-page/ss2-hero-bg-layer3.png')",
        "ss2-parallax-4":
          "url('../../public/assets/ss2-game-page/ss2-hero-bg-layer4.png')",
        "ourteam-hero":
          "url('../../public/assets/our-team-page/hero_our_team.png')",
        "careers-hero":
          "url('../../public/assets/careers-page/hero_careers.jpg')",
        "community-hero":
          "url('../../public/assets/community-page/hero_community.png')",
        "contact-hero":
          "url('../../public/assets/contact-page/hero_contact.jpg')",
      },
    },
  },
  plugins: [],
};
