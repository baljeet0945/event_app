<script setup>
import { useRoute } from 'vue-router';
import  {usePackageStore} from '@/stores/package'
import { storeToRefs } from "pinia";
import SquarePackagePayment from "@/components/SquarePackagePayment.vue"
const route = useRoute();
const store = usePackageStore();
const { plan } = storeToRefs(store);

store.getPackageBySlug(route.params.slug)
</script>
<template>
    <main>
        <div class="container custom-container">
			<section class="pgTitle animatable bounceIn text-center">Buy your Package</section>
			<section class="pkDetails">
				<div class="row">
					<div class="col-md-4 col-lg-4">
						<div class="pkDetailsVl">
							<h3>{{ plan.title }}</h3>
							<h5>${{ plan.price }}</h5>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
						<ul class="listStyle">
							<li v-for="feature in plan.features" :key="feature">
								{{ feature.feature_name }}
							</li>
						</ul>
					</div>				
				</div>
			</section>
			
			<section class="pkNotify">
				<div class="row">
					<div class="col-md-12 col-lg-12 text-center">Valid for 30 Days, we will send your reminders 3 days before your package  expires</div>
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
						<div class="cardDetails">							
							<SquarePayment/>
						</div>
					</div>
				</div>
			</section>	
		</div>  
    </main>
  </template>
  