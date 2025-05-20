import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      base: '#1b2d45',
      headline: '#00214d',
      primary: '#00ebc7',
      surface: '#fffffe',
      muted: '#F2F4F6',
    },
    fontFamily: {
      sans: 'Inter',
      heading: 'Playfair Display',
      subheading: 'source-serif-4',
    },
  },
  rules: [
    ['header-backdrop', { '-webkit-backdrop-filter': 'saturate(180%) blur(20px)', 'backdrop-filter': 'saturate(180%) blur(20px)' }],
  ],
})
