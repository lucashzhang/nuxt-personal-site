<script setup lang="ts">
const { data: about } = await useAsyncData("aboutMeta", () =>
  queryCollection("main").where("title", "=", "About Me").first()
);
</script>

<template>
  <section id="about">
    <img :src="about?.picture" alt="Me" loading="lazy" />
    <Window color="primary">
      <div class="About-Content">
        <h1>{{ about?.title }}</h1>
        <hr />
        <ContentRenderer v-if="about" :value="about" />
        <div class="Button-Group">
          <a class="Button" :href="about?.linkedin" target="_blank">Linkedin</a>
          <a class="Button" :href="about?.resume" target="_blank">Resume</a>
        </div>
      </div>
    </Window>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 20rem 1fr;
  padding-top: 3rem;
  gap: 4rem;
}

img {
  width: 100%;
}

hr {
  width: 100%;
}

.About-Content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.Button-Group {
  margin-top: auto;
  margin-bottom: 0.5rem;
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 2rem;
}

a {
  color: var(--cl-background);
}

hr {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  section {
    flex-direction: column;
    gap: 2rem;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
