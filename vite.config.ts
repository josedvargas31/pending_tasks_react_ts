import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pending_tasks_react_ts/', // Define el `base` para que coincida con tu subcarpeta en GitHub Pages.
  build: {
    outDir: 'dist', // Directorio de salida, por defecto es `dist`
  },
})
