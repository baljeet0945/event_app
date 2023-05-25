import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchWrapper } from '@/helpers';

export const usePageStore = defineStore('page', () => { 
  const inquiryStep = ref(0) 
  const gallerys = ref([])
  const portfolioTab = ref('video');

  const videoGallery = computed(() => {
    let videos = []
    gallerys.value.filter((item) => { 
      if(item.portfolios_type == 'videos')  {
        videos.push(item.upload_video)
      } 
    });  
    return videos
  })

  const imageGallery = computed(() => {
    let images = []
    gallerys.value.filter((item) => { 
      if(item.portfolios_type == 'images')  {
        images.push(item.portfolios_images)
      } 
    });  
    return images
  })
  
  const getPortfolio = async () => {  
    const res = await fetchWrapper.get('portfolios');
    gallerys.value = res.data	
  }  

  function changePortfolioTab(tab){
    portfolioTab.value = tab
  }
  return { inquiryStep, getPortfolio, videoGallery, imageGallery, portfolioTab, changePortfolioTab}
})
