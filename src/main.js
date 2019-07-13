// 入口文件
console.log('OK')

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)  //安装路由

//导入组件
import app from './App.vue'
import { Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入路由模块
import router from './router.js'

Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

let vm = new Vue({
    el: '#app',
    render(h) {
        return h(app)
    },
    router
})