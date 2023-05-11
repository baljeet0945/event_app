import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useServiceStore = defineStore('services', () => { 
  const services = ref([]) 

  const getServices = async () => {
    const response = await fetchWrapper.get(`${baseUrl}services`);        
    services.value = response.data
  }
  return { services, getServices }
})
