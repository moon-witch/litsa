<script setup lang="ts">
import {onMounted, ref} from "vue";

defineProps({
  color: {
    type: String,
    default: 'black'
  }
})

const emit = defineEmits(['open', 'closed'])

const toggle = ref()

const HANDLE_TOGGLE = () => {
  toggle.value.setAttribute('aria-pressed', !toggle.value.matches('[aria-pressed=true]'))
  if (toggle.value.matches('[aria-pressed=false]')) {
    emit('closed')
  } else {
    emit('open')
  }
}

onMounted(() => {
  toggle.value.addEventListener('click', HANDLE_TOGGLE)
})
</script>

<template>
  <div class="container">
    <button ref="toggle">
      <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="6.25" />
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="11.25" />
        <rect width="18" height="1.5" fill=red ry="0.75" x="3" y="16.25" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
button {
  width: 280px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  padding: 0;
  scale: 1;
  background: transparent;
  border: 0;
  border-radius: 50%;
  transition: background 0.2s;
  cursor: pointer;
}

button svg:first-of-type {
  width: 65%;
}

button rect {
  transform-box: fill-box;
  transform-origin: 50% 50%;
  fill: v-bind(color);
}
.unset rect {
  transform-box: unset;
}
[aria-pressed=true] rect {
  transition: translate 0.2s, rotate 0.2s 0.3s;
}
rect {
  transition: rotate 0.2s 0s, translate 0.2s 0.2s;
}

[aria-pressed=true] rect:nth-of-type(1) {
  translate: 0 333%;
  rotate: -45deg;
}
[aria-pressed=true] rect:nth-of-type(2) {
  rotate: 45deg;
}
[aria-pressed=true] rect:nth-of-type(3) {
  translate: 0 -333%;
  rotate: 45deg;
}
[aria-pressed=true] svg {
  rotate: 90deg;
  transition: rotate 1s 0.4s;
}

@supports (--custom: linear()) {
  :root {
    --elastic-out: linear(
            0, 0.2178 2.1%, 1.1144 8.49%,
            1.2959 10.7%, 1.3463 11.81%,
            1.3705 12.94%, 1.3726, 1.3643 14.48%,
            1.3151 16.2%, 1.0317 21.81%,
            0.941 24.01%, 0.8912 25.91%,
            0.8694 27.84%, 0.8698 29.21%,
            0.8824 30.71%, 1.0122 38.33%, 1.0357,
            1.046 42.71%, 1.0416 45.7%,
            0.9961 53.26%, 0.9839 57.54%,
            0.9853 60.71%, 1.0012 68.14%,
            1.0056 72.24%, 0.9981 86.66%, 1
    );
    --elastic-in-out: linear(
            0, 0.0009 8.51%, -0.0047 19.22%,
            0.0016 22.39%, 0.023 27.81%,
            0.0237 30.08%, 0.0144 31.81%,
            -0.0051 33.48%, -0.1116 39.25%,
            -0.1181 40.59%, -0.1058 41.79%, -0.0455,
            0.0701 45.34%, 0.9702 55.19%,
            1.0696 56.97%, 1.0987 57.88%,
            1.1146 58.82%, 1.1181 59.83%,
            1.1092 60.95%, 1.0057 66.48%,
            0.986 68.14%, 0.9765 69.84%,
            0.9769 72.16%, 0.9984 77.61%,
            1.0047 80.79%, 0.9991 91.48%, 1
    );
  }
  [aria-pressed=true] svg {
    transition-timing-function: var(--elastic-out);
  }
}
</style>