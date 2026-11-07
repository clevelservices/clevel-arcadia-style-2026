export type Lang = 'tr' | 'en';

export const CALENDAR_URL = 'https://calendar.app.google/iWjKznNPnr4AqRHCA';
export const EMAIL = 'info@clevel.services';
/** Second address on the Turkish-friendly domain, shown next to the main one */
export const EMAIL_ALT = 'info@cleveldanismanlik.com';
export const EMAILS = [EMAIL, EMAIL_ALT];
export const SITE = 'https://www.clevel.services';

/** Fill in to show the links in the footer and on the contact page; empty values stay hidden. */
export const SOCIAL = {
  linkedin: 'https://tr.linkedin.com/company/c-level-services-tr',
  instagram: '',
};

export const routes = {
  home: { tr: '/', en: '/en/' },
  services: { tr: '/hizmetler/', en: '/en/services/' },
  about: { tr: '/hakkimizda/', en: '/en/about/' },
  contact: { tr: '/iletisim/', en: '/en/contact/' },
} as const;

export const ui = {
  tr: {
    skip: 'İçeriğe geç',
    nav: { services: 'Hizmetler', about: 'Hakkımızda', contact: 'İletişim' },
    menu: 'Menü',
    close: 'Kapat',
    other: 'English',
    bookCall: 'Görüşme planla',
    writeUs: 'E-posta gönder',
    tryIt: 'Kendin dene',
    details: 'Hizmet sayfası',
    next: 'Sonraki hizmet',
    footer: {
      company: 'Clevel Services Danışmanlık A.Ş.',
      rights: 'Tüm hakları saklıdır.',
      trademark: '“c-level services 155” tescilli markamızdır (TÜRKPATENT 2023 099323).',
    },
  },
  en: {
    skip: 'Skip to content',
    nav: { services: 'Services', about: 'About', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    other: 'Türkçe',
    bookCall: 'Book a call',
    writeUs: 'Send an email',
    tryIt: 'Try it yourself',
    details: 'Service page',
    next: 'Next service',
    footer: {
      company: 'Clevel Services Danışmanlık A.Ş.',
      rights: 'All rights reserved.',
      trademark: '“c-level services 155” is our registered trademark (TÜRKPATENT 2023 099323).',
    },
  },
} as const;
