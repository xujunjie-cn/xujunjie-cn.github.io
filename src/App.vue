<script setup>
import { ref, onMounted } from 'vue'
import { site } from './data/site.js'
import ThemeToggle from './components/ThemeToggle.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import BlogSection from './components/BlogSection.vue'

const nav = [
  { id: 'home', label: '首页' },
  { id: 'projects', label: '作品' },
  { id: 'experience', label: '经历' },
  { id: 'blog', label: '博客' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 24
  })
})

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="page">
    <header class="nav" :class="{ 'nav--scrolled': scrolled }">
      <div class="nav__inner">
        <button class="nav__brand" @click="scrollTo('home')">{{ site.profile.name || 'Home' }}</button>
        <nav class="nav__links" :class="{ open: menuOpen }">
          <button v-for="item in nav" :key="item.id" @click="scrollTo(item.id)">{{ item.label }}</button>
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
      <BlogSection :blog="site.blog" />
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} {{ site.profile.name }}. 用 Vite + Vue 构建。</p>
    </footer>
  </div>
</template>
