import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  return {
    base: './', // Ensures relative paths for GitHub Pages
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    // IMPORTANT: To deploy to GitHub Pages, you MUST run 'npm run build' 
    // and upload the contents of the 'dist' folder.
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
