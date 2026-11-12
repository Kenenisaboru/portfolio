import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('/portfolio'),
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
