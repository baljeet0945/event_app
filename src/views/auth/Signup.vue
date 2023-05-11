<script setup>
import {Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
// import { APISettings } from '../stores/config';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

async function onSubmit(values) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(values)
	};
	const response = await fetch(APISettings.baseURL + 'signup', requestOptions);
	console.log(response)
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
							<div class="col-xs-6 col-md-6 col-lg-6 text-right"><div class="backNav"><i class="fa-regular fa-arrow-left"></i> &nbsp; 								
								<router-link to="/">Back to website</router-link>
							</div>
						</div>
						</div>
					</div>
					
					<div class="accountFormField">
						<div class="row">
							<div class="col-md-12 col-lg-12">
								<h2>Create an account</h2>
								<Form @submit="onSubmit" :validation-schema="schema">
									<div class="formField">
											<label>Full Name</label>
											<Field name="name" type="text" placeholder="Enter your name"/>
    										<ErrorMessage name="name" />
									</div>
									<div class="formField">
											<label>Email</label>
											<Field name="email" type="email" placeholder="Enter your email"/>
    										<ErrorMessage name="email" />
									</div>
									<div class="formField">
											<label>Password</label>
											<Field name="password" type="password" placeholder="******"/>
    										<ErrorMessage name="password" />
									</div>
									
									<div class="formField">
										<div class="row">
											<div class="col-md-12 col-lg-12">
												<input type="submit" name="submit" class="submit action-button" value="Create Account" />
											</div>
										</div>
									</div>
									<div class="formField formFieldCW">
										<div class="row">
											<div class="col-md-12 col-lg-12">
												Or register with
											</div>
										</div>
									</div>
									<div class="formField">
										<div class="row">
											<div class="col-md-12 col-lg-12">
												<div class="socialIcons">
													<ul>
														<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
														<li class="google"><a href="#"><img src="@/assets/images/google.png"></a></li>
														<li class="twitter"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="formField formFieldBottom">
										<div class="row">
											<div class="col-md-12 col-lg-12">
													Already member? <router-link to="/login">Login</router-link>
											</div>
										</div>
									</div>
								</Form>>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-7 col-lg-7">
				<div class="accountBg">
					<img src="@/assets/images/signup.png">
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