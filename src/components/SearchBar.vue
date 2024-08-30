<template>
    <div class="relative w-full max-w-[50%] h-[64px]">
      <form @submit.prevent="handleSubmit" class="flex items-center h-full" role="search" noValidate>
        <input
          class="rounded-md pt-1 px-12 pb-0 pl-16 h-full w-full border-gray-300 active:border-[#e2a400] focus:border-[#e2a400] text-black"
          aria-label="Search"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          :placeholder="$t('searchPlaceholder')"
          spellcheck="false"
          maxlength="512"
          type="search"
          v-model="searchTerm"
          @input="handleInputChange"
        />
        <button
          class="absolute top-1/2 left-0 flex h-[64px] items-center justify-center -translate-y-1/2 w-[64px] text-customYellow py-0 px-4 pl-8"
          type="submit"
          title="Submit the search query"
        >
          <img src="/images/search.svg" alt="Search"/>
        </button>
      </form>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent, ref, onMounted, watch } from 'vue';
    
    export default defineComponent({
        name: 'SearchBar',
        setup() {
        const searchTerm = ref('');
    
        onMounted(() => {
            const savedSearchTerm = localStorage.getItem('searchTerm');
            if (savedSearchTerm) {
            searchTerm.value = savedSearchTerm;
            }
        });
    
        watch(searchTerm, (newVal) => {
            localStorage.setItem('searchTerm', newVal);
        });
    
        const handleInputChange = (e: Event) => {
            const input = e.target as HTMLInputElement;
            searchTerm.value = input.value;
        };
    
        const handleSubmit = () => {
            console.log('Search term submitted:', searchTerm.value);
        };
    
        return {
            searchTerm,
            handleInputChange,
            handleSubmit
        };
        }
    });
</script>
  