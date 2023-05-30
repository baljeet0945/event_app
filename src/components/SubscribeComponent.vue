<script setup>
import { ref }from 'vue'
import {Form, Field} from 'vee-validate'
import * as Yup from 'yup'
import { fetchWrapper } from '@/helpers'
import { useToast } from 'vue-toastification'
const toast = useToast()

const schema = Yup.object().shape({
    fname: Yup.string().required('First Name is required'),
    lname: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid!')
});

const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}

async function onSubmit(values, { setErrors , resetForm}) { 
	const res = await fetchWrapper.post('subscribe', values);		
	if(res.message == 'success'){		
		resetForm()	
		toast.info("We've sent a verification code to your email - "+values.email);  	
	}else{		
		setErrors( res.data )
	}
}
</script>
<template>
    <Form @submit="onSubmit" :validation-schema="schema"  v-slot="{ errors, isSubmitting, isValidating }" :class="{ shake: disabled }">
        <Field name="fname" type="text" placeholder="First Name"  :class="{ 'is-invalid': errors.fname }"/>	
        <Field name="lname" type="text" placeholder="Last Name"  :class="{ 'is-invalid': errors.lname }"/>
        <Field name="email" type="email" placeholder="Email"  :class="{ 'is-invalid': errors.email }"/>
        <button class="submit action-button" @click="warnDisabled" :disabled="isSubmitting" :class="{ 'submitting': isSubmitting }">
            Send Message
        </button>
    </Form>  
</template>
<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

button {
  position: relative;
  min-width: 100px;
  min-height: 50px;
}

button.submitting::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: calc(50% - 0.5rem);
  left: 0;
  right: 0;
  border-radius: 2em;
  border-color: transparent transparent rgb(255, 255, 255) rgb(255, 255, 255);
  border-style: solid;
  border-width: 0.15em;
  animation: spinner-rotation .6s linear infinite;  
  margin-left: auto;
  margin-right: auto
}

@keyframes spinner-rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>