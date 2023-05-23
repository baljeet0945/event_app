<script setup>
import { useRoute, useRouter } from 'vue-router';
import {useEventStore} from '@/stores/event.store'
import {useTicketStore} from '@/stores/ticket'
import { storeToRefs } from "pinia";
const route = useRoute();
const router = useRouter();

const store = useEventStore()
const { eventDetail } = storeToRefs(store);
store.getEventDetail(route.params.slug)

function buyTicket(item) {
	const ticketStore = useTicketStore();    
    ticketStore.addToCart(item);
    router.push('/checkout');
}
</script>
<template>
    <main>
        <div class="container edckcustom-container">
            <section class="backNavSec">
                <div class="row">
                    <div class="col-sm-6 col-lg-6">
                        <div class="backNav"><img src="@/assets/images/arrow.png"> &nbsp; <router-link  to="/event">Back to all events</router-link></div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="sPost">
                            <span class="postDate" style="color: #5C5C5C; font-size: 16px;"><i class="fa-duotone fa-heart"></i> &nbsp;Saved</span>
                        </div>
                    </div>
                </div>
		    </section>
            <section class="ed-title">
			    <div class="row">
                    <div class="col-sm-6 col-lg-6">
                        <h2>{{ eventDetail.title }}</h2>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="postMeta">
                            <span class="postDate">{{eventDetail.eventLocation}}</span>
                            <span class="postDate">{{ eventDetail.eventDate }}</span>
                            <span class="postDate"><img src="@/assets/images/time.png"> &nbsp;{{ eventDetail.eventTime }}</span>
                        </div>
                    </div>
			    </div>
		    </section>
            <section class="edFImg">
                <div class="row">
                    <div class="col-sm-12 col-lg-12" v-motion-pop-bounce-visible-once>
                        <div class="featureImg bg-400" :style="{ backgroundImage: `url(${eventDetail.featureImage})` }" >
                            <span class="post_date"><span class="lg-font">14</span><br><span>MAY</span></span>
                        </div>
                    </div>
                </div>
		    </section>
            <section class="edContent">
                <div class="row">
                    <div class="col-sm-12 col-lg-12">
                        <p>Sed enim morbi ac sagittis ut egestas magna varius. Sagittis convallis risus maecenas convallis nisi lorem sed. Id mi ultrices nunc porttitor consectetur porta erat. Velit sit integer facilisi in leo tellus imperdiet libero. Vel dictum ullamcorper consequat ut ut eu nullam. Scelerisque id morbi dictum aliquam dui facilisis. Senectus amet turpis risus ut.</p> 

                        <p>Sem lorem iaculis aliquam aliquet ut. Id cras ac consectetur sit vitae. Quam lacus pharetra tincidunt a. In dui leo fringilla at morbi sit facilisis purus. Ultrices in id quis ut adipiscing ligula arcu accumsan. Augue sit habitant morbi gravida in fermentum.</p>
                    </div>
                </div>
		    </section> 
            <section class="edLocation">
                <div class="row">
                    <div class="col-sm-6 col-lg-6">
                        <div class="ed-location">
                            <h3>Location</h3>
                            <p>{{ eventDetail.eventLocation }}</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="ed-location">
                            <h3>Ticket
                                <span>{{ eventDetail.eventTickets }} available</span>
                            </h3>
                            <p>${{eventDetail.eventTicketsPrice}} / person</p>
                            <button @click="buyTicket(eventDetail)" class="viewBtn">Buy Now</button>
                        </div>
                    </div>
                </div>
		    </section> 
            <section class="edContent">
                <div class="row">
                    <div class="col-sm-12 col-lg-12">
                        <h3>What you’ll get</h3>
                        <p>Sagittis convallis risus maecenas convallis nisi lorem sed. Id mi ultrices nunc porttitor consectetur porta erat. Velit sit integer facilisi in leo tellus imperdiet libero. Vel dictum ullamcorper consequat ut ut eu nullam. Scelerisque id morbi dictum aliquam dui facilisis. Senectus amet turpis risus ut. </p>
                        <ul class="listStyle">
                            <li>Gravida at egestas purus ac imperdiet pharetra. Ac diam malesuada viverra.</li>
                            <li>Best tincidunt dictum elit erat risus at accumsan eget consectetur viverra congue</li>
                            <li>Gravida tellus aliquet est nec viverra rhoncus nunc eget libero dictumst</li>
                        </ul>
                    </div>
                </div>
		    </section>
            <section class="eventgallery">
                <div class="row">
                    <div class="col-sm-8 col-lg-8">
                        <h3>Event Gallery</h3>
                        <div class="row" v-motion-left-in-visible-once>
                            <div class="col-sm-6 col-lg-6">
                                <img src="@/assets/images/gallery1.jpg">
                            </div>
                            <div class="col-sm-6 col-lg-6"><img src="@/assets/images/gallery2.jpg"></div>
                            <div class="col-sm-6 col-lg-6"><img src="@/assets/images/gallery3.jpg"></div>
                            <div class="col-sm-6 col-lg-6"><img src="@/assets/images/gallery4.jpg"></div>
                        </div>
                        
                    </div>
                    <div class="col-sm-4 col-lg-4" v-motion-right-in-visible-once>
                    <h3>Event Location Map</h3>
                        <img src="@/assets/images/ev-map.png">
                    </div>
                </div>
            </section>
        </div>

  
    </main>
  </template>
  