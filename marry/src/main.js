// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import weVue from 'we-vue'
import 'we-vue/lib/style.css'
import App from './App'

import { routes } from './router'

Vue.config.productionTip = false

Vue.use(vueRouter)
Vue.use(weVue)

const router = new vueRouter({
        routes,
        mode: 'history' //去掉链接中的#
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
