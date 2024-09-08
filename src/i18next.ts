import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import hu from './assets/locales/hu.json';
import en from './assets/locales/en.json';
import ro from './assets/locales/ro.json';
import sk from './assets/locales/sk.json';
import de from './assets/locales/de.json';
import pl from './assets/locales/pl.json';
import cz from './assets/locales/cz.json';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            hu: {
                translation: hu
            },
            en: {
                translation: en
            },
            ro: {
                translation: ro
            },
            sk: {
                translation: sk
            },
            de: {
                translation: de
            },
            pl: {
                translation: pl
            },
            cz: {
                translation: cz
            }
        },
        debug: true,
        fallbackLng: 'en',
        supportedLngs: ['de', 'en', 'ro', 'hu', 'sk'],
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        },
        react: { useSuspense: false }
    })
    .catch(console.error);
export default i18n;