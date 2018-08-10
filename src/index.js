
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import './assets/styles/reset.css'
import './assets/styles/border.css'


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
}); //挂在到 root 节点