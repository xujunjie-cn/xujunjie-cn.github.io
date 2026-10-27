<script setup>
defineProps({ experience: Array })
</script>

<template>
  <section id="experience" class="section">
    <div class="sec-head sec-head--left" v-reveal>
      <span class="sec-num">04</span>
      <div>
        <span class="sec-kicker">Background</span>
        <h2 class="sec-title">履历</h2>
        <p class="sec-sub">工作与教育，简单带过</p>
      </div>
    </div>

    <div class="exp">
      <div
        v-for="(e, i) in experience"
        :key="i"
        v-reveal
        class="exp__card glass"
        :style="{ transitionDelay: i * 80 + 'ms' }"
      >
        <span class="exp__period">
          {{ e.period }}
          <span v-if="i === 0" class="exp__now">当前</span>
        </span>
        <h3 class="exp__role">{{ e.role }}</h3>
        <span class="exp__org">{{ e.org }}</span>
        <p class="exp__desc">{{ e.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.exp__card {
  border-radius: 16px;
  padding: 22px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease;
}
.exp__card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.exp__card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 20px 44px -28px var(--shadow);
}
.exp__card:hover::before {
  opacity: 1;
}
.exp__period {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.3px;
}
.exp__now {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  letter-spacing: 0.6px;
}
.exp__role {
  margin: 11px 0 3px;
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.2px;
}
.exp__org {
  font-size: 12.5px;
  color: var(--text-dim);
}
.exp__desc {
  margin: 10px 0 0;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--text-dim);
}

@media (max-width: 860px) {
  .exp {
    grid-template-columns: 1fr;
  }
}
</style>
