import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  resolve: {
    alias: {},
  },
  base: '/', // Assurez-vous que base est défini
  build: {
    outDir: 'dist', // Assurez-vous que le outDir est correct
  },
});

