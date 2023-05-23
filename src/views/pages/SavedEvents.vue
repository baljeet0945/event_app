<script setup>
import { onMounted } from 'vue'
import  {useEventStore} from '@/stores/event.store'
import {useTicketStore} from '@/stores/ticket'
import { storeToRefs } from "pinia";
const store = useEventStore()
const ticketStore = useTicketStore();    
const { eventWishlist } = storeToRefs (store)

onMounted(() => {
	store.getWishlist()
})
</script>
<template>
    <main>
        <div class="container custom-container">
			<section class="pgTitle">Saved Events</section>
			<section class="evList" v-for="(event, index) in eventWishlist" :key="event.id">
				<div class="row">
					<div class="col-md-2 col-lg-2">
					   <div class="featureImg">
                        	<img :src="event.featureImage"/>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
						<div class="evntTitle">
							<h3>{{ event.title }} <span> <router-link  to="#">Remove</router-link></span></h3>
							<h4>{{ event.eventLocation }}</h4>
							<div class="postMeta">
									<span class="postDate">{{event.eventDate}}</span>
									<span class="postDate"><img src="@/assets/images/time.png">{{event.eventTime}}</span>
								</div>
						</div>
					</div>
					<div class="col-md-2 col-lg-2">
							<div class="evntPrice">Price <br> <span>${{event.eventTicketsPrice}}</span></div>
					</div>
					
					<div class="col-md-3 col-lg-3 postBtnT">
						<router-link class="viewBtn" :to="'/event-detail/' + event.slug">Tickets & Details</router-link>
					</div>
					<div class="col-md-1 col-lg-1">
						<span class="postAdd"><i class="fa-regular fa-cart-shopping"></i> Add</span>
					</div>
				</div>
			</section>
		</div>
    </main>
</template>
  