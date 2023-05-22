<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { storeToRefs } from "pinia";
import {Form, Field} from 'vee-validate';
import * as Yup from 'yup';
import { fetchWrapper } from '@/helpers';
import { useToast } from 'vue-toastification'
const store = useAuthStore();
const { user } = storeToRefs(store);
onMounted(() => {
    store.getUser(); 
})
const schema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    phone: Yup.number().required('Phone is required'),
	password: Yup.string().required('Password is required').min(8),
});

const otp = Yup.object().shape({
    otp: Yup.number().required('OTP is required'),  
});

async function onSubmit(values, { setErrors , resetForm}) { 
	const res = await fetchWrapper.post('profile-update', values);	
	console.log(res);
	if(res.message == 'success'){		
		toast.info("Profile update successfully.");  	
	}else{		
		setErrors( res.data )
		toast.error('Profile update Failed!');  
	}
}

</script>
<template>
  <main>
    <div class="container pckcustom-container">
		<section class="pgTitle animatable bounceIn" style="padding-bottom: 30px;">hi, {{user.name}}
			<span>Profile ID: {{user.id}}</span>
		</section>
		<section class="updatePicture">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<span class="pPic"><img :src="user.profilePic" width="200"></span>
				</div>
				<div class="col-md-12 col-lg-12">
					<span class="pPic" style="border-radius: 0;"><i class="fa-solid fa-camera"></i>&nbsp; Update picture</span>
				</div>
				<div class="col-md-12 col-lg-12">
					<span class="pPic" style="border-radius: 0;"><a href="#" style="color: #FF5656;">Remove</a></span>
				</div>
			</div>
		</section>
		<section class="profileForm">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<Form @submit="onSubmit" :validation-schema="signup"  v-slot="{ errors, isSubmitting }">
					<div class="form-field">
						<label>Email</label>					
						<Field name="email" type="email" class="form-control" :value="user.email" />									
						<div class="invalid-feedback">{{ errors.email }}</div>
					</div>
					<div class="form-field">
						<label>Phone</label>
						<Field name="phone" type="text" class="form-control" :value="user.phone" />									
						<div class="invalid-feedback">{{ errors.phone }}</div>
					</div>
					<div class="form-field">
						<label>Change Password</label>
						<Field name="password" type="text" class="form-control" />									
						<div class="invalid-feedback">{{ errors.password }}</div>
					</div>
					<div class="form-field text-center" style="margin: 20px 0;">
						<button  type="submit" class="submit action-button" :disabled="isSubmitting">
							<span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
							Update Now
						</button> 
					</div>
				</Form>
				</div>
			</div>
		</section>		
	</div>
  </main>
</template>
