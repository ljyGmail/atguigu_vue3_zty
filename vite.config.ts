import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./01_a_simple_app_component', import.meta.url)),
    },
  },
})
