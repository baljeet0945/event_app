import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import  { router }  from './router'

import { MotionPlugin } from '@vueuse/motion'
import { createVfm } from 'vue-final-modal'

import Toast, { POSITION, TYPE } from "vue-toastification";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'vue-final-modal/style.css'


const app = createApp(App)
const pinia = createPinia()
const vfm = createVfm()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(vfm)
app.use(MotionPlugin, {
    directives: {
      'pop-bounce-visible-once': {
        initial: {
          scale: 0.3,
          opacity: 0
        },
        visibleOnce: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backOut',
          },         
        },
      },
      'pop-bounce': {
        initial: {
          scale: 0.3,
          opacity: 0
        },
        enter: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backOut',
          }, 
        },
      },
      'left-in-visible-once': {
        initial: {
          x: '-100px',
          opacity: 0
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backInOut',
          }, 
        },
      },
      'right-in-visible-once': {
        initial: {
          x: '100px',
          opacity: 0
        },
        visibleOnce: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backInOut',
          }, 
        },
      },
      'left-in': {
        initial: {
          x: '-100px',
          opacity: 0
        },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backInOut',
          }, 
        },
      },
      'right-in': {
        initial: {
          x: '100px',
          opacity: 0
        },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'backInOut',
          }, 
        },
      }
    },
  })
const options = {
    // You can set your default options here
    position: POSITION.TOP_CENTER,
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    pauseOnHover: true,
    timeout: 5000,
    newestOnTop: true,
  //   transition: {
  //     enter: "fade-enter-active",
  //     leave: "Vue-Toastification__bounce-leave-active",
  //     move: "fade-move"
  // }
};

app.use(Toast, options);

app.mount('#app')
