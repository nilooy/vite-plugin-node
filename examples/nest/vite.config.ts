import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  plugins: [
    ...VitePluginNode({
      handler: 'nest',
      appPath: './src/main.ts',
      tsCompiler: 'swc'
    })
  ]
})