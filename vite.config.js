import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果用 <username>.github.io 仓库部署到根域名，base 保持 '/'
// 如果是普通仓库（如 owner/my-portfolio），改成 base: '/my-portfolio/'
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
