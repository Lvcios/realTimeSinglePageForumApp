import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'

Vue.use(VueRouter)


const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forum',
        component: Forum
    },
    {
        path: '/logout',
        component: Logout
    }
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})


export default router
