import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fata-eyqblsquc-fata3.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});