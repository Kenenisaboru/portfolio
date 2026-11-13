import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base path './' works universally on Render, GitHub Pages, and custom domains
  base: './',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('.'),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
