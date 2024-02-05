import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // create alias
  resolve: {
   alias: [
      { find: '@', replacement: path.resolve(__dirname, './src')},
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets')},
      { find: 'components', replacement: path.resolve(__dirname, './src/components')},
      { find: 'views', replacement: path.resolve(__dirname, './src/views')},
   ],

 },
})
