<script setup>

import {useTestimonialStore} from '@/stores/testimonial.store'
import { storeToRefs } from "pinia";

import TestimonialCarousel from '@/components/TestimonialCarousel.vue';
import InquiryForm from '@/components/InquiryFormComponent.vue';
const usersStore = useTestimonialStore();
const { testimonialSlides } = storeToRefs(usersStore)
testimonialSlides.value = 1


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
                <div class="row post-box-tst">
                    <TestimonialCarousel>
						<template #testimonialWithFeature="slotProps">
							<div class="post-grid carousel__item">
								<div class="post-content" v-motion-slide-right>
									<div class="postTitle">
										<img src="@/assets/images/quote.png" style="width: auto;">
										<h3>Clients Testimonials</h3>
									</div>
									<p v-html="slotProps.testimonials"></p>
								<div class="instaHead">
										<div class="instaLogo"><img :src="slotProps.client_image" alt="client image"></div>
										<div class="instaTitle">
											{{slotProps.client_name}}
											<img src="@/assets/images/stars.jpg" style="width: auto;">
										</div>
									</div>
								</div>
								
								<div class="featureImg" v-motion-slide-right>
									<a href="#"><img :src="slotProps.feature_image" alt="feature image"></a>								
								</div>
							</div> 
						</template>
					</TestimonialCarousel>     
                </div>
        	</div>
        </section>
		
		<section class="sectionContact spaceSec" style="padding-top: 0;">
            <InquiryForm/>
        </section>

	</div>
  </main>
</template>
