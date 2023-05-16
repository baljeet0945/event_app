<script setup>
import SquareTicketPayment from "@/components/SquareTicketPayment.vue"
import { useRouter } from 'vue-router';
import {useTicketStore} from '@/stores/ticket'
import { storeToRefs } from "pinia";

const store = useTicketStore()
const { cart, cartPriceTotal } = storeToRefs(store);
const router = useRouter();

function updateCart(event, item) {	
	if(event.target.value <= item.eventTickets){
    	store.updateToCart(item.id, event.target.value);   
	}else{
		alert("Can't add more the available tickets.")
	}
}
function removeTicket(item){
	store.removeToCart(item);   
}
</script>
<template>
    <main>
        <div class="container custom-container">
			<section class="pgTitle checkoutPg animatable bounceIn">
				<div class="row">
					<div class="col-md-6 col-lg-6">Checkout</div>
					<div class="col-md-6 col-lg-6 text-right">
						<div class="backNav"><img src="@/assets/images/arrow.png"> &nbsp; <router-link @click="router.go(-1)" to="">Back</router-link></div>
					</div>
				</div>
			</section>
			
		    <section class="evList" v-for="item in cart" :key="item">
				<div class="row">
					<div class="col-md-2 col-lg-2">
					   <div class="featureImg">
							<a href="#"><img src="@/assets/images/event1.jpg"></a>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
						<div class="evntTitle">
							<h3>{{item.title}}</h3>
							<h4>{{item.eventLocation}}</h4>
							<div class="postMeta">
									<span class="postDate">{{item.eventDate}}</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;{{item.eventTime}}</span>
								</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 text-center pdnumber">
						<input type="number" name="age" min="1" :max="item.eventTickets" :value="item.ticketInQueue" @input="updateCart($event, item)"><span class="rmText"><router-link @click="removeTicket(item)" to="">Remove</router-link></span><br>
						<span class="subText">{{ item.eventTickets }} tickets available</span>
					</div>
					<div class="col-md-2 col-lg-2">
							<div class="evntPrice">Subtotal <br> <span>${{ item.eventTicketsPrice * item.ticketInQueue}}</span></div>
					</div>	
				</div>
			</section>			
			
		  
			 <section class="totalCost">
				<div class="row">
					<div class="col-md-12 col-lg-12">Total: ${{ cartPriceTotal }}</div>
				</div>
			</section>
			
            <section class="makePayment">
				<div class="row">
					<div class="col-md-5 col-lg-5">
						<h2>Make a Payment</h2>						
						<form action="#">
							<ul class="radioSec">
								<li><input type="radio" id="pay_card" name="payment_type" value="pay_card" checked>
								<label for="pay_card">Pay with Debit/Credit/ATM Cards</label>
								<div class="check"></div></li>								
							</ul>
						</form>
					</div>
					<div class="col-md-7 col-lg-7">											
						<SquareTicketPayment :amount="cartPriceTotal"/>			
					</div>
				</div>
			</section>	
		</div>
    </main>
  </template>
  