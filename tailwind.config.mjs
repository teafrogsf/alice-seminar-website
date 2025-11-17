/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'alice-bg': '#F5F5F5',
        'alice-text': '#2C2C2C',
        'alice-gray': '#666666',
        'alice-light-gray': '#999999',
      },
      fontFamily: {
        // 使用 CSS 变量，便于统一管理
        // 在 global.css 的 :root 中修改字体
        'serif': ['var(--font-serif)'],
        'sans': ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
}

