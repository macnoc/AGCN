import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {
        css: 'injected',
        cssHash: ({ hash, css, name, filename }) => `adcn-${hash(css)}`
      }
    })
  ],
  build: {
    // outDir: 'test/src',
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.js',
      name: 'ADCN',
      fileName: 'adcn.min',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        extend: true
      }
    }
  }
});