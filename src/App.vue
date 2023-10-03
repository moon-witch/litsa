<script setup lang="ts">
import MainButton from './components/buttons/BasicButton.vue';

</script>

<template>
  <div class="appContainer">
    <MainButton color="dark" icon="pi pi-check">Basic Button</MainButton>
    <MainButton color="light" icon="pi pi-check">Basic Button</MainButton>
  </div>
</template>

<style scoped lang="scss">
.appContainer {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  background-color: var(--walnut-brown);
}
</style>
