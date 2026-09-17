// UI strings for the page language. Components call `const t = useT(Astro.currentLocale)`.
// Without Astro i18n routing currentLocale is undefined, so site.locale is used.
import { site } from '../config';
import en from './en';
import ko from './ko';

const dicts = { en, ko };

export const useT = (locale: string = site.locale) =>
  dicts[locale as keyof typeof dicts] ?? dicts[site.locale];
