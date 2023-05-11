import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore, useAlertStore } from '@/stores';
import { Layout, Service, About, Portfolio, Event, Contact, Home } from '@/views/pages';
import { Login, Signup, ForgotPassword} from '@/views/auth';


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                { path: '', component: Home, meta:{title: 'MTE Homepage'} },
                { path: 'about', component: About, meta:{title: 'MTE About'} },
                { path: 'service', component: Service, meta:{title: 'MTE Service'}  },
                { path: 'portfolio', component: Portfolio, meta:{title: 'MTE Portfolio'}  },
                { path: 'event', component: Event, meta:{title: 'MTE Event'}  },
                { path: 'contact', component: Contact, meta:{title: 'MTE Contact'}  }
            ]
        },
        {path: '/login', component: Login, meta: { title: 'MTE Login' }},
        {path: '/signup', component: Signup, meta: { title: 'MTE Signup'}},
        {path: '/forgot-password', component: ForgotPassword, meta: { title: 'MTE Forgot Password'}},

        
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