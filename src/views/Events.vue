<script setup>

</script>

<template>
  <main>
    <section class="sectionfrst spaceSec" style="padding-bottom: 0;">
    <div class="container">
		<div class="sectionfrstTop">
			<h2 class="secTitle" v-motion-pop-bounce>Upcoming Events Near You</h2>
		</div>
		
		<div class="sectionFilterGallery">
				<div id="exTab1" class="container tabSec">	
					<ul  class="nav nav-pills">
						<li class="active">
							<a  href="#music" data-toggle="tab"><img src="@/assets/images/music.png"> &nbsp; Music Events</a>
						</li>
						<li><a href="#conference" data-toggle="tab"><img src="@/assets/images/events.png"> &nbsp; Conference Events</a>
						</li>
						<li><a href="#djParty" data-toggle="tab"><img src="@/assets/images/photo-icon.png"> &nbsp; DJ Party</a>
						</li>
						
					</ul>

				<div class="tab-content clearfix">
				  <div class="tab-pane active" id="music">
					<div class="post-grid-container">
					  <div class="row post-box-cnt post-event-box">
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event1.jpg"></a>
								<span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Carnival Night</h3>
									<h4>Newark</h4>
								</div>
								<p>Lorem cursus eu velit vitae egestas non. Tristique proin at neque nulla phasellus. Cursus leo et rhoncus egestas.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event2.jpg"></a>
								<span class="post_date"><span class="lg-font">14</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>80-90s Vibes</h3>
									<h4>Elizabeth</h4>
								</div>
								<p>Urna condimentum sem quam sed mauris viverra vel proin vel. Amet sodales magna nunc aliquam ornare adipiscing.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">18</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">18</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">18</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">18</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
					</div>
					</div>
				  </div>
				  <div class="tab-pane" id="conference">
						<div class="post-grid-container">
					  <div class="row post-box-cnt post-event-box">
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event1.jpg"></a>
								<span class="post_date"><span class="lg-font">20</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Carnival Night</h3>
									<h4>Newark</h4>
								</div>
								<p>Lorem cursus eu velit vitae egestas non. Tristique proin at neque nulla phasellus. Cursus leo et rhoncus egestas.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event2.jpg"></a>
								<span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>80-90s Vibes</h3>
									<h4>Elizabeth</h4>
								</div>
								<p>Urna condimentum sem quam sed mauris viverra vel proin vel. Amet sodales magna nunc aliquam ornare adipiscing.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">27</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event2.jpg"></a>
								<span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>80-90s Vibes</h3>
									<h4>Elizabeth</h4>
								</div>
								<p>Urna condimentum sem quam sed mauris viverra vel proin vel. Amet sodales magna nunc aliquam ornare adipiscing.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
					</div>
					</div>
				  </div>
		         
				 
				 <div class="tab-pane" id="djParty">
						<div class="post-grid-container">
					  <div class="row post-box-cnt post-event-box">
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event1.jpg"></a>
								<span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Carnival Night</h3>
									<h4>Newark</h4>
								</div>
								<p>Lorem cursus eu velit vitae egestas non. Tristique proin at neque nulla phasellus. Cursus leo et rhoncus egestas.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event2.jpg"></a>
								<span class="post_date"><span class="lg-font">21</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>80-90s Vibes</h3>
									<h4>Elizabeth</h4>
								</div>
								<p>Urna condimentum sem quam sed mauris viverra vel proin vel. Amet sodales magna nunc aliquam ornare adipiscing.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event3.jpg"></a>
								<span class="post_date"><span class="lg-font">25</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>Summer Trap mix</h3>
									<h4>Paterson</h4>
								</div>
								<p>Ultrices vel vitae lorem eu tristique tempor in id. Facilisis vitae etiam morbi orci mal esuada in. Vitae nibh.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
						<div class="post-grid">
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/event2.jpg"></a>
								<span class="post_date"><span class="lg-font">12</span><br><span>MAY</span></span>
							</div>
							<div class="post-content">
								<div class="postTitle">
									<h3>80-90s Vibes</h3>
									<h4>Elizabeth</h4>
								</div>
								<p>Urna condimentum sem quam sed mauris viverra vel proin vel. Amet sodales magna nunc aliquam ornare adipiscing.</p>
							    <div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM</span>
									<span class="postDate" style="color: #5C5C5C; font-size: 16px;"><img src="@/assets/images/heart.png"> &nbsp;Saved</span>
								</div>
								<div class="postBtn">
									<span class="postBtnT"><a href="#" class="viewBtn">Tickets & Details</a></span>
									<span class="postAdd"><img src="@/assets/images/lock.png"> &nbsp; <a href="#">Add</a></span>
								</div>
							</div>
						</div>
					</div>
					</div>
				  </div>
				 
				</div>
				
			
			</div>


		</div>
  </div>
</section>
<section class="sectionfrst spaceSec" style="padding-bottom: 0;padding-top: 0;">
	<div class="container">
		<div class="enqueryForm">
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
<section class="sectionfrst spaceSec">
  <div class="container">
	<div class="instaHeader">
		<div class="row">
			<div class="col-md-9 col-lg-9">
				<div class="instaHead">
					<div class="instaLogo"><img src="@/assets/images/nstaLogo.png"></div>
					<div class="instaTitle">
						<img src="@/assets/images/insta.jpg"> &nbsp;moneytrainevents
						<div class="instaMeta">
									<span class="postDate">3,255 posts</span>
									<span class="postDate">4,199 following</span>
									<span class="postDate">5,073 followers </span>
								</div>
					</div>
				</div>
				
			</div>
			<div class="col-md-3 col-lg-3">
			<div class="followBtn"><a href="#" class="viewBtn">Follow</a></div></div>
		</div>
	</div>
	<div class="instafeed"><img src="@/assets/images/insta-feed.jpg"></div>
  </div>
</section>
<section class="sectionTestimonial spaceSec" style="padding-top: 30px;">
  <div class="container">
		<div class="row post-box-tst owl-carousel-tst owl-carousel owl-theme">
						<div class="post-grid">
							<div class="post-content animatable bounceInLeft">
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
							
							<div class="featureImg animatable bounceInRight">
								<a href="#"><img src="@/assets/images/testimonial1.jpg"></a>
								
							</div>
						</div>
						<div class="post-grid">
							<div class="post-content">
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
							
							<div class="featureImg">
								<a href="#"><img src="@/assets/images/testimonial1.jpg"></a>
								
							</div>
						</div>
						
					</div>
  </div>
</section>
<section class="sectionTestimonial spaceSec" style="padding-top: 0;">
  <div class="container">
	<div class="sectionfrstTop">
			<h2 class="secTitle animatable bounceIn">Our Packages</h2>
			<p style="color: #000; font-weight: 500;line-height: 30px;" class="animatable bounceIn">From the large and lavish social gatherings to intimate parties, leave the planning,<br> details and stress to us! Even the smallest of gathers requires planning. </p>
	</div>
	
	<div class="sectionPriceList">
		<div class="row">
			<div class="col-md-4 col-lg-4 animatable bounceIn">
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
