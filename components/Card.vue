<script setup lang="ts">
const { direction, picture, name, position, link, start, end, technologies } =
  defineProps<{
    direction: string;
    picture: string;
    name: string;
    position?: string;
    link?: string;
    start?: Date;
    end?: Date;
    technologies?: string[];
  }>();

const title = computed(() => {
  return position ? position + (name && ` @${name}`) : name;
});

const date = computed(() => {
  if (!start && !end) return "";
  const formattedStart =
    start &&
    start.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  const formattedEnd =
    end &&
    end.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

  return `${formattedStart} \u2192 ${formattedEnd || "Present"}`;
});
</script>

<template>
  <div class="Card" :class="direction">
    <a v-if="link" class="Card-Thumbnail" :href="link" target="_blank">
      <img :src="picture" :alt="title" loading="lazy" />
    </a>
    <div v-else class="Card-Thumbnail">
      <img :src="picture" :alt="title" loading="lazy" />
    </div>
    <div class="Card-Content">
      <div class="Card-Extra">{{ date }}</div>
      <Window color="primary">
        <h3>
          {{ title }}
          <a v-if="link" class="Card-Link" :href="link" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        </h3>
        <p><slot></slot></p>
      </Window>
      <div class="Card-Extra">
        <Tag v-for="tech in technologies ?? []" :text="tech" />
      </div>
    </div>
  </div>
</template>

<style>
.Card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 6em 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: 18rem;
}

.Card-Content {
  grid-row: 1;
  z-index: 100;
  transition: filter ease 0.25s;
}

.Card-Thumbnail {
  transition: transform ease 0.25s;
  grid-row: 1;
  z-index: 99;
}

.right > .Card-Thumbnail {
  grid-column: 2 / 4;
  margin-left: auto;
}

.right > .Card-Content {
  grid-column: 1 / 3;
}

.left > .Card-Thumbnail {
  grid-column: 1 / 3;
}

.left > .Card-Content {
  grid-column: 2 / 4;
}

.Card-Link {
  height: 100%;
  color: var(--cl-secondary);
}

.Card-Link svg {
  height: 1em;
}

img {
  object-fit: cover;
  object-position: left;
  height: 16rem;
  aspect-ratio: 16 / 9;
  max-width: 100%;
}

.Card-Thumbnail:hover + .Card-Content {
  filter: blur(4px) opacity(0.5);
}

.Card-Thumbnail:hover {
  z-index: 101;
  transform: scale(1.01);
}

p {
  margin-top: 0.5rem;
}

.Card-Extra {
  height: 1rem;
  margin: 8px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right > .Card-Content > .Card-Extra {
  justify-content: start;
}

.left > .Card-Content > .Card-Extra {
  justify-content: end;
}

@media only screen and (max-width: 768px) {
  .Card {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Card-Content {
    position: relative;
    top: -2rem;
    width: calc(100% - 2rem);
  }

  .Card-Extra {
    display: none;
  }

  p {
    display: none;
  }

  .Card-Thumbnail {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
