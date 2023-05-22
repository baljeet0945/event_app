<script setup>
import { onMounted } from 'vue'
import  {useEventStore} from '@/stores/event.store'
import {useTicketStore} from '@/stores/ticket'
import { storeToRefs } from "pinia";
const store = useEventStore()
const {events} = storeToRefs (store)
const { getEvents } = store;

onMounted(() => {
  getEvents()
})
function toggleCart(event, status){  
  const childElement = event.target.querySelector(".cart-status");
  const childElementHover = event.target.querySelector(".cart-status-hover");
  if(status){
    childElement.style.display = 'none'
    childElementHover.style.display = 'block'
  }else{
    childElement.style.display = 'block'
    childElementHover.style.display = 'none'
  }    
}

function buyTicket(item) {
	const ticketStore = useTicketStore();    
  ticketStore.addToCart(item);    
}
</script>
<template>
    <Carousel :itemsToShow="3" :breakpoints="breakpoints">
        <template #slides>
            <Slide v-for="event in events" :key="index">
                <div class="post-grid carousel__item">
                    <div class="featureImg">
                        <a href="#"><img :src="event.featureImage" alt="event image"></a>
                        <span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
                    </div>
                    <div class="post-content">
                        <div class="postTitle">
                            <h3>{{ event.title }}</h3>
                            <h4>{{ event.eventLocation }}</h4>
                        </div>
                        <p>Lorem cursus eu velit vitae egestas non. Tristique proin at neque nulla phasellus. Cursus leo et rhoncus egestas.</p>
                        <div class="postMeta">
                            <span class="postDate">{{event.eventDate}}</span>
                            <span class="postDate"><img src="@/assets/images/time.png"> &nbsp;{{event.eventTime}}</span>
                            <span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
                        </div>
                        <div class="postBtn">
                            <span class="postBtnT"> <router-link class="viewBtn" :to="'/event-detail/' + event.slug">Tickets & Details</router-link></span>  
                            
                            {{ event.isCart }}
                            <span v-if="event.isCart == true" class="postAdd"><span class="cart-status"><img src="@/assets/images/lock.png"> &nbsp; Added</span></span>

                            <span v-else class="postAdd" @mouseenter="toggleCart($event,true)" @mouseleave="toggleCart($event, false)"><span class="cart-status"><img src="@/assets/images/lock.png"> &nbsp; Add</span><span class="cart-status-hover"  @click="buyTicket(event)"> Add to cart</span></span>
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
@import 'vue3-carousel/dist/carousel.css';
.cart-status-hover{display: none; cursor:pointer;}
</style>
