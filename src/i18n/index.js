import { createI18n } from 'vue-i18n'
import en from './en.json'
import es from './es.json'

const userLang = navigator.language || navigator.userLanguage
const locale = userLang.startsWith('es') ? 'es' : 'en'

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})
