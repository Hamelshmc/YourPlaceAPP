import react from '@vitejs/plugin-react';
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
});
