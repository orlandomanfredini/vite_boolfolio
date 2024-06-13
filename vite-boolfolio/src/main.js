import { createApp } from 'vue'
import './assets/scss/general.scss'
import {createRouter, createWebHistory} from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppContacts from './pages/AppContacts.vue'
import AppProjects from './pages/AppProjects.vue'
import App from './App.vue'



const router = createRouter({
    history: createWebHistory(),
    routes:  [
        {path: '/', name: 'home', component: AppHome},
        {path: '/portfolio', name: 'portfolio', component: AppProjects},
        {path: '/contact', name: 'contact', component: AppContacts},
    ]

})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faChevronLeft, faChevronRight)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
