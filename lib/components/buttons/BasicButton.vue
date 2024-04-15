<script setup lang="ts">
defineProps({
  bg: {
    type: String,
    default: null
  },
  fontColor: {
    type: String,
    default: null
  },
  text: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  iconPos: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <button :class="{'text-button': text}">
    <i v-if="icon && iconPos === 'left'" :class="icon" class="icon-left"></i>
    <slot />
    <i v-if="icon && iconPos === 'right'" :class="icon" class="icon-right"></i>
  </button>
</template>

<style>
button {
  margin: 0.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  background: v-bind(bg)
}

button:hover {
    border-radius: 7px;
    transition: 0.2s ease;
  }

.icon-left {
  padding-right: 0.6rem;
}

.icon-right {
  padding-left: 0.6rem;
}
</style>