<script setup lang="ts">
const { data: projectMeta } = await useAsyncData("projectMeta", () =>
  queryCollection("main").where("title", "=", "My Projects").first()
);
const { data: projects } = await useAsyncData("project", () =>
  queryCollection("project").order("start", "DESC").all()
);
</script>

<template>
  <section id="projects">
    <div class="stable">
      <div class="stable-container">
        <Window v-if="projectMeta" color="primary">
          <h1>{{ projectMeta.title }}</h1>
          <hr />
          <ContentRenderer v-if="projectMeta" :value="projectMeta" />
        </Window>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      </div>
    </div>
    <div class="scrollable">
      <Card
        v-for="project in projects"
        :key="project.path"
        :name="project.name"
        :picture="project.picture"
        :start="new Date(project.start)"
        :end="project.end ? new Date(project.end) : undefined"
        :link="project.link"
        :technologies="project.technologies"
        direction="left"
      >
        <ContentRenderer :value="project" />
      </Card>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row-reverse;
  gap: 6rem;
}

.stable {
  position: sticky;
  top: 0px;
  max-height: 100vh;
  width: 45%;
  display: flex;
  align-items: center;
  z-index: 10;
}

.scrollable {
  z-index: 100;
  width: 55%;
}

@media only screen and (max-width: 1200px) {
  section {
    flex-direction: column;
    gap: 2rem;
  }

  .stable {
    position: inherit;
    width: 100%;
    padding: 0;
  }

  .scrollable {
    width: 100%;
    padding: 0;
  }
}
</style>
