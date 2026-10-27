<script setup>
import { computed, ref } from 'vue'

const props = defineProps({ profile: Object })

const initial = computed(() => (props.profile.name || '?').trim().charAt(0))
const facts = computed(() => props.profile.facts || [])
const focus = computed(() => props.profile.focus || [])

const cardRef = ref(null)
const tilt = ref({ x: 0, y: 0 })

function onMove(e) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = cardRef.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  tilt.value = { x: -py * 3.2, y: px * 4 }
}
function onLeave() {
  tilt.value = { x: 0, y: 0 }
}
const tiltStyle = computed(() => ({
  transform: `perspective(1400px) rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg)`,
}))

function scrollNext() {
  document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero">
    <div class="hero__aurora" aria-hidden="true">
      <span class="blob blob--1"></span>
      <span class="blob blob--2"></span>
      <span class="blob blob--3"></span>
    </div>

    <div class="hero__inner">
      <!-- 左：姓名与定位 -->
      <div class="hero__text" v-reveal>
        <div class="hero__status">
          <span class="dot"></span>
          <span>{{ profile.status }}</span>
        </div>

        <h1 class="hero__name">
          <span class="hero__name-cn">{{ profile.name }}</span>
          <span class="hero__name-en">{{ profile.nameEn }}</span>
        </h1>

        <p class="hero__tagline">{{ profile.tagline }}</p>
        <p class="hero__lead">{{ profile.lead }}</p>
        <p class="hero__bio">{{ profile.bio }}</p>

        <div class="hero__actions">
          <button class="btn btn--primary" @click="scrollNext">
            看关键交付
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
          <a
            v-for="s in profile.socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="btn btn--ghost"
          >{{ s.label }}</a>
        </div>

        <p v-if="profile.stack" class="hero__stack">
          <span v-for="(t, i) in profile.stack" :key="t">
            {{ t }}<span v-if="i < profile.stack.length - 1" class="hero__stack-sep"> · </span>
          </span>
        </p>
      </div>

      <!-- 右：档案卡 -->
      <div class="hero__aside" v-reveal style="transition-delay: 120ms">
        <div class="hero__tilt" @mousemove="onMove" @mouseleave="onLeave">
          <div ref="cardRef" class="hero__card glass" :style="tiltStyle">
            <div class="hero__card-top">
              <div class="hero__avatar">
                <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
                <span v-else>{{ initial }}</span>
              </div>
              <div class="hero__card-meta">
                <span class="hero__badge">{{ profile.badge }}</span>
                <span class="hero__loc">{{ profile.location }}</span>
              </div>
            </div>

            <div class="hero__facts">
              <div v-for="(f, i) in facts" :key="i" class="fact">
                <strong class="fact__value">{{ f.value }}</strong>
                <span class="fact__label">{{ f.label }}</span>
              </div>
            </div>

            <div class="hero__focus">
              <span class="hero__focus-label">近期在做</span>
              <ul>
                <li v-for="f in focus" :key="f">{{ f }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="hero__scroll" @click="scrollNext" aria-label="向下浏览">
      <span class="hero__scroll-wheel"></span>
    </button>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding: 116px 24px 72px;
  position: relative;
  overflow: hidden;
}

/* 极光光斑 */
.hero__aurora {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 72%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 0%, #000 72%, transparent 100%);
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.75;
  will-change: transform;
}
.blob--1 {
  width: 560px;
  height: 560px;
  top: -180px;
  right: -120px;
  background: radial-gradient(circle, var(--accent-soft), transparent 68%);
  animation: drift1 18s ease-in-out infinite;
}
.blob--2 {
  width: 480px;
  height: 480px;
  bottom: -200px;
  left: -140px;
  background: radial-gradient(circle, var(--accent-2-soft), transparent 70%);
  animation: drift2 22s ease-in-out infinite;
}
.blob--3 {
  width: 320px;
  height: 320px;
  top: 44%;
  left: 52%;
  background: radial-gradient(circle, var(--accent-soft), transparent 72%);
  opacity: 0.42;
  animation: drift3 26s ease-in-out infinite;
}
@keyframes drift1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 30px) scale(1.08); }
}
@keyframes drift2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, -30px) scale(1.06); }
}
@keyframes drift3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 24px); }
}

