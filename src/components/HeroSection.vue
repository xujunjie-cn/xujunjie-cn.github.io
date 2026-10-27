<script setup>
import { computed, ref } from 'vue'

const props = defineProps({ profile: Object })

const initial = computed(() => (props.profile.name || '?').trim().charAt(0))
const facts = computed(() => props.profile.facts || [])

const cardRef = ref(null)
const tilt = ref({ x: 0, y: 0 })

function onMove(e) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = cardRef.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  tilt.value = { x: -py * 4, y: px * 5 }
}
function onLeave() {
  tilt.value = { x: 0, y: 0 }
}
const tiltStyle = computed(() => ({
  transform: `perspective(1200px) rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg)`,
}))

function scrollNext() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero" v-reveal>
    <div class="hero__aurora">
      <span class="blob blob--1"></span>
      <span class="blob blob--2"></span>
      <span class="blob blob--3"></span>
    </div>

    <div class="hero__tilt" @mousemove="onMove" @mouseleave="onLeave">
      <div ref="cardRef" class="hero__card glass" :style="tiltStyle">
        <div class="hero__avatar">
          <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
          <span v-else>{{ initial }}</span>
        </div>

        <div class="hero__badge">
          <span class="dot"></span>
          {{ profile.badge }}
          <span v-if="profile.location" class="hero__loc">· {{ profile.location }}</span>
        </div>

        <h1 class="hero__name">
          <span class="hero__name-cn">{{ profile.name }}</span>
          <span v-if="profile.nameEn" class="hero__name-en">{{ profile.nameEn }}</span>
        </h1>

        <p class="hero__tagline">{{ profile.tagline }}</p>
        <p class="hero__bio">{{ profile.bio }}</p>

        <div v-if="facts.length" class="hero__facts">
          <div v-for="(f, i) in facts" :key="i" class="fact">
            <strong class="fact__value">{{ f.value }}</strong>
            <span class="fact__label">{{ f.label }}</span>
          </div>
        </div>

        <div class="hero__socials">
          <a
            v-for="s in profile.socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="chip"
          >{{ s.label }}</a>
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
  place-items: center;
  padding: 108px 20px 64px;
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
  top: 42%;
  left: 46%;
  background: radial-gradient(circle, var(--accent-soft), transparent 72%);
  opacity: 0.45;
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

/* 鼠标视差容器 */
.hero__tilt {
  perspective: 1200px;
  width: 100%;
  max-width: 760px;
}

.hero__card {
  position: relative;
  text-align: center;
  padding: 52px 44px 44px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 30px 80px -40px var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
  transform-style: preserve-3d;
}

.hero__avatar {
  width: 118px;
  height: 118px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  font-size: 46px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 6px var(--surface), 0 0 0 7px var(--border), 0 16px 36px -12px var(--accent);
}

.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid transparent;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  animation: breathe 2.6s ease-in-out infinite;
}
@keyframes breathe {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.82); }
}
.hero__loc {
  color: var(--text-dim);
  font-weight: 500;
}

.hero__name {
  margin: 0;
  line-height: 1.15;
}
.hero__name-cn {
  display: block;
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(120deg, var(--text) 18%, var(--accent) 78%, var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__name-en {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dim);
  margin-top: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.85;
}

.hero__tagline {
  font-size: 16px;
  color: var(--accent);
  font-weight: 600;
  margin: 16px 0 12px;
  letter-spacing: 0.2px;
}
.hero__bio {
  color: var(--text-dim);
  line-height: 1.85;
  margin: 0 auto 28px;
  max-width: 580px;
  font-size: 15px;
}

.hero__facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto 28px;
  max-width: 480px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 18px 0;
}
.fact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
}
.fact + .fact::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background: var(--border);
}
.fact__value {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
}
.fact__label {
  font-size: 12px;
  color: var(--text-dim);
  letter-spacing: 0.3px;
}

.hero__socials {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
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

@media (max-width: 600px) {
  .hero__card {
    padding: 40px 22px 34px;
  }
  .hero__name-cn {
    font-size: 32px;
  }
  .hero__facts {
    padding: 14px 0;
  }
  .fact__value {
    font-size: 22px;
  }
  .hero__scroll {
    display: none;
  }
}
</style>
