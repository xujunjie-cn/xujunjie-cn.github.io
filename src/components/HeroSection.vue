<script setup>
import { computed } from 'vue'

const props = defineProps({ profile: Object })

const initial = computed(() => (props.profile.name || '?').trim().charAt(0).toUpperCase())
</script>

<template>
  <section id="home" class="hero" v-reveal>
    <div class="hero__glow"></div>
    <div class="hero__card glass">
      <div class="hero__avatar">
        <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
        <span v-else>{{ initial }}</span>
      </div>
      <h1 class="hero__name">
        {{ profile.name }}
        <span v-if="profile.nameEn" class="hero__name-en">{{ profile.nameEn }}</span>
      </h1>
      <p class="hero__tagline">{{ profile.tagline }}</p>
      <p class="hero__bio">{{ profile.bio }}</p>
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
  min-height: 86vh;
  display: grid;
  place-items: center;
  padding: 96px 20px 40px;
  position: relative;
  overflow: hidden;
}
.hero__glow {
  position: absolute;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, var(--accent-soft), transparent 70%);
  filter: blur(40px);
  top: -120px;
  right: -80px;
  pointer-events: none;
}
.hero__card {
  position: relative;
  text-align: center;
  padding: 48px 40px;
  max-width: 640px;
  width: 100%;
  border-radius: 28px;
}
.hero__avatar {
  width: 112px;
  height: 112px;
  margin: 0 auto 22px;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  font-size: 44px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 10px 30px var(--accent-soft);
}
.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero__name {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin: 0;
}
.hero__name-en {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-dim);
  margin-top: 4px;
  letter-spacing: 1px;
}
.hero__tagline {
  font-size: 17px;
  color: var(--accent);
  font-weight: 600;
  margin: 14px 0 10px;
}
.hero__bio {
  color: var(--text-dim);
  line-height: 1.7;
  margin: 0 auto 24px;
  max-width: 460px;
}
.hero__socials {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
