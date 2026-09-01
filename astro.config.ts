import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import keystaticIntegration from '@keystatic/astro';
import keystaticConfig from './keystatic.config';

export default defineConfig({
  site: 'https://fata-fata3.vercel.app',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [keystaticIntegration(keystaticConfig)],
});