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
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.js',
      name: 'AGCN',
      fileName: 'agcn.min',
      formats: ['iife']
    },
    rollupOptions: {
      output: [
        {
          extend: true,
          dir: 'dist',
          entryFileNames: 'agcn.min.js',
          name: 'AGCN',
          format: 'iife'
        },
        {
          extend: true,
          dir: 'docs/src',
          entryFileNames: 'agcn.min.js',
          name: 'AGCN',
          format: 'iife'
        }
      ]
    }
  }
});