<script setup>
defineProps({ projects: Array })
</script>

<template>
  <section id="projects" class="section" v-reveal>
    <div class="sec-head">
      <span class="sec-kicker">PROJECTS</span>
      <h2 class="sec-title">项目作品</h2>
      <p class="sec-sub">四个工业软件与业务系统项目，按业务模块归并</p>
    </div>

    <div class="grid">
      <article v-for="(p, i) in projects" :key="i" class="card glass">
        <div class="card__head">
          <span class="card__no">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="card__year">{{ p.year }}</span>
        </div>

        <span class="card__sub">{{ p.subtitle }}</span>
        <h3 class="card__title">{{ p.title }}</h3>
        <span class="card__role">{{ p.role }}</span>

        <p class="card__desc">{{ p.desc }}</p>

        <ul v-if="p.highlights" class="card__hl">
          <li v-for="(h, k) in p.highlights" :key="k">{{ h }}</li>
        </ul>

        <div class="card__tags">
          <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}
.card {
  position: relative;
  border-radius: 22px;
  padding: 26px 26px 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease,
    border-color 0.35s ease;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  opacity: 0;
  transition: opacity 0.35s ease;
}
.card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 24px 50px -24px var(--shadow);
}
.card:hover::before {
  opacity: 1;
}

.card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
.card__no {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.card__year {
  font-size: 12px;
  color: var(--text-dim);
  font-variant-numeric: tabular-nums;
}

.card__sub {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: var(--accent);
}
.card__title {
  margin: 6px 0 4px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.3px;
}
.card__role {
  font-size: 12.5px;
  color: var(--text-dim);
}
.card__desc {
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.75;
  margin: 12px 0 14px;
}

.card__hl {
  list-style: none;
  margin: 0 0 18px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1;
}
.card__hl li {
  position: relative;
  padding-left: 16px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-dim);
}
.card__hl li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.65;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .card {
    padding: 22px 20px;
  }
}
</style>
