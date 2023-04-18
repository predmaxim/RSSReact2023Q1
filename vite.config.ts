/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
  },
});
