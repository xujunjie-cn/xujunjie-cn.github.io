<script setup>
defineProps({ experience: Array })
</script>

<template>
  <section id="experience" class="section" v-reveal>
    <h2 class="section__title">经历</h2>
    <p class="section__sub">教育、工作与成长</p>
    <div class="timeline">
      <div v-for="(e, i) in experience" :key="i" class="tl-item">
        <span class="tl-dot"></span>
        <div class="tl-card glass">
          <span class="tl-period">{{ e.period }}</span>
          <h3 class="tl-role">{{ e.role }}</h3>
          <span class="tl-org">{{ e.org }}</span>
          <p class="tl-desc">{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  padding-left: 28px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--border);
}
.tl-item {
  position: relative;
  margin-bottom: 26px;
}
.tl-dot {
  position: absolute;
  left: -28px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.tl-card {
  border-radius: 16px;
  padding: 18px 22px;
}
.tl-period {
  font-size: 13px;
  color: var(--accent);
  font-weight: 600;
}
.tl-role {
  margin: 6px 0 2px;
  font-size: 18px;
}
.tl-org {
  color: var(--text-dim);
  font-size: 14px;
}
.tl-desc {
  margin: 10px 0 0;
  color: var(--text-dim);
  line-height: 1.65;
  font-size: 14px;
}
</style>
