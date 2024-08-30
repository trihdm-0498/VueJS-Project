<template>
  <header class="relative header-background w-full min-h-[368px] h-full text-center bg-transparent bg-cover bg-center flex flex-col justify-center items-center p-2 banner z-[1]">
    <div class="bg-gradient from-[#fbc300] to-[#c98a00] w-full">
      <div class="text-white flex flex-col justify-center items-center">
        <AlgoliaSvg />
        <h1 class="mb-8 mt-8 text-2xl sm:text-3xl md:text-4xl font-light">
          {{ $t('headerTitle') }}
        </h1>
        <SearchBar :onSearch="handleSearch" :SearchItem="handleSearchItem" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlgoliaSvg from './AlgoliaSvg.vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    AlgoliaSvg,
    SearchBar,
  },
  setup() {
    const handleSearch = (searchTerm: string) => {
      console.log(`Searching for: ${searchTerm}`);
    };

    const handleSearchItem = (searchTerm: string) => {
      console.log(`Search item updated to: ${searchTerm}`);
    };

    return {
      handleSearch,
      handleSearchItem
    };
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
