<template>
  <header class="relative header-background w-full min-h-[368px] h-full text-center bg-transparent bg-cover bg-center flex flex-col justify-center items-center p-2 banner z-[1]">
    <div class="bg-cover bg-center bg-repeat bg-scroll bg-clip-border bg-origin-padding bg-gradient from-[#fbc300] to-[#c98a00]">
      <div class="header-content text-white flex flex-col justify-center items-center">
        <AlgoliaSvg />
        <h1 class="mb-8 mt-8 text-2xl sm:text-3xl md:text-4xl font-light">
          {{ $t('headerTitle') }}
        </h1>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AlgoliaSvg from './AlgoliaSvg.vue';

  export default defineComponent({
      name: 'AppHeader',
      components: {
        AlgoliaSvg
      }
  });
</script>

<style scoped>
  .header-background {
    background-image: url(~@/../public/images/banner.png);
    background-size: cover;
    background-position: center;
  }
</style>
