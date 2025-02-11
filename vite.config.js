import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {
        css: 'injected',
        cssHash: ({ hash, css, name, filename }) => `agcn-${hash(css)}`
      }
    })
  ],
  build: {
    // outDir: 'test/src',
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.js',
      name: 'AGCN',
      fileName: 'agcn.min',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        extend: true
      }
    }
  }
});