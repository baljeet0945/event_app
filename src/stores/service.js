import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('services', () => { 
  const services = ref([]) 

  const getServices = async () => {
    const response = await fetch('https://moneyadmin.stageservices.xyz/api/services');
    const json = await response.json();
    services.value = json.data
  }

  return { services, getServices}
})
