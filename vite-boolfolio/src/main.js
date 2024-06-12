import { createApp } from 'vue'
import './assets/scss/general.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faChevronLeft, faChevronRight)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
