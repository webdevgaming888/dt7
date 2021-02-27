import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationCN from './locales/cn/translation.json';
import translationBM from './locales/bm/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  cn: {
    translation: translationCN
  },
  bm: {
    translation: translationBM
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "bm",
    fallbackLng: "bm", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;