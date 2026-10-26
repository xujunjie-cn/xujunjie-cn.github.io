<script setup>
defineProps({ projects: Array })
</script>

<template>
  <section id="projects" class="section" v-reveal>
    <h2 class="section__title">作品</h2>
    <p class="section__sub">我做过的一些项目</p>
    <div class="grid">
      <a
        v-for="(p, i) in projects"
        :key="i"
        :href="p.link"
        target="_blank"
        rel="noopener"
        class="card glass"
      >
        <div v-if="p.image" class="card__img">
          <img :src="p.image" :alt="p.title" />
        </div>
        <div class="card__body">
          <h3 class="card__title">{{ p.title }}</h3>
          <p class="card__desc">{{ p.desc }}</p>
          <div class="card__tags">
            <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
  max-width: 980px;
  margin: 0 auto;
}
.card {
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px var(--shadow);
}
.card__img {
  height: 150px;
  background: linear-gradient(135deg, var(--accent-soft), var(--surface-2));
  overflow: hidden;
}
.card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__body {
  padding: 20px;
}
.card__title {
  margin: 0 0 8px;
  font-size: 19px;
}
.card__desc {
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 14px;
}
.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
