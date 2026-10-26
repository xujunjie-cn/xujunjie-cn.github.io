<script setup>
defineProps({ skills: Array })
</script>

<template>
  <section id="skills" class="section" v-reveal>
    <div class="sec-head">
      <span class="sec-kicker">SKILLS</span>
      <h2 class="sec-title">技术栈</h2>
      <p class="sec-sub">日常使用的技术，以及已经落到项目里的能力</p>
    </div>

    <div class="skills">
      <div v-for="(g, i) in skills" :key="i" class="skill glass">
        <h3 class="skill__group">{{ g.group }}</h3>
        <div class="skill__items">
          <span v-for="item in g.items" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
}
.skill {
  border-radius: 18px;
  padding: 22px 24px;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.skill:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}
.skill__group {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--accent);
  text-transform: uppercase;
}
.skill__items {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.pill {
  font-size: 13.5px;
  padding: 7px 13px;
  border-radius: 10px;
  background: var(--surface-2);
  color: var(--text);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 860px) {
  .skills {
    grid-template-columns: 1fr;
  }
}
</style>
