import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Events from '../views/Events.vue'
import Contact from '../views/ContactUs.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Packages from '../views/Packages.vue'
import PackagePayment from '../views/PackagePayment.vue'
import SavedEvents from '../views/SavedEvents.vue'
import successfullyPurchased from '../views/successfullyPurchased.vue'
import Checkout from '../views/Checkout.vue'
import EventsDetails from '../views/EventsDetails.vue'
import ForgotPasswords from '../views/ForgotPassword.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        hideNavigation:false,       
        title: 'MTE Homepage'
      }
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutUs,
      meta:{
        title: 'MTE About'
      }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/services',
      name: 'service',
      component: Services,
      meta:{
        title: 'MTE Services'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta:{
        title: 'MTE Portfolio'
      }
    },
    {
      path: '/event',
      name: 'event',
      component: Events,
      meta:{
        title: 'MTE Events'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta:{
        title: 'MTE Contact'
      }
    },   
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        hideNavigation: true,
        title: 'MTE Login'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { 
        hideNavigation: true,
        title: 'MTE Signup' 
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/packages',
      name: 'packages',
      component: Packages
    },
    {
      path: '/package-payment',
      name: 'package-payment',
      component: PackagePayment
    },
    {
      path: '/saved-events',
      name: 'saved-events',
      component: SavedEvents
    },
    {
      path: '/successfullyPurchased',
      name: 'successfullyPurchased',
      component: successfullyPurchased
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/events-details',
      name: 'events-details',
      component: EventsDetails
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswords,
      meta: { 
        hideNavigation: true,
        title: 'MTE Forgot Password' 
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router
