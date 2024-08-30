import { createI18n } from "vue-i18n";
import vi from './locales/vi.json';
import en from './locales/en.json';

const savedLanguage = localStorage.getItem('language') || 'en';

const messages = {
    en,
    vi,
};
  
const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en', 
    messages,
});
  
export default i18n;
