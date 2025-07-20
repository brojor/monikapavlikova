import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'main': '#1b2d45',
      'headline': '#00214d',
      'primary': '#00ebc7',
      'surface-even': '#ffffff',
      'surface-odd': '#F9F3EB',
      'muted': '#F2F4F6',
      'accent': '#fd5656',
      'accentHover': '#FC2424',
    },
    fontFamily: {
      sans: 'Inter',
      heading: 'Playfair Display',
      testimonial: 'Nunito Sans',
    },
  },
  rules: [
    ['header-backdrop', { '-webkit-backdrop-filter': 'blur(20px)', 'backdrop-filter': 'blur(20px)' }],
  ],
})
