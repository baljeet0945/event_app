import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('events', () => { 
  const events = ref([]) 

  const getEvents = async () => {
    const response = await fetch('https://moneyadmin.stageservices.xyz/api/eventslist');
    const json = await response.json();
    events.value = json.data
  }
  return { events, getEvents}
})
