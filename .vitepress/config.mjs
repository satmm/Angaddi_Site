import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-IN",
  title: "AngadiApp",
  description: "Point of Sale Mobile App for small shops",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User guide', link: '/userguide' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Blogs', link: '/blogs' },
      { text: 'About us', link: '/about' },
      { text: 'Privacy', link: '/privacy' },
      { text: 'T&C', link: '/tnc' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      copyright: 'Copyright © 2018-present <a style="text-decoration:none;color:rgb(52, 81, 178);" href="https://www.penzigo.com">Penzigo Technology Solutions Pvt Ltd</a>'
    }
  },
})
