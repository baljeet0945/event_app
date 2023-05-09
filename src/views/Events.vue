<script setup>
import Events from '../views/Events/List.vue'
import InstaFeeds from '../views/InstaFeeds.vue'
import EventForm from './Events/Form.vue'
</script>

<template>
  <main>
	<section class="sectionfrst spaceSec" style="padding-bottom: 0;">
      <Events/>
    </section>
<section class="sectionfrst spaceSec" style="padding-bottom: 0;padding-top: 0;">
	<div class="container">
		<div class="enqueryForm" v-motion-pop-bounce-visible-once>
			<p>Be the first to know about upcoming events, special<br> ticket promotions, new products, and much More!!</p>
			<div class="enqryForm">
				<form>
					<input type="text" name="fname" placeholder="First Name">
					<input type="text" name="lname" placeholder="Last Name">
					<input type="text" name="email" placeholder="Email">	
                 <input type="submit" name="submit" class="submit action-button" value="Send Message" />
				</form>
			</div>
		</div>
	</div>
</section>

<section class="sectionfrst spaceSec" style="padding-top: 0;">
      <InstaFeeds/>
</section>

<section class="sectionTestimonial spaceSec" style="padding-top: 30px;">
  <div class="container">
		<div class="row post-box-tst owl-carousel-tst owl-carousel owl-theme">
			<div class="post-grid">
				<div class="post-content" v-motion-left-in-visible-once>
					<div class="postTitle">
						<img src="@/assets/images/quote.png" style="width: auto;">
						<h3>Clients Testimonials</h3>
					</div>
					<p>“Congue porta sollicitudin et mattis vitae interdum. Risus dolor molestie tellus interdum consequat massa accumsan ipsum in. Nec laoreet nam gravida vulputate pellentesque sed integer augue suspendisse. Maecenas donec nec est tinc idunt sed antest.”</p>
					<div class="instaHead">
					<div class="instaLogo"><img src="@/assets/images/nstaLogo.png"></div>
					<div class="instaTitle">
						Garry Gill
						<img src="@/assets/images/stars.jpg" style="width: auto;">
					</div>
					</div>
				</div>
							
				<div class="featureImg" v-motion-right-in-visible-once>
					<a href="#"><img src="@/assets/images/testimonial1.jpg"></a>
								
				</div>
			</div>
		</div>
  </div>
</section>
<section class="sectionTestimonial spaceSec" style="padding-top: 0;">
  <div class="container" v-motion-pop-bounce-visible-once>
	<div class="sectionfrstTop">
			<h2 class="secTitle">Our Packages</h2>
			<p style="color: #000; font-weight: 500;line-height: 30px;">From the large and lavish social gatherings to intimate parties, leave the planning,<br> details and stress to us! Even the smallest of gathers requires planning. </p>
	</div>
	
	<div class="sectionPriceList">
		<div class="row">
			<div class="col-md-4 col-lg-4">
				<div class="priceList">
					<h2>Silver</h2>
					<h4>$39</h4>
					<ul class="listStyle">
						<li>Aliquet sagittis magna</li> 
						<li>elementum rhoncus. </li>
						<li>Sit in orci condimentum </li>
						<li>odio augue netus leo. </li>
						<li>Vivamus lectus cras </li>
					</ul>
					<a href="#" class="t-btn">Buy Now</a>
				</div>
			</div>
			<div class="col-md-4 col-lg-4 animatable bounceIn">
				<div class="priceList">
					<h2>Gold <span>people’s choice</span></h2>
					<h4>$69</h4>
					<ul class="listStyle">
						<li>Aliquet sagittis magna</li> 
						<li>elementum rhoncus. </li>
						<li>Sit in orci condimentum </li>
						<li>odio augue netus leo. </li>
						<li>Vivamus lectus cras </li>
						<li>odio augue netus leo. </li>
						<li>Vivamus lectus cras </li>
					</ul>
					<a href="#" class="t-btn">Buy Now</a>
				</div>
			</div>
		 <div class="col-md-4 col-lg-4 animatable bounceIn">
				<div class="priceList">
					<h2>Platinum</h2>
					<h4>$89</h4>
					<ul class="listStyle">
						<li>Aliquet sagittis magna</li> 
						<li>elementum rhoncus. </li>
						<li>Sit in orci condimentum </li>
						<li>odio augue netus leo. </li>
						<li>Vivamus lectus cras </li>
						<li>Aliquet sagittis magna</li> 
						<li>elementum rhoncus. </li>
						<li>Sit in orci condimentum </li>
						<li>odio augue netus leo. </li>
						<li>Vivamus lectus cras </li>
					</ul>
					<a href="#" class="t-btn">Buy Now</a>
				</div>
			</div>
		</div>
	</div>
  </div>
</section>     

    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <EventForm/>
    </section>
  </main>
</template>
