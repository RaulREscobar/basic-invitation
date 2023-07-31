import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import Invitados from '@/views/InvitadosView.vue'
import Login from '@/views/LoginView.vue';


const userLogget = JSON.parse(localStorage.getItem("user"));
const isLogget = userLogget !== null ? userLogget.userLogget : false;


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            if (!isLogget) {
                next({ name: 'login' })
            } else {
                next()
            }
        },
        meta: {
            requireAuth: true,
            rol: null,
        },
    },
    {
        path: '/invitados',
        name: 'invitados',
        component: Invitados,
        meta: {
            requireAuth: true,
            rol: 'admin',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (isLogget) {
                next({ name: 'home' })
            } else {
                next()
            }
        },
        meta: {
            requireAuth: false,
            rol: null,
        },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router