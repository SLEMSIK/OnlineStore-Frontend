import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Настройка алиасов для импортов
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Подключаем плагины
  plugins: [react()],
})
