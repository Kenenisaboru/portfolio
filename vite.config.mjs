import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Render sets RENDER=true automatically. If on Render, serve from root '/'.
// For GitHub Pages, serve from '/portfolio/'.
const isRender = process.env.RENDER === 'true' || process.env.RENDER_STATIC_SITE === 'true';
const base = isRender ? '/' : '/portfolio/';

export default defineConfig({
  plugins: [react()],
  base,
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(base.replace(/\/$/, '')),
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
