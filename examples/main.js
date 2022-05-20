import Vue from 'vue'
import App from './App.vue'
import router from './router'
import shsncCom from '../packages'
// import elem from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// Vue.use(elem)

Vue.use(shsncCom)
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
