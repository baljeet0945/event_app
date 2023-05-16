import { ref } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

export const usePackageStore = defineStore('package', () => { 
  const packages = ref([]) 
  const plan = ref([]) 

  const getPackages = async () => {
    const response = await fetchWrapper.get('packages');        
    packages.value = response.data
  }

  const getPackageBySlug = async (slug) => {
    const response = await fetchWrapper.get(`package/${slug}`);        
    plan.value = response.data
  }
  
  return { plan, packages, getPackages, getPackageBySlug }
})
