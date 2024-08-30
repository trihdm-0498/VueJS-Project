<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
    
  export default defineComponent({
      name: 'LanguageSelector',
      setup() {
        const { locale, t } = useI18n();
        const currentLanguage = ref(locale.value);

        onMounted(() => {
          const savedLanguage = localStorage.getItem('language');
          if (savedLanguage) {
            locale.value = savedLanguage;
            currentLanguage.value = savedLanguage;
          }
        });
    
        const setLanguage = (lang: string) => {
          locale.value = lang;
          currentLanguage.value = lang;
          localStorage.setItem('language', lang);
        };
    
        return {
          currentLanguage,
          setLanguage,
          t
        };
      }
  });
</script>

<template>
    <div class="flex gap-4 absolute right-3 top-2">
      <button
        :class="[
          'px-4 py-2 border rounded',
          currentLanguage === 'vi' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        ]"
        @click="setLanguage('vi')"
      >
        {{ t('language.vi') }}
      </button>
      <button
        :class="[
          'px-4 py-2 border rounded',
          currentLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        ]"
        @click="setLanguage('en')"
      >
        {{ t('language.en') }}
      </button>
    </div>
</template>
