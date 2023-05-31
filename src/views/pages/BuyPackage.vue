<script setup>
import { onMounted, ref, toRefs } from "vue";
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

import { useRoute } from 'vue-router';
import { router }  from '@/router';
import { useAuthStore } from '@/stores/auth.store';
import  {usePackageStore} from '@/stores/package'
import { fetchWrapper } from '@/helpers';
import { storeToRefs } from "pinia";
import { useToast } from 'vue-toastification'

const route = useRoute();
const toast = useToast()
const authStore = useAuthStore()
const { authUser, profileForm } = authStore
const store = usePackageStore();
const { plan } = storeToRefs(store);

store.getPackageBySlug(route.params.slug)

const apiRoute = ref('purchase-package')
const invalidForm = ref(false)
if(authUser){
  apiRoute.value = 'purchase-package-auth'
  authStore.getUser()
}

const schema = yup.object({
    email: yup.string().required('Email is required').email(),
    name: yup.string().required('Name is required'),
    phone: yup.number().required('Phone is required'),   
    country: yup.string().max(2).required('Country is required'),
    city: yup.string().required('City is required')
});

const appId = 'sandbox-sq0idb-ioQLqyvf_BrG6P7mmdRjtw';
const locationId = 'L0NKFZ5Y13GHS';
let card;
let loading = ref(true);
let squarePayment;

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

const verifyBuyer = async (payments, token) => {
  try{
    let fullname = profileForm.value.name.split(" ");
    const verificationDetails = {
      amount: String(plan.value.price),
      /* collected from the buyer */
      billingContact: {  
        addressLines: ['123 Main Street', 'Apartment 1'],   
        familyName: fullname[0],
        givenName: fullname[1],
        email: profileForm.value.email,
        country: profileForm.value.country,
        phone: profileForm.value.phone,
        city: profileForm.value.city,
        region: 'LND',
      },
      currencyCode: 'USD',
      intent: 'CHARGE',
    }; 
    
    const verificationResults = await squarePayment.verifyBuyer(
      token,
      verificationDetails
    ); 
    return verificationResults.token;
  } catch (e) {
    toast.info("Error in verification");  	
    return false;
  } 
}

const onPayment = async (values, { setErrors , resetForm}) => {  
  const token = await tokenize(card); 
  const verificationToken = await verifyBuyer(card, token);
  let formData = {
    'sourceId': token,
    'package':plan.value.id,    
    'email': values.email,
    'name': values.name,
	'total_amount': plan.value.price,
	'verify_token': verificationToken
  }

  const res = await fetchWrapper.post(apiRoute.value, formData)
  if(res.message == 'success'){		
		resetForm()
		router.replace('/package-confirmed');
	}else{
		setErrors( res.data )
	}
}

function onInvalidSubmit({ errors }) {
  if(errors){
    invalidForm.value = true
    setTimeout(() => {		
      invalidForm.value = false
    }, 1500)
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
							<Form @submit="onPayment" :validation-schema="schema" v-slot="{ errors, isSubmitting }" :initial-values="profileForm" @invalid-submit="onInvalidSubmit"> 
								<div class="row" style="margin-bottom: 15px;">
									<div class="col-md-6 col-lg-6">
									<label>Full Name</label>
									<Field name="name" type="text" v-model="profileForm.name" :class="{ 'is-invalid': errors.name }"/>         
									<div class="invalid-feedback">{{errors.name}}</div>
									</div>
									<div class="col-md-6 col-lg-6">
									<label>Phone</label>         
									<Field name="phone" type="text" v-model="profileForm.phone" :class="{ 'is-invalid': errors.phone }"/>
									<div class="invalid-feedback">{{errors.phone}}</div>
									</div>	
								</div>
								<div class="row" style="margin-bottom: 15px;">
									<div class="col-md-12 col-lg-12">
									<label>Email</label>         
									<Field name="email" type="email" v-model="profileForm.email" :class="{ 'is-invalid': errors.email }"/>
									<div class="invalid-feedback">{{errors.email}}</div>
									</div>				
								</div>

								<div class="row" style="margin-bottom: 15px;">
									<div class="col-md-6 col-lg-6">
									<label>Country<small class="text-sm text-muted">(Two-letter country code)</small></label>         
									<Field name="country" type="text" v-model="profileForm.country" :class="{ 'is-invalid': errors.country }"/>
									<div class="invalid-feedback">{{errors.country}}</div>
									</div>
									<div class="col-md-6 col-lg-6">
									<label>City</label>         
									<Field name="city" type="text" v-model="profileForm.city" :class="{ 'is-invalid': errors.city }"/>
									<div class="invalid-feedback">{{errors.city}}</div>
									</div>				
								</div>
								
								<div v-if="loading">Loading...</div>
								<div id="card-container" style="margin-top: 30px;"></div>               
								<button class="submit action-button" :disabled="isSubmitting" :class="{ 'submitting': isSubmitting, shake: invalidForm }">
									Pay ${{plan.price}}
								</button>
								<div v-if="errors.payment" id="payment-status-container">
									<div>{{errors.payment}}</div>
								</div>
							</Form> 
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

button.submitting {
    position: relative;
    color: #6DC461!important;
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