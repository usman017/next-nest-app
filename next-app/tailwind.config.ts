import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
      },
      colors: {
      }
    },
  },
};

export default config;