/* 两栏 */
.hero__inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  gap: 64px;
  align-items: center;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid transparent;
  padding: 6px 14px 6px 12px;
  border-radius: 999px;
  margin-bottom: 24px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  animation: breathe 2.6s ease-in-out infinite;
  flex: none;
}
@keyframes breathe {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero__name {
  margin: 0;
  line-height: 1;
}
.hero__name-cn {
  display: block;
  font-size: clamp(46px, 6.2vw, 74px);
  font-weight: 800;
  letter-spacing: -2.5px;
  background: linear-gradient(118deg, var(--text) 14%, var(--accent) 64%, var(--accent-2) 96%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__name-en {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--text-dim);
  margin-top: 14px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  opacity: 0.72;
}

.hero__tagline {
  font-size: 15px;
  color: var(--accent);
  font-weight: 650;
  margin: 22px 0 0;
  letter-spacing: 0.1px;
}
.hero__lead {
  font-size: 19.5px;
  font-weight: 650;
  line-height: 1.65;
  margin: 12px 0 0;
  letter-spacing: -0.25px;
  max-width: 30em;
}
.hero__bio {
  color: var(--text-dim);
  line-height: 1.9;
  margin: 16px 0 0;
  font-size: 14.5px;
  max-width: 34em;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.hero__stack {
  margin-top: 26px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.4px;
  color: var(--text-dim);
  opacity: 0.72;
  line-height: 1.9;
}
.hero__stack-sep {
  opacity: 0.5;
}

/* 右侧档案卡 */
.hero__tilt {
  perspective: 1400px;
}
.hero__card {
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 30px 80px -44px var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  transform-style: preserve-3d;
}
.hero__card-top {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}
.hero__avatar {
  width: 54px;
  height: 54px;
  flex: none;
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 10px 24px -10px var(--accent);
}
.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero__card-meta {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.hero__badge {
  font-size: 12.5px;
  font-weight: 650;
  color: var(--text);
  letter-spacing: 0.1px;
}
.hero__loc {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-dim);
  letter-spacing: 0.4px;
}

.hero__facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid var(--border);
}
.fact {
  padding: 18px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
}
/* 右列竖分割线 */
.fact:nth-child(even)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18%;
  height: 64%;
  width: 1px;
  background: var(--border);
}
/* 第二行横分割线 */
.fact:nth-child(n + 3) {
  border-top: 1px solid var(--border);
}
.fact__value {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.fact__label {
  font-size: 11.5px;
  color: var(--text-dim);
  letter-spacing: 0.2px;
}

.hero__focus {
  padding-top: 18px;
}
.hero__focus-label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--text-dim);
  opacity: 0.8;
}
.hero__focus ul {
  list-style: none;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.hero__focus li {
  font-size: 13.5px;
  color: var(--text);
  padding-left: 15px;
  position: relative;
  line-height: 1.5;
}
.hero__focus li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.55;
}

/* 下滑提示 */
.hero__scroll {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 42px;
  border-radius: 14px;
  border: 1.5px solid var(--border);
  background: transparent;
  cursor: pointer;
  display: grid;
  place-items: start center;
  padding-top: 8px;
  transition: border-color 0.25s ease;
}
.hero__scroll:hover {
  border-color: var(--accent);
}
.hero__scroll-wheel {
  width: 3px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
  animation: wheel 1.8s ease-in-out infinite;
}
@keyframes wheel {
  0% { opacity: 0; transform: translateY(0); }
  30% { opacity: 1; }
  100% { opacity: 0; transform: translateY(12px); }
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .hero__aside {
    max-width: 460px;
  }
}
@media (max-width: 600px) {
  .hero {
    padding: 100px 18px 60px;
  }
  .hero__name-cn {
    letter-spacing: -1.5px;
  }
  .hero__lead {
    font-size: 17px;
  }
  .hero__scroll {
    display: none;
  }
}
</style>
