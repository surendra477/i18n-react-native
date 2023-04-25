import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import english from './english.json';
import italian from './italian.json';
import french from './french.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: english,
    it: italian,
    fr: french,
  },
  fallbackLng: 'en',
});

export default i18n;
