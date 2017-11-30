import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import account from '@/page/account'
import login from '@/page/account/login'
import loginOut from '@/page/account/login-out'
import Map from './map/map'
import CarAir from './car-air'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        ...Map,
        ...CarAir
    ]
})
