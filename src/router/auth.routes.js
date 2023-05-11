import { createRouter, createWebHistory } from 'vue-router'

// import Login from '../views/Login.vue'
// import Signup from '../views/Signup.vue'
// import Profile from '../views/Profile.vue'
// import Packages from '../views/Packages.vue'
// import PackagePayment from '../views/PackagePayment.vue'
// import SavedEvents from '../views/SavedEvents.vue'
// import successfullyPurchased from '../views/successfullyPurchased.vue'
// import Checkout from '../views/Checkout.vue'
// import EventsDetails from '../views/EventsDetails.vue'
// import ForgotPasswords from '../views/ForgotPassword.vue'

import {Home, BasicLayout, Service, About, Portfolio, Event, Contact } from '@/views';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BasicLayout,
      children: [
          { path: '', component: Home, meta:{title: 'MTE Homepage'} },
          { path: 'about', component: About, meta:{title: 'MTE About'} },
          { path: 'service', component: Service, meta:{title: 'MTE Service'}  },
          { path: 'portfolio', component: Portfolio, meta:{title: 'MTE Portfolio'}  },
          { path: 'event', component: Event, meta:{title: 'MTE Event'}  },
          { path: 'contact', component: Contact, meta:{title: 'MTE Contact'}  },
      ],
      meta: { 
        hideNavigation:false
      }
    },    
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta: { 
    //     hideNavigation: true,
    //     title: 'MTE Login'
    //   }
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: Signup,
    //   meta: { 
    //     hideNavigation: true,
    //     title: 'MTE Signup' 
    //   }
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile
    // },
    // {
    //   path: '/packages',
    //   name: 'packages',
    //   component: Packages
    // },
    // {
    //   path: '/package-payment',
    //   name: 'package-payment',
    //   component: PackagePayment
    // },
    // {
    //   path: '/saved-events',
    //   name: 'saved-events',
    //   component: SavedEvents
    // },
    // {
    //   path: '/successfullyPurchased',
    //   name: 'successfullyPurchased',
    //   component: successfullyPurchased
    // },
    // {
    //   path: '/checkout',
    //   name: 'checkout',
    //   component: Checkout
    // },
    // {
    //   path: '/events-details',
    //   name: 'events-details',
    //   component: EventsDetails
    // },
    // {
    //   path: '/forgot-password',
    //   name: 'forgot-password',
    //   component: ForgotPasswords,
    //   meta: { 
    //     hideNavigation: true,
    //     title: 'MTE Forgot Password' 
    //   }
    // }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router
