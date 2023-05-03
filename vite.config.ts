/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import AutoImport from 'unplugin-auto-import/vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      ignored: ['/coverage/'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    exclude: ['node_modules'],
  },
});
