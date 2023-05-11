import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useEventStore = defineStore('event', () => { 
  const events = ref([]) 

  const getEvents = async () => {   
    const response = await fetchWrapper.get(`${baseUrl}eventslist`);    
    events.value = response.data
  }
  return { events, getEvents}
})
