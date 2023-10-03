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
@import './../main.css';

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

.darkbutton {
  background-color: var(--honeydew);
  color: var(--walnut-brown);
  box-shadow: inset 0 0 3px 0 var(--black-olive);
}

.darkbutton.textbutton {
  background: transparent;
  color: var(--honeydew);
  box-shadow: none;
}

.darkbutton.textbutton:hover {
  background-color: var(--black-olive);
}

.darkbutton:active {
  box-shadow: inset 0 0 4px 2px var(--black-olive);
  font-size: small;
}

.lightbutton {
  background-color: var(--black-olive);
  color: var(--honeydew);
  box-shadow: inset 0 0 3px 0 var(--battleship-gray);
}

.lightbutton.textbutton {
  background: transparent;
  color: var(--walnut-brown);
  box-shadow: none;
}

.lightbutton.textbutton:hover {
  background-color: var(--rose-quarz);
}

.lightbutton:active {
  box-shadow: inset 0 0 4px 2px var(--battleship-gray);
  font-size: small;
}
</style>