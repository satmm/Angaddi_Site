
// import { defineConfig } from 'vitepress'
// import { useRouter, useRoute } from 'vue-router'

// const lang = 'en'

// export default defineConfig({
//   title: 'AngadiApp',
//   description: 'Point of Sale Mobile App for small shops',
//   lang,
//   locales: {
//     root: {
//       label: 'English',
//       lang: 'en',
//     },
//     kn: {
//       label: 'ಕನ್ನಡ',
//       lang: 'kn',
//     },
//     hi: {
//       label: 'हिन्दी',
//       lang: 'hi',
//     },
//     te: {
//       label: 'తెలుగు',
//       lang: 'te',
//     },
//     ta: {
//       label: 'தமிழ்',
//       lang: 'ta',
//     },
//     ml: {
//       label: 'മലയാളം',
//       lang: 'ml',
//     },
//   },
//   themeConfig: {
//     logo: '/logo.png',
//     search: {
//       provider: 'local',
//     },
//     nav: [
//       { text: 'Home', link: `/${lang}/` },
//       { text: 'User guide', link: `/${lang}/userguide.html` },
//       { text: 'FAQ', link: `/${lang}/faq.html` },
//       { text: 'Blogs', link: `/${lang}/blogs.html` },
//       { text: 'About us', link: `/${lang}/about.html` },
//       { text: 'Privacy', link: `/${lang}/privacy.html` },
//       { text: 'T&C', link: `/${lang}/tnc.html` },
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: `/markdown-examples.html` },
//           { text: 'Runtime API Examples', link: `/api-examples.html` }
//         ]
//       }
//     ],
//     socialLinks: [
//       { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
//       { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
//       { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' },
//       { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
//       { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' },
//     ],
//     footer: {
//       copyright: 'Copyright © 2018-present <a style="text-decoration:none;color:rgb(52, 81, 178);" href="https://www.penzigo.com">Penzigo Technology Solutions Pvt Ltd</a>'
//     }
//   },
// })
















import { defineConfig } from 'vitepress'

const lang = 'en';

export default defineConfig({
  
  title: 'AngadiApp',
  description: 'Point of Sale Mobile App for small shops',
  lang, // Add this line to set the default language for the entire website
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      // default: true,
    },
    kn: {
      label: 'ಕನ್ನಡ',
      lang: 'kn',
      link: '/kn'
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      link: '/hi'
    },
    te: {
      label: 'తెలుగు',
      lang: 'te',
      link: '/te'
    },
    ta: {
      label: 'தமிழ்',
      lang: 'ta',
      link: '/ta'
    },
    ml: {
      label: 'മലയാളം',
      lang: 'ml',
      link: '/ml'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: `/` },
      { text: 'User guide', link: `/userguide.html` },
      { text: 'FAQ', link: `/faq.html` },
      { text: 'Blogs', link: `/blogs.html` },
      { text: 'About us', link: `/about.html` },
      { text: 'Privacy', link: `/privacy.html` },
      { text: 'T&C', link: `/tnc.html` },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: `/markdown-examples.html` },
          { text: 'Runtime API Examples', link: `/api-examples.html` }
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
