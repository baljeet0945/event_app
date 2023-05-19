import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', () => { 
  const events = ref([]) 
  const eventDetail = ref([]) 

  const getEvents = async () => { 
    const response = await fetchWrapper.get('eventslist');    
    events.value = response.data
  }

  const getEventsById = async (eventId) => {   
    const response = await fetchWrapper.get('eventslist');    
    events.value = response.data
  }

  const getEventDetail = async (slug) => {  
      const response = await fetchWrapper.get(`events-details/${slug}`);    
      eventDetail.value = response.data
  }
  
  return {eventDetail, events, getEvents, getEventDetail}
})
