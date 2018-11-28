import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Admin from '@/components/admin'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
    base: 'h5',
    mode: 'history',
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/login', name: 'Login', component: Login },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            beforeEnter(to, from, next) {
                if (sessionStorage.myinfo === encodeURIComponent('加油小飞')) {
                    next()
                } else {
                    next('/login')
                    console.log(sessionStorage.admininfo)
                }
            }
        }
    ]
})
