import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { getters, mutations, actions, state } from './store'


library.add(fas)
Vue.config.productionTip = false
Vue.component('font-awesome', FontAwesomeIcon)

Vue.use(Vuex)

const store = new Vuex.Store({
    getters,
    actions,
    mutations,
    state
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')