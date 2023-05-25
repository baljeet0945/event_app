<script setup>
import { onMounted, ref, toRefs } from "vue";
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import  {usePackageStore} from '@/stores/package'
import { fetchWrapper } from '@/helpers';
import { storeToRefs } from "pinia";
const route = useRoute();

const authStore = useAuthStore()
const { authUser } = authStore
const store = usePackageStore();
const { plan } = storeToRefs(store);

store.getPackageBySlug(route.params.slug)
const appId = 'sandbox-sq0idb-ioQLqyvf_BrG6P7mmdRjtw';
const locationId = 'L0NKFZ5Y13GHS';

const apiRoute = ref('purchase-package-auth')

if(!authUser){
  const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter valid email'),
    name: yup.string().required('Name is required')
  });
  apiRoute.value = 'purchase-package'
}

let card;
let loading = ref(true);
let paymentStatus = ref("");

onMounted(async () => {
  loading.value = true;
  await initializePaymentForm();
  loading.value = false;
});

const initializePaymentForm = async () => {
  if (!Square) {
    throw new Error("Square.js failed to load properly");
  }    
  const payments = Square.payments(appId, locationId);
  try {
    card = await payments.card();
    await card.attach("#card-container");
  } catch (e) {
    console.error("Initializing Card failed", e);
    return;
  }
}

const tokenize = async (paymentMethod) => { 
  const tokenResult = await paymentMethod.tokenize();
  if (tokenResult.status === "OK") {
    return tokenResult.token;
  } else {
    let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
    if (tokenResult.errors) {
      errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
    }
    throw new Error(errorMessage);
  }
}

const onPayment = async (values, { setErrors , resetForm}) => {  
  const token = await tokenize(card); 
  let formData = {
    'sourceId': token,
    'package':plan.value,    
    'email': values.email,
    'name': values.name
  }

  const res = await fetchWrapper.post(apiRoute.value, formData)
  if(res.message == 'success'){		
		resetForm()
		router.push('/package-confirmed');
	}else{
		setErrors( res.data )
	}
}
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
							<Form @submit="onPayment" :validation-schema="schema" v-slot="{ errors, isSubmitting }"> 
							<div class="row" style="margin-bottom: 15px;" v-if="!authUser">
								<div class="col-md-12 col-lg-12">
								<label>Full Name</label>
								<Field name="name" type="text" :class="{ 'is-invalid': errors.name }"/>         
								<div class="invalid-feedback">{{errors.name}}</div>
								</div>	
								<div class="col-md-12 col-lg-12">
								<label>Email</label>         
								<Field name="email" type="email"  :class="{ 'is-invalid': errors.email }"/>
								<div class="invalid-feedback">{{errors.email}}</div>
								</div>								
							</div>
							<div v-if="loading">Loading...</div>
							<div id="card-container" /> 
							<div class="invalid-feedback">{{errors.payment}}</div>   
							<button class="submit action-button" :disabled="isSubmitting">
								<span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
								Pay ${{ plan.price }}
							</button>
							</Form>
							<div v-if="paymentStatus" id="payment-status-container">
							<div class="invalid-feedback">{{errors.payment}}</div>
							</div>
						</div>
					</div>
				</div>
			</section>	
		</div>  
    </main>
</template>
<style scoped>
button {
  color: #ffffff;
  background-color: #006aff;
  border-radius: 6px;
  cursor: pointer;
  border-style: none;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 16px;
  width: 100%;
}

button:hover {
  background-color: #005fe5;
}

button:active {
  background-color: #0055cc;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.3);
}

#payment-status-container {
  width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  background: #1a1a1a;
  display: flex;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 36px;
}
</style>