<template>
  <div class="relative">
    <LanguageSelector />
    <AppHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelector from './components/LanguageSelector.vue';
import AppHeader from './components/AppHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    LanguageSelector,
    AppHeader,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
