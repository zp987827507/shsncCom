import Vue from 'vue'
import App from './App.vue'
import router from './router'
import shsncCom from '../packages'
Vue.config.productionTip = false
Vue.use(shsncCom)
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
