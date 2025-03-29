import { defineConfig } from 'vitepress';
import zhConfig from './zh-cn.mts';
import enConfig from './en.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  base: '/zay-ui/',
  head: [['link', { rel: 'icon', href: '/zay-ui/logo.svg' }]],
  themeConfig: {
    siteTitle: 'Zay UI',
    logo: {
      dark: '/logo.svg',
      light: '/dark-logo.svg',
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-cn',
      link: '/',
      ...zhConfig,
    },
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   link: '/',
    //   ...enConfig,
    // },
  },
});
