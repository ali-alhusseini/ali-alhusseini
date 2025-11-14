import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ali-alhusseini/ali-alhusseini/',
  plugins: [tailwindcss()],
});
