<template>
	 <link href="src/assets/css/account-style.css" rel="stylesheet">
    <main>
        <section class="accountPage">
	 <div class="row">
		<div class="col-md-5 col-lg-5">
			<div class="accountForm">
				<div class="accountFormHd">
					<div class="row">
						<div class="col-xs-6 col-md-6 col-lg-6"><img src="@/assets/images/logo.png"></div>
						<div class="col-xs-6 col-md-6 col-lg-6 text-right"><div class="backNav"><i class="fa-regular fa-arrow-left"></i> &nbsp; <a href="events.html">Back to website</a></div></div>
					</div>
				</div>
				
				<div class="accountFormField">
					<div class="row">
						<div class="col-md-12 col-lg-12">
							<h2>Create an account</h2>
							<form>
							    <div class="formFieldLogin">
										<label>Full Name</label>
										<input type="text" name="text" placeholder="Enter your name">
								</div>
								<div class="formFieldLogin">
										<label>Email</label>
										<input type="email" name="email" placeholder="Enter your email">
								</div>
								<div class="formFieldLogin">
										<label>Password</label>
										<input type="password" name="password" placeholder="******">
								</div>
								
								<div class="formFieldLogin">
									<div class="row">
										<div class="col-md-12 col-lg-12">
											<input type="submit" name="submit" class="submit action-button" value="Create Account" />
										</div>
									</div>
								</div>
								<div class="formFieldLogin formFieldCW">
									<div class="row">
										<div class="col-md-12 col-lg-12">
											Or register with
										</div>
									</div>
								</div>
								<div class="formFieldLogin">
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
								<div class="formFieldLogin formFieldBottom">
									<div class="row">
										<div class="col-md-12 col-lg-12">
												Already member? <a href="#">Login</a>
										</div>
									</div>
								</div>
							</form>
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
    