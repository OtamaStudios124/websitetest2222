
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000  // or any other port you prefer
  },
  plugins: [
    glsl(),
    // ... (any other plugins you might have)
  ],
  publicDir: "static",
  assetsInclude: ['**/*.gltf', '**/*.ttf'], // Include TTF files as assets

  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js'
    }
  }
});

