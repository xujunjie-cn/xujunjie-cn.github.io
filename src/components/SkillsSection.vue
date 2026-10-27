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
    <div class="sec-head sec-head--left" v-reveal>
      <span class="sec-num">03</span>
      <div>
        <span class="sec-kicker">Skills</span>
        <h2 class="sec-title">技术栈</h2>
        <p class="sec-sub">日常使用的技术，以及已经落到项目里的能力</p>
      </div>
    </div>

    <div class="skill-rows">
      <div
        v-for="(g, i) in skills"
        :key="g.group"
        v-reveal
        class="skill-row"
        :style="{ transitionDelay: i * 55 + 'ms' }"
      >
        <div class="skill-row__label">
          <span class="skill-row__icon">
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
          <span>{{ g.group }}</span>
        </div>
        <div class="skill-row__items">
          <span v-for="item in g.items" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-rows {
  border-top: 1px solid var(--border);
}
.skill-row {
  display: grid;
  grid-template-columns: 168px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.28s ease;
}
.skill-row:hover {
  background: linear-gradient(90deg, var(--accent-soft), transparent 70%);
}
.skill-row__label {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13.5px;
  font-weight: 650;
  color: var(--text);
  padding-top: 6px;
}
.skill-row__icon {
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--accent);
}
.skill-row__icon svg {
  width: 14px;
  height: 14px;
}
.skill-row__items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pill {
  font-size: 13px;
  padding: 6px 13px;
  border-radius: 9px;
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

@media (max-width: 720px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 18px 0;
  }
  .skill-row__label {
    padding-top: 0;
  }
  .skill-row:hover {
    background: none;
  }
}
</style>
