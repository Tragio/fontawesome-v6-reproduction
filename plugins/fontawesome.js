import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { defineNuxtPlugin } from '#app'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(faHeart, faUser, faGlobe)

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FA', FontAwesomeIcon)
})
