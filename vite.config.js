import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Sous-chemin GitHub Pages : https://el-cassegrain.github.io/multi-step-form/
  base: '/multi-step-form/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5.3 utilise encore @import : on masque ses avertissements Sass
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },
})
