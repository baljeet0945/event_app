import { createRouter, createWebHistory } from 'vue-router';
// import { useAuthStore, useAlertStore } from '@/stores';
import DashboardLayout from '../views/pages/Layout.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: DashboardLayout,
            children: [
                { 
                    path: '',
                    component: () => import ('@/views/pages/Home.vue'), 
                    meta:{title: 'MTE Homepage'} 
                },
                {
                    path: 'about', 
                    component: () => import ('@/views/pages/About.vue'), 
                    meta:{title: 'MTE About'} 
                },
                {
                    path: 'portfolio', 
                    component: () => import ('@/views/pages/Portfolio.vue'), 
                    meta:{title: 'MTE Portfolio'} 
                },
                { 
                    path: 'service', 
                    component: () => import ('@/views/pages/Service.vue'), 
                    meta:{title: 'MTE Service'}  
                },
                { 
                    path: 'event', 
                    component:() => import ('@/views/pages/Event.vue'), 
                    meta:{title: 'MTE Event'} 
                },
                { 
                    path: 'contact', 
                    component: () => import ('@/views/pages/Contact.vue'), 
                    meta:{title: 'MTE Contact'}  
                },
                {
                    path: 'event-detail/:slug', 
                    component: () => import ('@/views/pages/EventDetail.vue'),  
                    meta:{title: 'MTE Event Detail'} 
                },
                {
                    path: 'checkout', 
                    component: () => import ('@/views/pages/Checkout.vue'), 
                    meta:{title: 'MTE Checkout'} 
                },
                {
                    path: 'buy-package/:slug', 
                    component: () => import ('@/views/pages/BuyPackage.vue'), 
                    meta:{title: 'MTE Package'} 
                }
            ]
        },
        {
            path: '/login', 
            component: Login, 
            meta: { title: 'MTE Login' }
        },
        {
            path: '/signup', 
            component: Signup,  
            meta: { title: 'MTE Signup'}
        },
        {
            path: '/forgot-password', 
            component: ForgotPassword, 
            meta: { title: 'MTE Forgot Password'}
        },        
        // catch all redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

// router.beforeEach(async (to) => {
//     // clear alert on route change
//     const alertStore = useAlertStore();
//     alertStore.clear();

//     // redirect to login page if not logged in and trying to access a restricted page 
//     const publicPages = ['/account/login', '/account/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const authStore = useAuthStore();

//     if (authRequired && !authStore.user) {
//         authStore.returnUrl = to.fullPath;
//         return '/account/login';
//     }
// });