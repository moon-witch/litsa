<script setup lang="ts">

</script>

<template>
  <div class="pl"></div>
</template>

<style scoped lang="scss">
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  $trans-timing: cubic-bezier(0.65,0,0.35,1);

:root {
  font-size: calc(14px + (30 - 14) * (100vw - 280px) / (3840 - 280));
}

.pl {
  $size: 10em;

  margin: auto;
  position: relative;
  width: $size;
  height: $size;

  &:before,
  &:after {
    animation: pl-before 3.5s $trans-timing infinite;
    background-color: currentColor;
    content: "";
    display: block;
    position: absolute;
    top: 75%;
    left: 50%;
    width: 25%;
    height: 25%;
    transform-origin: 100% 100%;
  }
  &:after {
    animation-name: pl-after;
  }
}

/* Animations */
@keyframes pl-before {
  from {
    transform: rotate(0) translate(-100%,-100%) rotate(-90deg);
  }
  20% {
    transform: rotate(0) translate(-100%,-100%) rotate(90deg);
  }
  40% {
    transform: rotate(0) translate(-300%,-100%) rotate(90deg);
  }
  60% {
    transform: rotate(90deg) translate(-300%,-100%) rotate(-90deg);
  }
  80% {
    transform: rotate(90deg) translate(-100%,-100%) rotate(-90deg);
  }
  to {
    transform: rotate(90deg) translate(-100%,100%) rotate(90deg);
  }
}
@keyframes pl-after {
  from,
  20% {
    transform: rotate(0) scale(1,1);
  }
  40% {
    transform: rotate(0) scale(3,1);
  }
  60% {
    transform: rotate(90deg) scale(3,1);
  }
  80% {
    transform: rotate(90deg) scale(1,1);
  }
  to {
    transform: rotate(90deg) scale(1,1) translate(0,200%);
  }
}
</style>