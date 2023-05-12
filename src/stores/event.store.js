import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useEventStore = defineStore('event', () => { 
  const events = ref([]) 
  const eventDetail = ref([]) 

  const getEvents = async () => { 
    try {  
      const response = await fetchWrapper.get(`${baseUrl}eventslist`);    
      events.value = response.data
    } catch (error) {
        // const alertStore = useAlertStore();
        // alertStore.error(error); 
        console.log(error);               
    } 
  }

  const getEventDetail = async (slug) => { 
    try {
        const response = await fetchWrapper.get(`${baseUrl}events-details/${slug}`);    
        eventDetail.value = response.data
    } catch (error) {
        // const alertStore = useAlertStore();
        // alertStore.error(error); 
        console.log(error);               
    }  
    
  }
  return {eventDetail, events, getEvents, getEventDetail}
})
