<script setup>
import { computed } from 'vue'

const props = defineProps({ profile: Object })

const initial = computed(() => (props.profile.name || '?').trim().charAt(0))
const facts = computed(() => props.profile.facts || [])
</script>

<template>
  <section id="home" class="hero" v-reveal>
    <div class="hero__glow hero__glow--a"></div>
    <div class="hero__glow hero__glow--b"></div>

    <div class="hero__card glass">
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
        {{ profile.name }}
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
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 108px 20px 56px;
  position: relative;
  overflow: hidden;
}
.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.9;
}
.hero__glow--a {
  width: 560px;
  height: 560px;
  background: radial-gradient(circle, var(--accent-soft), transparent 68%);
  top: -180px;
  right: -120px;
}
.hero__glow--b {
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, var(--accent-2-soft), transparent 70%);
  bottom: -200px;
  left: -140px;
}

.hero__card {
  position: relative;
  text-align: center;
  padding: 52px 44px 44px;
  max-width: 760px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 30px 80px -40px var(--shadow);
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
}
.hero__loc {
  color: var(--text-dim);
  font-weight: 500;
}

.hero__name {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0;
  line-height: 1.15;
}
.hero__name-en {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dim);
  margin-top: 6px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
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
  gap: 0;
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

@media (max-width: 600px) {
  .hero__card {
    padding: 40px 22px 34px;
  }
  .hero__name {
    font-size: 32px;
  }
  .hero__facts {
    padding: 14px 0;
  }
  .fact__value {
    font-size: 22px;
  }
}
</style>
