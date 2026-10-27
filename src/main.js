import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// 标记 JS 可用：CSS 里的隐藏规则挂在 html.js 下，脚本失效时内容照常显示
document.documentElement.classList.add('js')

// 滚动入场：元素进入视口时加 .is-visible，配合 CSS 过渡实现淡入上浮
const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    // 老浏览器兜底：没有 IntersectionObserver 就直接显示，别把内容锁死
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
  },
}

createApp(App).directive('reveal', reveal).mount('#app')
