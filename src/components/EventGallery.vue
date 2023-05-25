<script setup>
import { ref } from 'vue';
import VueGallery from 'vue-gallery'
import MasonryWall from '@yeger/vue-masonry-wall'
import { usePageStore } from '@/stores/page'
import { storeToRefs } from "pinia";

const store = usePageStore();
const { portfolioTab, videoGallery, imageGallery } = storeToRefs(store);
const { changePortfolioTab, } = store
const galleryIndex = ref(null)
const galleryOptions = {
  carousel: true,
}

</script>

<template>
  <div class="container">
    <div class="sectionfrstTop">
      <h2 class="secTitle" v-motion-pop-bounce-visible-once>Creating Memorable Events</h2>
      <p style="color: #000; font-weight: 500;" v-motion-pop-bounce-visible-once>Having a celebration is supposed to be fun, so leave your stress at home and let us do the work for you!</p>
    </div>
    <div class="sectionFilterGallery">
      <div id="exTab1" class="container tabSec" v-motion-pop-bounce-visible-once>	
        <ul  class="nav nav-pills">
          <li :class="{ 'active' : portfolioTab === 'video'}"><router-link to="" @click="changePortfolioTab('video')"><span><img src="@/assets/images/play=black.png"></span> Video Gallery</router-link></li>
          <li :class="{ 'active' : portfolioTab === 'image'}"><router-link to="" @click="changePortfolioTab('image')"><span><img src="@/assets/images/photo-icon.png"></span> Photo Gallery</router-link></li>          
      </ul> 
        <div class="tab-content clearfix">
          <div class="tab-pane active" v-show="portfolioTab == 'video'">
            <!-- <VueGallery :options="galleryOptions" :video="videoGallery" :index="galleryIndex" @close="galleryIndex = null"></VueGallery>
            <div class="gallery-container">
              <masonry-wall :items="videoGallery" :column-width="300" :gap="5">
                <template #default="{ item, index }">
                  <div class="itemGl image" @click="galleryIndex = index">
                    <video width="320" height="240" >
                      <source :src="item" >                     
                      Your browser does not support the video tag.
                    </video>                  
                  </div> 
                </template>
              </masonry-wall>
            </div> -->
          </div> 
          <div class="tab-pane active" v-show="portfolioTab == 'image'">
            <VueGallery :ssr-columns="3" :options="galleryOptions" :images="imageGallery" :index="galleryIndex" @close="galleryIndex = null"></VueGallery>
            <div class="gallery-container">
              <masonry-wall :items="imageGallery" :column-width="300" :gap="5">
                <template #default="{ item, index }">
                  <img :src="item" @click="galleryIndex = index"/>                
                </template>
              </masonry-wall>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.tab-content .gallery-container{padding: 2rem 0;}
</style>