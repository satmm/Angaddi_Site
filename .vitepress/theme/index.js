// index.js

import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Import your Vue component(s) here
import Cards from '../../Components/Cards.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register your Vue component(s)
    app.component('Cards', Cards)
  }
}
