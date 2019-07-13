// 入口文件
console.log('OK')

import Vue from 'vue'

//导入组件
import app from './App.vue'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

let vm = new Vue({
    el: '#app',
    render(h) {
        return h(app)
    },
})