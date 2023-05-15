<script setup>
import { onMounted, ref } from "vue";
import {Form, Field} from 'vee-validate';
import * as Yup from 'yup';
const appId = 'sandbox-sq0idb-ioQLqyvf_BrG6P7mmdRjtw';
const locationId = 'L0NKFZ5Y13GHS';

let card;
let loading = ref(true);
let paymentStatus = ref("");

const schema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    name: Yup.string().required('Name is required')
});

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
};

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
};

const handlePaymentMethodSubmission = async () => {
  paymentStatus.value = "";
  const token = await tokenize(card); 
  const { data, error }= await client.paymentsApi.createPayment({
    sourceId: token,
    idempotencyKey: crypto.randomUUID(),
    amountMoney: {
      amount: 200,
      currency: 'USD'
    },
    autocomplete: true,
  });
  if (!error.value) {
    paymentStatus.value = "Payment completed";
  } else {
    paymentStatus.value = "Payment failed";
  }
};
</script>
<template>  
    <Form @submit="handlePaymentMethodSubmission" >   
      <slot name="GuestPayment"></slot>
      <div v-if="loading">Loading...</div>
      <div id="card-container" />    
      <button class="submit action-button" :disabled="isSubmitting">
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
        Pay $1.00
      </button>
    </Form>
    <div v-if="paymentStatus" id="payment-status-container">
      {{ paymentStatus }}
    </div>
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