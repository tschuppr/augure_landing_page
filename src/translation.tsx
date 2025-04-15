import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend' // replaces i18next-xhr-backend

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'fr',
    fallbackLng: 'fr',

    keySeparator: false,
    interpolation: {
      escapeValue: false
    },

    // resources: {
    //   en: {
    //     translations: translationEn
    //   },
    //   es: {
    //     translations: translationEs
    //   },
    //   fr: {
    //     translations: translationFr
    //   }
    // },
    ns: ['translations'],
    defaultNS: 'translations',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  })

export default i18n
