<script setup>
defineProps({ projects: Array })
</script>

<template>
  <section id="projects" class="section">
    <div class="sec-head sec-head--left" v-reveal>
      <span class="sec-num">02</span>
      <div>
        <span class="sec-kicker">Projects</span>
        <h2 class="sec-title">核心项目</h2>
        <p class="sec-sub">5 套系统，拆到能被追问的技术点</p>
      </div>
    </div>

    <div class="list">
      <article
        v-for="(p, i) in projects"
        :key="i"
        v-reveal
        class="proj glass"
        :style="{ transitionDelay: i * 70 + 'ms' }"
      >
        <div class="proj__side">
          <div class="proj__top">
            <span class="proj__no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="proj__year">{{ p.year }}</span>
          </div>

          <span class="proj__sub">{{ p.subtitle }}</span>
          <h3 class="proj__title">{{ p.title }}</h3>
          <span class="proj__role">{{ p.role }}</span>

          <p class="proj__desc">{{ p.desc }}</p>

          <div class="proj__tags">
            <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>

        <div class="proj__main">
          <span class="proj__theme">技术主线 · {{ p.theme }}</span>
          <ul class="hl">
            <li v-for="(h, k) in p.highlights" :key="k" class="hl__item">
              <span class="hl__k">{{ h.k }}</span>
              <span class="hl__v">{{ h.v }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.proj {
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  border-radius: 22px;
  padding: 28px 30px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease,
    box-shadow 0.35s ease;
}
.proj::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  border-radius: 22px 0 0 22px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  opacity: 0;
  transition: opacity 0.35s ease;
}
.proj:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 24px 50px -24px var(--shadow), 0 0 38px -10px var(--accent-soft);
}
.proj:hover::before {
  opacity: 1;
}

.proj__side {
  border-right: 1px solid var(--border);
  padding-right: 30px;
}
.proj__top {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
}
.proj__no {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.proj__year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.2px;
  opacity: 0.9;
}
.proj__sub {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: var(--accent);
}
.proj__title {
  margin: 6px 0 4px;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.35;
}
.proj__role {
  font-size: 12.5px;
  color: var(--text-dim);
}
.proj__desc {
  margin: 12px 0 16px;
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--text-dim);
}
.proj__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.proj__main {
  min-width: 0;
}
.proj__theme {
  display: inline-block;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--text-dim);
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  margin-bottom: 16px;
}
.hl {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.hl__item {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 12px;
  align-items: start;
}
.hl__k {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: 7px;
  padding: 3px 0;
  text-align: center;
  white-space: nowrap;
}
.hl__v {
  font-size: 13.5px;
  line-height: 1.8;
  color: var(--text-dim);
}

@media (max-width: 900px) {
  .proj {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 24px 22px;
  }
  .proj__side {
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding-right: 0;
    padding-bottom: 18px;
  }
  .hl__item {
    grid-template-columns: 68px 1fr;
    gap: 10px;
  }
}
@media (max-width: 480px) {
  .hl__item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .hl__k {
    justify-self: start;
    padding: 3px 10px;
  }
}
</style>
