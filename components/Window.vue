<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <div class="Window" :class="color">
    <div class="Window-Bar" :class="color">
      <div class="Window-Dot"></div>
      <div class="Window-Dot"></div>
    </div>
    <div class="Window-Content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.Window {
  border: 2px solid lightgray;
  background-color: var(--cl-background-light);
  position: relative;
}

.Window-Bar {
  height: 1rem;
  border-bottom: 2px solid lightgray;
  display: flex;
  align-items: center;
}

.Window-Dot {
  height: 0.5rem;
  width: 0.5rem;
  border: 2px solid lightgray;
  border-radius: 200%;
  margin: 0 2px;
}

.Window-Dot:first-child {
  margin-left: auto;
}

.Window-Dot:last-child {
  border-color: var(--cl-secondary);
  background-color: var(--cl-secondary);
  margin-right: 4px;
}

.Window-Content {
  padding: 0.75rem;
  height: calc(100% - 2.5rem);
}

.primary {
  border-color: var(--cl-primary);
}

.secondary {
  border-color: var(--cl-secondary);
}
</style>
