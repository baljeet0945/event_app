import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useTestimonialStore = defineStore('testimonial', () => { 
  const testimonials = ref([]) 
  const testimonialSlides = ref(1) 

  const getTestimonial = async () => {
    const response = await fetchWrapper.get(`${baseUrl}testimonials`);  
    testimonials.value = response.data
  }

  // function changeName () {
  //   testimonialSlides.value = "Franklin"
  // }

  return { testimonials, getTestimonial, testimonialSlides}
})