import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/beta/',
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true
    })
  ],
});