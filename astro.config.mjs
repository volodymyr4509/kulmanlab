import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/docs': 'http://localhost:3000',
      },
    },
  },
  site: 'https://kulmanlab.com',
  devToolbar: { enabled: false },
});
