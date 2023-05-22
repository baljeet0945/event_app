import { ref, computed} from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'
import { useTicketStore } from './ticket'

export const useEventStore = defineStore('event', () => { 
  const items = useTicketStore()
  const events = ref([]) 
  const eventDetail = ref([]) 

  const getEvents = async () => {       
    const response = await fetchWrapper.get('eventslist');
    response.data.forEach((event, index) => {
      let found = items.cart.find(item => item.id == event.id );
      if(found){
        response.data[index].isCart = true
        response.data[index].isHover = false
      }else{        
        response.data[index].isCart = false
        response.data[index].isHover = false
      }
    });   
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
