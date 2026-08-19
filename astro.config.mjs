   import { defineConfig } from 'astro/config';
   import keystatic from '@keystatic/astro';

   export default defineConfig({
     output: 'server',
     integrations: [keystatic()],
   });