<script setup>
import {useForm, Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { APISettings } from '../stores/config';

const { handleSubmit, setFieldError, setErrors } = useForm();
const validationSchema = yup.object({  
  email: yup.string().required().email()
});

const onSubmit = handleSubmit(async (values, actions)=> {
  // Send data to the API 
  const response = await fetch(APISettings.baseURL + 'forgot-password', {
      method: 'POST',
      headers: APISettings.headers,
      body: JSON.stringify(values)
    });
  // set single field error
//   if (response.errors.email) {
//     actions.setFieldError('email', response.errors.email);
//   }
  // set multiple errors, assuming the keys are the names of the fields
  // and the values is the error message
//   actions.setErrors(response.errors);
});
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
					<br><br><br>
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