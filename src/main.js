import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// 滚动入场：元素进入视口时加 .is-visible，配合 CSS 过渡实现淡入上浮
const reveal = {
  mounted(el) {
    el.classList.add('reveal')
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
