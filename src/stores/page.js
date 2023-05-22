import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => { 
  const inquiryStep = ref(0) 
  

  return { inquiryStep }
})
