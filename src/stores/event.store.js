import { ref } from 'vue'
import { defineStore } from 'pinia'
import { APISettings } from './config';
export const useEventStore = defineStore('events', () => { 
  const events = ref([]) 

  const getEvents = async () => {   
    const response = await fetch(APISettings.baseURL + 'eventslist', {
      method: 'GET',
      headers: APISettings.headers
    });
    const json = await response.json();
    events.value = json.data
  }
  return { events, getEvents}
})
