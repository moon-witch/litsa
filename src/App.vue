<script setup lang="ts">
import BasicButton  from '../lib/components/buttons/BasicButton.vue';
import DancingRingLoader from "../lib/components/loaders/DancingRingLoader.vue";
</script>

<template>
  <div class="container">
    <BasicButton>Hallo button</BasicButton>
    <DancingRingLoader />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.border {
  height: fit-content;
}
</style>
