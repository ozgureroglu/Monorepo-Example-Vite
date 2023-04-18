import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
        "app-1": "http://localhost:5001/assets/remoteEntry.js",
        "app-2": "http://localhost:5002/assets/remoteEntry.js",
        "app-3": "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ['vue']
  })
  ],
  // server: {
  //   port: 5000,
  //   host: '0.0.0.0',
  //   strictPort: true,
  // },
  build:{
    minify:false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
