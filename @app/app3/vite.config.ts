import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'app-3',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',        
      },
      shared: ['vue']
    })
  ],
  server: {
    port: 5003,
    host: '0.0.0.0',
    strictPort: true,
  },
  build:{
    minify:false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
