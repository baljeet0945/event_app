<script setup>
import { useRouter } from 'vue-router';
import {useTicketStore} from '@/stores/ticket'
import { storeToRefs } from "pinia";

const store = useTicketStore()
// store.resetCart()
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
								<li><input type="radio" id="html" name="fav_language" value="HTML">
								<label for="html">Pay with Debit/Credit/ATM Cards</label>
								<div class="check"></div></li>
								<li><input type="radio" id="css" name="fav_language" value="CSS">
								<label for="css">Paypal</label>
								<div class="check"></div></li>
							 </ul>
							</form>
					</div>
					<div class="col-md-7 col-lg-7">
						<div class="cardDetails">
							<form action="#">
								<div class="row" style="margin-bottom: 15px;">
									<div class="col-md-9 col-lg-9">
										<label for="ccnum">Card Number</label>
										<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
									</div>
									<div class="col-md-3 col-lg-3">
										<label for="cvv">CVV</label>
										<input type="text" id="cvv" name="cvv" placeholder="352">
									</div>
								</div>
								<div class="row">
									<div class="col-md-9 col-lg-9">
										<label for="ccnum">Name on Card</label>
										<input type="text" id="cname" name="cardname" placeholder="John More Doe">
									</div>
									<div class="col-md-3 col-lg-3">
										<label for="cvv">Expiry</label>
										<input type="text" id="expyear" name="expyear" placeholder="2018">
									</div>
								</div>
								<div class="row" style="margin-top: 10px;">
									<label style="margin-bottom: 20px;">
										<input type="checkbox"  name="sameadr"> Save this card for future transactions
									</label>
								</div>
								<div class="row">
								 <input type="submit" value="Make a Payment" class="btn">
								</div>
							</form>
						</div>
					</div>
				</div>

			</section>			
		
	</div>
  
    </main>
  </template>
  