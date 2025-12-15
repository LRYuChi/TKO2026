import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定 base 為 './' 代表使用相對路徑
  // 這樣無論您將檔案放在 https://southkendama.com/tko2026/ 還是其他資料夾，都能正常運作
  base: './',
})