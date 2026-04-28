export const languages = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
} as const;

export const defaultLang = 'en';

import { en } from './locales/en';
import { es } from './locales/es';
import { pt } from './locales/pt';

export const ui = { en, pt, es } as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)['en'];
