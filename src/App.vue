<script setup lang="ts">
import BasicButton  from '../lib/components/buttons/BasicButton.vue';
import SmoothBurger from "../lib/components/menuToggles/SmoothBurger.vue";
</script>

<template>
  <div class="container">
    <BasicButton>Hallo button</BasicButton>
    <SmoothBurger />
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
