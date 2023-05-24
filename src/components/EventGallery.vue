<script setup>
import { usePageStore } from '@/stores/page'
import { storeToRefs } from "pinia";

const store = usePageStore();
const { portfolioTab, videoGallery, imageGallery } = storeToRefs(store);
const { changePortfolioTab, } = store

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
            <div class="grid-container">
              <div class="itemGl" v-for="(gallery, index) in videoGallery" :key="gallery.id">
                 <img :src="gallery.portfolios_images">
              </div>
            </div>
          </div> 
          <div class="tab-pane active" v-show="portfolioTab == 'image'">
            <div class="grid-container">
              <div class="itemGl" v-for="(gallery, index) in imageGallery" :key="gallery.id">
                 <img :src="gallery.portfolios_images">
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>