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
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="theme === 'dark' ? '切换浅色' : '切换深色'"
    :title="theme === 'dark' ? '切换浅色' : '切换深色'"
  >
    <svg v-if="theme === 'dark'" class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <svg v-else class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-dim);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease,
    border-color 0.25s ease;
}
.theme-toggle:hover {
  transform: rotate(-18deg);
  color: var(--accent);
  border-color: var(--accent);
}
.ico {
  width: 17px;
  height: 17px;
}
</style>
