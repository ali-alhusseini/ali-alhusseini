import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  base: './',
  plugins: [tailwindcss()],
});