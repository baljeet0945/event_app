<script setup>
import { onMounted, ref, toRefs } from "vue";
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import {useTicketStore} from '@/stores/ticket'
import { useAuthStore } from '@/stores/auth.store';
import { fetchWrapper } from '@/helpers';
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const store = useTicketStore()
const { authUser } = authStore
const { cart, cartPriceTotal } = storeToRefs(store)
const { removeToCart, updateToCart } = store 
const router = useRouter()
const apiRoute = ref('purchase-tickets-auth')

if(!authUser){
  const schema = yup.object({
    email: yup.string().required('Email is required').email(),
    name: yup.string().required('Name is required')
  });
  apiRoute.value = 'purchase-tickets'
}

const appId = 'sandbox-sq0idb-ioQLqyvf_BrG6P7mmdRjtw';
const locationId = 'L0NKFZ5Y13GHS';

let card;
let loading = ref(true);

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
    'events':cart.value,
    'total_amount': cartPriceTotal.value,
    'email': values.email,
    'name': values.name
  }

  const res = await fetchWrapper.post(apiRoute.value, formData)
  if(res.message == 'success'){		
		resetForm()
		router.push('/booking-confirmed');
	}else{
		setErrors( res.data )
	}
}
</script>
<template>  
  <section class="evList" v-for="(item, index) in cart" :key="item.id">
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
						<input type="number" name="age" min="1" :max="item.eventTickets" :value="item.ticketInQueue" @input="updateToCart(index, $event.target.value, item)" ><span class="rmText"><router-link @click="removeToCart(index, item)" to="">Remove</router-link></span><br>
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
                  Pay ${{cartPriceTotal}}
                </button>
              </Form>
              <div v-if="paymentStatus" id="payment-status-container">
                {{ paymentStatus }}
              </div>
            </div>		
					</div>
				</div>
		</section>	
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