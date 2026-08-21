import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});