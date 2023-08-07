import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      babel: {
        plugins: ['babel-plugin-styled-components', 'transform-react-remove-prop-types'],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://yourplace-app-7a5v-dev.fl0.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build', // Cambia el directorio de salida a 'build'
  },
});
