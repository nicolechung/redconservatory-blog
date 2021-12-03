const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'redconservatory',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Blog of nicole chung',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles' },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    ['@vuepress/plugin-medium-zoom', {}],
    ['@vuepress/blog', {
      directories: [{
        id: 'article',
        dirname: '_articles',
        path: '/',
        itemPermalink: '/articles/:slug',
        pagination: {
          lengthPerPage: 2,
        },
      }],
      sitemap: {
        hostname: 'https://redconservatory.com'
      },
    }]
  ]
}
