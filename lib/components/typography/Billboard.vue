<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  preText: {
    type: String,
    default: ''
  },
  preTextColor: {
    type: String,
    default: 'black'
  },
  sliderContent: {
    type: Array,
    default: []
  },
  sliderContentColor: {
    type: String,
    default: 'blue'
  },
  font: {
    type: String,
    default: "'Ubuntu', sans-serif"
  },
  fontSize: {
    type: String,
    default: '30px'
  },
  width: {
    type: String,
    default: '600px'
  }
})

const sliderCounter = ref(0);

const slide = () => {
  sliderCounter.value = (sliderCounter.value + 1) % props.sliderContent.length;
}

const slideInterval = ref<ReturnType<typeof setInterval>>();

onMounted(() => {
  slideInterval.value = setInterval(slide, 4000);
})

onUnmounted(() => {
  if (slideInterval.value) clearInterval(slideInterval.value);
})
</script>

<template>
  <div ref="slider" id="slider">
    <div class="span">{{ preText }}</div>
    <div ref="sliderValue" class="span" id="sliderValue">
      <transition-group name="fade" tag="span" mode="out-in">
        <span
            v-for="(letter, index) in sliderContent[sliderCounter % sliderContent.length]"
            :key="`${sliderCounter}-${index}`"
            class="letter"
            :class="{ 'space': letter === ' ' }"
            :style="{ 'transition-delay': `${index * 0.1}s` }"
        >
        {{ letter }}
        </span>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
#slider {
  width: v-bind(width);
  display: flex;
  gap: calc(v-bind(fontSize) / 3);
  font-size: v-bind(fontSize);
  font-family: v-bind(font);
  white-space: nowrap;
  flex-wrap: nowrap;
  color: v-bind(preTextColor)
}

#sliderValue {
  display: flex;
  color: v-bind(sliderContentColor);
  font-weight: 700;
  height: 50px;
}

.fade-enter-active{
  transition: opacity 0.5s, transform 0.5s;
}

.fade-leave-active {
  opacity: 0;
  transition-delay: 0s !important;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0s, transform 0s;
}

.letter, .space {
  display: inline-block;
}

.space {
  width: 10px;
}
</style>