import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(createPinia())
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
            type: 'spring',
            stiffness: 250,
            damping: 50,
            mass:0.5
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
            type: 'spring',
            stiffness: 250,
            damping: 50,
            mass:0.5
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
            type: 'spring',
            stiffness: 250,
            damping: 50,           
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
            type: 'spring',
            stiffness: 250,
            damping: 50,           
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
            type: 'spring',
            stiffness: 250,
            damping: 50,           
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
            type: 'spring',
            stiffness: 250,
            damping: 50,           
          },
        },
      }
    },
  })

app.mount('#app')
