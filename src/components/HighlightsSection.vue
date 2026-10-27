<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>

<template>
  <section id="highlights" class="section">
    <div class="sec-head sec-head--left" v-reveal>
      <span class="sec-num">01</span>
      <div>
        <span class="sec-kicker">Highlights</span>
        <h2 class="sec-title">关键交付</h2>
        <p class="sec-sub">不按时间铺经历，只列真正动过手、有明确前后对比的几件事。</p>
      </div>
    </div>

    <ol class="hl-list">
      <li
        v-for="(h, i) in items"
        :key="h.title"
        class="hl-row"
        v-reveal
        :style="{ transitionDelay: i * 55 + 'ms' }"
      >
        <span class="hl-row__year">{{ h.year }}</span>
        <div class="hl-row__body">
          <h3 class="hl-row__title">{{ h.title }}</h3>
          <p class="hl-row__note">{{ h.note }}</p>
        </div>
        <span class="hl-row__tag">{{ h.tag }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.hl-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border);
}
.hl-row {
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr) 96px;
  gap: 24px;
  align-items: baseline;
  padding: 26px 14px 26px 0;
  border-bottom: 1px solid var(--border);
  position: relative;
  transition: background 0.28s ease, padding-left 0.28s ease;
}
.hl-row::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  opacity: 0;
  transition: opacity 0.28s ease;
}
.hl-row:hover {
  background: linear-gradient(90deg, var(--accent-soft), transparent 62%);
  padding-left: 18px;
}
.hl-row:hover::before {
  opacity: 1;
}

.hl-row__year {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dim);
  letter-spacing: 0.6px;
  padding-top: 2px;
}
.hl-row__title {
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.45;
}
.hl-row__note {
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.8;
  margin-top: 7px;
}
.hl-row__tag {
  justify-self: end;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 11px;
  border-radius: 7px;
  white-space: nowrap;
  align-self: start;
}

@media (max-width: 720px) {
  .hl-row {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'year tag'
      'body body';
    gap: 10px 12px;
    padding: 22px 0;
    align-items: center;
  }
  .hl-row__year {
    grid-area: year;
    padding-top: 0;
  }
  .hl-row__tag {
    grid-area: tag;
    justify-self: start;
  }
  .hl-row__body {
    grid-area: body;
  }
  .hl-row:hover {
    padding-left: 0;
  }
  .hl-row::before {
    display: none;
  }
}
</style>
