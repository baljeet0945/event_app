<script setup>
import { onMounted } from 'vue'
import { useEventStore} from '@/stores' 
import { storeToRefs } from "pinia";
const store = useEventStore()
const {events} = storeToRefs (store)
const { getEvents } = store;

onMounted(() => {
  getEvents()
})
</script>
<template>
    <Carousel :itemsToShow="3" :breakpoints="breakpoints">
        <template #slides>
            <Slide v-for="slide in events" :key="slide">
                <div class="post-grid carousel__item">
                    <div class="featureImg">
                        <a href="#"><img :src="slide.featureImage" alt="event image"></a>
                        <span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
                    </div>
                    <div class="post-content">
                        <div class="postTitle">
                            <h3>{{ slide.title }}</h3>
                            <h4>{{ slide.eventLocation }}</h4>
                        </div>
                        <p>Lorem cursus eu velit vitae egestas non. Tristique proin at neque nulla phasellus. Cursus leo et rhoncus egestas.</p>
                        <div class="postMeta">
                            <span class="postDate">{{slide.eventDate}}</span>
                            <span class="postDate"><img src="@/assets/images/time.png"> &nbsp;{{slide.eventTime}}</span>
                            <span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
                        </div>
                        <div class="postBtn">
                            <span class="postBtnT"> <router-link class="viewBtn" :to="'/event-detail/' + slide.slug">Tickets & Details</router-link></span>                          
                            <span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
                        </div>
                    </div>
                </div>    
            </Slide>
        </template>
        <template #addons>
            <Navigation/> 
        </template>
    </Carousel> 
     
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({ 
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
    },
  }),
})
</script>
<style>
@import 'vue3-carousel/dist/carousel.css'
</style>
