import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import  { router }  from './router'

import { MotionPlugin } from '@vueuse/motion'



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
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

app.mount('#app')
