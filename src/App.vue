<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site } from './data/site.js'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'

const nav = [
  { id: 'home', label: '首页' },
  { id: 'projects', label: '项目' },
  { id: 'experience', label: '经历' },
  { id: 'skills', label: '技术栈' },
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
      <ProjectsSection :projects="site.projects" />
      <ExperienceSection :experience="site.experience" />
      <SkillsSection :skills="site.skills" />
    </main>

    <footer class="footer">
      <p class="footer__name">{{ site.profile.name }} · {{ site.profile.tagline }}</p>
      <p class="footer__meta">
        © {{ new Date().getFullYear() }} · Built with Vite + Vue
        <a v-for="s in site.profile.socials" :key="s.label" :href="s.url" target="_blank" rel="noopener">
          {{ s.label }}
        </a>
      </p>
    </footer>
  </div>
</template>
