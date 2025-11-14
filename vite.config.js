import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/REPO-NAME/',
  plugins: [tailwindcss()],
});
