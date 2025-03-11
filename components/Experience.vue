<script setup lang="ts">
const { data: experienceMeta } = await useAsyncData("experienceMeta", () =>
  queryCollection("main").where("title", "=", "My Experiences").first()
);
const { data: experiences } = await useAsyncData("experience", () =>
  queryCollection("experience").order("start", "DESC").all()
);
</script>

<template>
  <section id="experience">
    <div class="stable">
      <div class="stable-container">
        <Window color="primary">
          <h1>{{ experienceMeta?.title }}</h1>
          <hr />
          <ContentRenderer v-if="experienceMeta" :value="experienceMeta" />
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
            stroke-width="1.5"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="scrollable">
      <Card
        v-for="experience in experiences"
        :name="experience.company"
        :position="experience.position"
        :picture="experience.picture"
        :start="new Date(experience.start)"
        :end="experience.end ? new Date(experience.end) : undefined"
        :link="experience.link"
        direction="right"
      >
        <ContentRenderer :value="experience" />
      </Card>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
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
