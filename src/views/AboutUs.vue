<script setup>
import EventForm from './Events/Form.vue'
</script>

<template>
  <main>
    <div class="container">
		<section class="ab-sec1" v-motion-pop-bounce-visible-once>
			<p>Amet lacus accumsan tincidunt mattis nunc orci. Turpis est enim amet egestas in. In dictum vulputate aliquet lectus mauris massa vel tristique. Tellus libero volutpat lorem ipsum ac pretium sociis sollicitudin. Amet tempor varius eu turpi.</p>
		</section>
		
		<section class="ab-sec1">
			<div class="row">
				<div class="col-md-6 col-lg-6" v-motion-left-in-visible-once>
					<div class="abtImg"><img src="@/assets/images/abt1.jpg"></div>
				</div>
				<div class="col-md-6 col-lg-6" v-motion-right-in-visible-once>
					<div class="abtCnt">
						<h2>Who we are</h2>
						<p>In dictum vulputate aliquet lectus mauris massa vel tristique. Tellus libero volutpat lorem ipsum.</p>
						<ul class="listStyle">
						<li>Aliquam varius sapien non augue imperdiet ultrices.</li>
						<li>Etiam in lacus at tortor ultricies ornare.</li>
						<li>Morbi vitae urna vitae nisi aliquam commodo.</li>
						<li>Mauris porttitor nibh non elit tincidunt sollicitudin.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="ab-sec1 rvrs-ab-sec1">
			<div class="row">
				<div class="col-md-6 col-lg-6" v-motion-left-in-visible-once>
					<div class="abtCnt">
						<h2>Our Mission</h2>
						<p>Eget egestas adipiscing id lacus pharetra. </p>
                         <p>Ut at tellus velit fames et platea lacus blandit. Et tortor mi vestibulum et aliquam rhoncus. Tincidunt volutpat id purus nisi neque. Adipiscing quam id neque arcu blandit et facilisi fusce elementum massa.</p>
						<ul class="listStyle">
						<li>Aliquam varius sapien non augue imperdiet ultrices.</li>
						<li>Etiam in lacus at tortor ultricies ornare.</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-lg-6"  v-motion-right-in-visible-once>
					<div class="abtImg"><img src="@/assets/images/abt2.jpg"></div>
				</div>
			</div>
		</section>
		
		<section class="our-team">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<div class="abtCnt" v-motion-pop-bounce-visible-once>
						<h2>Meet Our Team</h2>
						<p>Platea lacus blandit. Et tortor mi vestibulum et aliquam rhoncus. Tincidunt volutpat id purus nisi<br> neque. Adipiscing quam id neque arcu blandit et facilisi fusce elementum massa.</p>
					</div>
				</div>
			</div>
			
			<div class="teaGridSec">
			 <div class="row">
				<div class="col-md-4 col-lg-4" v-motion-pop-bounce-visible-once>
					<div class="team-grid">
						<div class="teamImg">
							<img src="@/assets/images/team1.jpg">
						</div>
						<div class="teamCnt">
							<h3>Garry Gill</h3>
							<h4>Senior Event Designer</h4>
							<div class="ft-social">
								<a href="#"><i class="fa-brands fa-facebook"></i></a>
								<a href="#"><i class="fa-brands fa-twitter"></i></a>
								<a href="#"><i class="fa-brands fa-linkedin"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-lg-4" v-motion-pop-bounce-visible-once>
					<div class="team-grid">
						<div class="teamImg">
							<img src="@/assets/images/team2.jpg">
						</div>
						<div class="teamCnt">
							<h3>Nancy William</h3>
							<h4>Event Stylist</h4>
							<div class="ft-social">
								<a href="#"><i class="fa-brands fa-facebook"></i></a>
								<a href="#"><i class="fa-brands fa-twitter"></i></a>
								<a href="#"><i class="fa-brands fa-linkedin"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-lg-4" v-motion-pop-bounce-visible-once>
					<div class="team-grid">
						<div class="teamImg">
							<img src="@/assets/images/team3.jpg">
						</div>
						<div class="teamCnt">
							<h3>Smith Sudhir</h3>
							<h4>Part Organizer</h4>
							<div class="ft-social">
								<a href="#"><i class="fa-brands fa-facebook"></i></a>
								<a href="#"><i class="fa-brands fa-twitter"></i></a>
								<a href="#"><i class="fa-brands fa-linkedin"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</section>
		
        <section class="sectionTestimonial spaceSec">
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
		
		<section class="sectionContact spaceSec" style="padding-top: 0;">
            <EventForm/>
        </section>

	</div>
  </main>
</template>
