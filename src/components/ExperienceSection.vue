<script setup>
defineProps({ experience: Array })
</script>

<template>
  <section id="experience" class="section" v-reveal>
    <div class="sec-head">
      <span class="sec-kicker">EXPERIENCE</span>
      <h2 class="sec-title">工作与教育</h2>
      <p class="sec-sub">从商贸 SaaS 到工业软件，逐步聚焦仓储与供应链</p>
    </div>

    <div class="timeline">
      <div v-for="(e, i) in experience" :key="i" class="tl-item">
        <span class="tl-dot" :class="{ 'tl-dot--now': i === 0 }"></span>
        <div class="tl-card glass">
          <div class="tl-top">
            <span class="tl-period">{{ e.period }}</span>
            <span v-if="i === 0" class="tl-now">当前</span>
          </div>
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
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  padding-left: 30px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--border) 70%);
  opacity: 0.55;
}
.tl-item {
  position: relative;
  margin-bottom: 22px;
}
.tl-dot {
  position: absolute;
  left: -30px;
  top: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 2px solid var(--border);
}
.tl-dot--now {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 5px var(--accent-soft);
  }
  50% {
    box-shadow: 0 0 0 9px transparent;
  }
}

.tl-card {
  border-radius: 18px;
  padding: 20px 24px;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.tl-card:hover {
  border-color: var(--accent);
  transform: translateX(4px);
}
.tl-top {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tl-period {
  font-size: 12.5px;
  color: var(--accent);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.2px;
}
.tl-now {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-weight: 600;
}
.tl-role {
  margin: 8px 0 2px;
  font-size: 18px;
  font-weight: 700;
}
.tl-org {
  color: var(--text-dim);
  font-size: 13.5px;
}
.tl-desc {
  margin: 10px 0 0;
  color: var(--text-dim);
  line-height: 1.75;
  font-size: 14px;
}
</style>
