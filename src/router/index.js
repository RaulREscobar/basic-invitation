import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import Invitados from '@/views/InvitadosView.vue'
import Login from '@/views/LoginView.vue';
import { getAuth } from 'firebase/auth';

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home,
        meta: { 
            requireAuth: true,
            rol: null,
        }
    },
    {
        path:'/invitados',
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
        meta: { 
            requireAuth: false,
            rol: null,
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  router.beforeEach((to, from, next) => {
    const auth = getAuth().currentUser != null;
    const needAuth = to.meta.requireAuth;

    if(needAuth && !auth) {
        next('login')
    } else {
        next()
    }
  })

  export default router