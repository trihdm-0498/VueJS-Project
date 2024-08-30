<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelector from './components/LanguageSelector.vue';

export default defineComponent({
  name: 'App',
  components: {
    LanguageSelector,
  }
});
</script>

<template>
  <div class="relative font-sans antialiased">
    <LanguageSelector />
    <p>{{ $t('headerTitle') }}</p>
  </div>
</template>
