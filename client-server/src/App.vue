<script setup lang="ts">
import { inject } from 'vue';
import { RouterView } from 'vue-router';

// =================== PROCESS ENV
const process_env = inject('process_env');

// =================== CSS FILES
import('@/main.scss');


</script>
<!-- Layout of the #app depends on what kind of NavBar you're implementing. Change Settings on '@/configs/templateConfigs' -->
<template>

  <RouterView/>

</template>


<style lang="scss">
  // ==== IMPORT Material Symbols
  @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
</style>
<style src="@vueform/slider/themes/default.css"></style>