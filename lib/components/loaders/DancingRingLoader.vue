<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<template>
  <div class="content">
    <div>
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $speed: 8s;
  $ring: v-bind(color);
  $line: 0.5vmin;
  $spin: spin $speed linear 0s infinite;

@keyframes spin {
  100% { transform: rotate(-360deg); }
}

.content {
  width: 30vmin;
  height: 30vmin;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content div {
  border-radius: 100%;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 $line $ring inset;
  box-sizing: border-box;
  animation: $spin;
}

.content > div > div {
  left: 26%;
  width: 48%;
  height: 48%;
}

.content > div > div > div {
  left: -33%;
  width: 170%;
  height: 170%;
}

.content > div > div > div > div {
  left: 29%;
  width: 40%;
  height: 40%;
}

.content > div > div > div > div > div {
  left: -50%;
  width: 200%;
  height: 200%;
}

.content > div > div > div > div > div > div {
  left: 36.5%;
  width: 28%;
  height: 28%;
}
</style>