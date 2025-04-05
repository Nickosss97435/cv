import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
  ],
  server: {
    host: "0.0.0.0", // Écoute sur toutes les interfaces réseau
    port: 5173,      // Port par défaut
  },
  resolve: {
    alias: {
      // Autes alias
    },
  },
});
