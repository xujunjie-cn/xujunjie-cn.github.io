<script setup>
defineProps({ skills: Array })

const icons = [
  // 后端与框架
  'M8 6 3 12l5 6M16 6l5 6-5 6',
  // 数据与中间件
  'M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5',
  // 业务领域
  'M12 3 3 8l9 5 9-5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5',
  // 工程实践
  'M5 7l5 5-5 5M13 17h6',
]
</script>

<template>
  <section id="skills" class="section">
    <div class="sec-head" v-reveal>
      <span class="sec-kicker">SKILLS</span>
      <h2 class="sec-title">技术栈</h2>
      <p class="sec-sub">日常使用的技术，以及已经落到项目里的能力</p>
    </div>

    <div class="skills">
      <div
        v-for="(g, i) in skills"
        :key="i"
        v-reveal
        class="skill glass"
        :style="{ transitionDelay: i * 80 + 'ms' }"
      >
        <div class="skill__head">
          <span class="skill__icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="icons[i % icons.length]" />
            </svg>
          </span>
          <h3 class="skill__group">{{ g.group }}</h3>
        </div>
        <div class="skill__items">
          <span v-for="item in g.items" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
}
.skill {
  position: relative;
  border-radius: 18px;
  padding: 22px 24px;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease;
}
.skill:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 18px 40px -24px var(--shadow), 0 0 30px -12px var(--accent-soft);
}
.skill__head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.skill__icon {
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent);
}
.skill__icon svg {
  width: 17px;
  height: 17px;
}
.skill__group {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--accent);
  text-transform: uppercase;
}
.skill__items {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.pill {
  font-size: 13.5px;
  padding: 7px 13px;
  border-radius: 10px;
  background: var(--surface-2);
  color: var(--text);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.pill:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-1px);
}

@media (max-width: 860px) {
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
