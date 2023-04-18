/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  declare module "app-1/*"{}
  declare module "app-2/*"{}
  declare module "app-3/*"{}