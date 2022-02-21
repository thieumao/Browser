import i18n from 'i18n-js';
import en from './en.json';
import vi from './vi.json';
import { NativeModules, Platform } from 'react-native';

const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier;

// console.log(deviceLanguage); //en_US

i18n.fallbacks = true;
i18n.translations = { en, vi };
i18n.translations = {
  en: {
    ...en,
  },
  vi: {
    ...vi,
  },
};

i18n.defaultLocale = 'vi';

// detect current language
i18n.locale = deviceLanguage.includes('en') ? 'en' : 'vi';

export default i18n;
