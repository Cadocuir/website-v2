import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
    translations: {
    fr: { lang },
    en: { lang },
  },
  loaders: [
    {
      locale: 'fr',
      key: 'common',
      loader: async () => (
        await import('./fr/common.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'home',
      routes: ['/'], 
      loader: async () => (
        await import('./fr/home.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./fr/about.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'projects',
      routes: ['/projects'],
      loader: async () => (
        await import('./fr/projects.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./en/about.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'projects',
      routes: ['/projects'],
      loader: async () => (
        await import('./en/projects.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);