<template>
  <main>
    <div class="container pckcustom-container">
			<section class="pgTitle animatable bounceIn" style="padding-bottom: 30px;">hi, Nikk Martin
				<span>Profile ID: NM30N15</span>
			</section>
			<section class="updatePicture">
				<div class="row">
					<div class="col-md-12 col-lg-12">
						<span class="pPic"><img src="@/assets/images/profile.jpg"></span>
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
						
					
						<form>
						<div class="form-field">
							<label>Email</label>
							<input type="email" name="email" placeholder="emailnikk.martin@example.com">
						</div>
						<div class="form-field">
							<label>Phone</label>
							<input type="phone" name="phone" placeholder="+ 123 456 7890">
						</div>
						<div class="form-field">
							<label>Change Password</label>
							<input type="password" name="password" placeholder="......">
						</div>
						<div class="form-field text-center" style="margin: 20px 0;">
							<input type="submit" name="submit" class="submit action-button" value="Update Now">
						</div>
					</form>
					</div>
				</div>
			</section>
		
	</div>

  </main>
</template>
