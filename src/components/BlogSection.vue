<script setup>
defineProps({ blog: Array })
</script>

<template>
  <section id="blog" class="section" v-reveal>
    <h2 class="section__title">博客</h2>
    <p class="section__sub">写过的文章与笔记</p>
    <div class="posts">
      <a
        v-for="(b, i) in blog"
        :key="i"
        :href="b.url"
        target="_blank"
        rel="noopener"
        class="post glass"
      >
        <div class="post__meta">
          <span class="post__date">{{ b.date }}</span>
          <span class="post__arrow">↗</span>
        </div>
        <h3 class="post__title">{{ b.title }}</h3>
        <p class="post__summary">{{ b.summary }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.posts {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.post {
  padding: 20px 24px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, border-color 0.25s ease;
  border: 1px solid transparent;
}
.post:hover {
  transform: translateX(6px);
  border-color: var(--accent);
}
.post__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-dim);
}
.post__arrow {
  color: var(--accent);
  font-size: 16px;
}
.post__title {
  margin: 8px 0 6px;
  font-size: 18px;
}
.post__summary {
  margin: 0;
  color: var(--text-dim);
  font-size: 14px;
  line-height: 1.6;
}
</style>
