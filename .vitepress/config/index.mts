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
    carbonAds: {
      code: 'https://irmingw.github.io/zay-ui/form/input.html',
      placement: 'Hello',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-cn': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeKeyAriaLabel: '关闭',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      ...enConfig,
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn',
      link: '/zh-cn/',
      ...zhConfig,
    },
  },
});
