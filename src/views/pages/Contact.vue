<script setup>
import {Form, Field} from 'vee-validate';
import * as Yup from 'yup';
import { fetchWrapper } from '@/helpers';

const schema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    name: Yup.string().required('Name is required'),
	phone: Yup.string().required('Phone is required'),
	message: Yup.string().required('Message is required')
});

async function onSubmit(values) {	
	await fetchWrapper.post('contact', values);
}
</script>
<template>
<main>
	<div class="container">
		<section class="contactForm">
			<div class="row">
				<div class="col-md-8 col-lg-8" v-motion-left-in>
					<div class="cForm">
						<h2>We look forward to being in touch!</h2>
						<img src="@/assets/images/line-crv.png">
						<p>Thank you so much for reaching out to us - we are excited to connect with you! Tell us about you. If you do not receive response within 24 hours, please contact us directly email or phone.</p>
					</div>
				</div>
				<div class="col-md-4 col-lg-4" v-motion-right-in>
					<Form class="cForm" @submit="onSubmit" :validation-schema="schema"  v-slot="{ errors, isSubmitting }">
						<fieldset>							
							<Field name="name" type="text" class="form-control" placeholder="Full Name" :class="{ 'is-invalid': errors.name }" />
                    		<div class="invalid-feedback">{{ errors.name }}</div>

							<Field name="email" type="email" class="form-control" placeholder="Email" :class="{ 'is-invalid': errors.email }" />
                    		<div class="invalid-feedback">{{ errors.email }}</div>

							<Field name="phone" type="text" class="form-control" placeholder="Phone" :class="{ 'is-invalid': errors.phone }" />
                    		<div class="invalid-feedback">{{ errors.phone }}</div>

							<Field as="textarea" name="message" class="form-control" cols="30" rows="10" :class="{ 'is-invalid': errors.message }" />
							<div class="invalid-feedback">{{ errors.message }}</div>
							<button class="submit action-button" :disabled="isSubmitting">
								<span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
								Send Message
							</button>							
						</fieldset>
					</Form>
				</div>
			</div>
		</section>
	</div>
  </main>
</template>
