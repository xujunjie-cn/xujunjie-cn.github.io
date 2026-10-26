<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = saved || (prefersDark ? 'dark' : 'light')
  apply()
})

function apply() {
  document.documentElement.setAttribute('data-theme', theme.value)
}

function toggle() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  apply()
}
</script>

<template>
  <button class="theme-toggle" @click="toggle" :aria-label="theme === 'dark' ? '切换浅色' : '切换深色'">
    <span v-if="theme === 'dark'">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  font-size: 16px;
  display: grid;
  place-items: center;
  transition: transform 0.25s ease, background 0.25s ease;
}
.theme-toggle:hover {
  transform: scale(1.1) rotate(-8deg);
}
</style>
