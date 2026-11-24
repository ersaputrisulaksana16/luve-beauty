import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Konfigurasi Vite dengan base relatif agar berjalan di subfolder mana pun
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
