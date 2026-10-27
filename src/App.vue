<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site } from './data/site.js'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import HighlightsSection from './components/HighlightsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'

const nav = [
  { id: 'home', label: '首页' },
  { id: 'highlights', label: '亮点' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技术栈' },
  { id: 'experience', label: '履历' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const progress = ref(0)
const active = ref('home')
let io = null

function onScroll() {
  scrolled.value = window.scrollY > 24
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  io?.disconnect()
})

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="page">
    <div class="progress" :style="{ width: progress + '%' }"></div>

    <header class="nav" :class="{ 'nav--scrolled': scrolled }">
      <div class="nav__inner">
        <button class="nav__brand" @click="scrollTo('home')">
          {{ site.profile.name }}
          <span class="nav__brand-en">.dev</span>
        </button>

        <nav class="nav__links" :class="{ open: menuOpen }">
          <button
            v-for="item in nav"
            :key="item.id"
            :class="{ active: active === item.id }"
            @click="scrollTo(item.id)"
          >{{ item.label }}</button>
        </nav>

        <div class="nav__right">
          <ThemeToggle />
          <button class="nav__burger" @click="menuOpen = !menuOpen" aria-label="菜单">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>

    <main>
      <HeroSection :profile="site.profile" />
      <HighlightsSection :items="site.highlights" />
      <ProjectsSection :projects="site.projects" />
      <SkillsSection :skills="site.skills" />
      <ExperienceSection :experience="site.experience" />
    </main>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__cta">
          <span class="footer__kicker">Get in touch</span>
          <p class="footer__title">想聊聊仓储、供应链，或者一个具体的后端问题？</p>
        </div>
        <div class="footer__links">
          <a
            v-for="s in site.profile.socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="btn btn--ghost"
          >{{ s.label }}</a>
        </div>
      </div>

      <div class="footer__base">
        <span>{{ site.profile.name }} · {{ site.profile.tagline }}</span>
        <span>© {{ new Date().getFullYear() }} · Built with Vite + Vue</span>
      </div>
    </footer>

    <button class="to-top" v-show="scrolled" @click="scrollTo('home')" aria-label="回到顶部">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>
