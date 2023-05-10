import { ref } from 'vue'
import { defineStore } from 'pinia'
import { APISettings } from '../stores/config';

export const useTestimonialStore = defineStore('testimonials', () => { 
  const testimonials = ref([]) 

  const getTestimonial = async () => {
    const response = await fetch(APISettings.baseURL + 'testimonials', {
      method: 'GET',
      headers: APISettings.headers
    });
    const json = await response.json();
    testimonials.value = json.data
  }

  return { testimonials, getTestimonial}
})