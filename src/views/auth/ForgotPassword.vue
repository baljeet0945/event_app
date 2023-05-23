<script setup>
import {Form, Field, ErrorMessage } from 'vee-validate';
import { useToast } from 'vue-toastification'
import * as yup from 'yup';

document.querySelector('body').style.backgroundColor = '#000'

const toast = useToast()
const validationSchema = yup.object({  
  email: yup.string().required().email()
});

async function onSubmit(values) {
	const res = await fetchWrapper.post('forgot-password', values);		
	if(res.message == 'success'){		
		resetForm()	
		toast.info("We've sent a recover password process to your email - "+values.email);  	
	}else{		
		setErrors( res.data )
		toast.error('Forgot password Failed!');  
	}
}
</script>
<template>
	<main>
		<section class="accountPage">
			<div class="row">
			<div class="col-md-5 col-lg-5">
				<div class="accountForm">
					<div class="accountFormHd">
						<div class="row">
							<div class="col-xs-6 col-md-6 col-lg-6"><img src="@/assets/images/logo.png"></div>
							<div class="col-xs-6 col-md-6 col-lg-6 text-right"><div class="backNav"><i class="fa-regular fa-arrow-left"></i> &nbsp;<router-link to="/">Back to website</router-link></div></div>
						</div>
					</div>
					<br/><br/><br/>
					<div class="accountFormField">
						<div class="row">
							<div class="col-md-12 col-lg-12">
								<h2>Forgot Password?</h2>
								<Form @submit="onSubmit" :validation-schema="validationSchema">
									<div class="formField">
										<label>Email</label>
										<Field name="email" type="email" placeholder="Enter your email"/>
										<ErrorMessage name="email" />
									</div>
									
									<div class="formField">
										<div class="row">
											<div class="col-md-12 col-lg-12">
												<input type="submit" name="submit" class="submit action-button" value="Reset Password" />
											</div>
										</div>
									</div>
									
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-7 col-lg-7">
				<div class="accountBg">
					<img src="@/assets/images/fPassword.png">
				</div>
			</div>
			</div>
		</section>
	</main>
</template>
<style scoped>

@import url(@/assets/css/account-style.css);
.formField{width:unset;position: unset; float: unset;}
#rememberme{width:auto;}
</style>