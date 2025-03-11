<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const tagColor = computed(() => {
  let hash = 0,
    len = props.text.length;
  for (let i = 0; i < len; i++) {
    hash = (hash << 5) - hash + props.text.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }

  const hue = (hash * 137.508) % 360; // use golden angle approximation
  let saturation = hash % 2 === 0 ? "40%" : "20%";
  saturation = hash % 3 === 0 ? "30%" : saturation;
  return `hsl(${hue},${saturation},30%)`;
});
</script>

<template>
  <div class="Tag">{{ text }}</div>
</template>

<style scoped>
.Tag {
  padding: 1px 2px;
  border-radius: 2px;
  margin: 0px 2px;
  background-color: v-bind(tagColor);
}
</style>
