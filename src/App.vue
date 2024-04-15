<script setup lang="ts">
import BasicButton  from '../lib/components/buttons/BasicButton.vue';
import Billboard from "../lib/components/typography/Billboard.vue";

const sliderContent = [
  "Web Development",
  "WordPress Development",
  "App Development",
  "Plugin Development",
  "CRM Integrations"
];
</script>

<template>
  <div class="container">
    <BasicButton>Hallo button</BasicButton>
    <Billboard pre-text="We excel at" :slider-content="sliderContent"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background: lightgrey;
}

.border {
  height: fit-content;
}
</style>
