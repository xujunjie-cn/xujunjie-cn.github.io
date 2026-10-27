<script setup>
defineProps({ experience: Array })
</script>

<template>
  <section id="experience" class="section">
    <div class="sec-head" v-reveal>
      <span class="sec-kicker">BACKGROUND</span>
      <h2 class="sec-title">履历</h2>
      <p class="sec-sub">工作与教育，简单带过</p>
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
  max-width: 1040px;
  margin: 0 auto;
}
.exp__card {
  border-radius: 16px;
  padding: 20px 22px;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.exp__card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}
.exp__period {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.exp__now {
  font-size: 10.5px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
}
.exp__role {
  margin: 10px 0 3px;
  font-size: 16px;
  font-weight: 700;
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
