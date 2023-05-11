<script setup>

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
					<form  class="cForm">
						<fieldset>
							<input type="text" name="fname" placeholder="Full Name">
							<input type="text" name="email" placeholder="Email">
							<input type="text" name="phone" placeholder="Phone">
							<textarea name="aInformation" placeholder="Message"></textarea>
							<input type="submit" name="submit" class="submit action-button" value="Send Message" />
						</fieldset>
					</form>
				</div>
			</div>
		</section>
	</div>
  </main>
</template>
