import { defineConfig } from 'astro/config';
export default defineConfig({
  vite: {
    envPrefix: 'VITE_',
    define: {
      'import.meta.env.VITE_EMAIL': JSON.stringify(process.env.VITE_EMAIL),
      'import.meta.env.VITE_PHONE': JSON.stringify(process.env.VITE_PHONE),
    },
  },
});
