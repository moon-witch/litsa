<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    default: 'dark'
  },
  text: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconPos: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <button :class="{darkbutton: props.color === 'dark', lightbutton: props.color === 'light', textbutton: props.text}">
    <i v-if="iconPos === 'left'" :class="props.icon" class="icon-left"></i>
    <slot />
    <i v-if="iconPos === 'right'" :class="props.icon" class="icon-right"></i>
  </button>
</template>

<style scoped lang="scss">
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