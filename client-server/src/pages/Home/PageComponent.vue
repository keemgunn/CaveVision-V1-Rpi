<script setup lang="ts">
import { ref } from 'vue';
import { useStreamSocket } from '@/composables/useSocket';

const { imageSrc } = useStreamSocket();
</script>

<template>
<div id="router-page" class="home">

  <div class="stream-container">
    <img id="stream-image" :src="imageSrc"/>
  </div>

</div>
</template>

<style lang="scss">
body, #app {
  background-color: #000;
  width: 100%;
  height: 100%;
}
#router-page.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stream-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#stream-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>