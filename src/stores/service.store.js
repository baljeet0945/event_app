import { ref } from 'vue'
import { defineStore } from 'pinia'
import { APISettings } from './config';
export const useServiceStore = defineStore('services', () => { 
  const services = ref([]) 

  const getServices = async () => {
    const response = await fetch(APISettings.baseURL + 'services', {
      method: 'GET',
      headers: APISettings.headers
    });
    const json = await response.json();
    services.value = json.data
  }
  return { services, getServices }
})
