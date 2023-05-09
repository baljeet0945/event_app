<script setup>
// import EventGallery from '../views/Events/Gallery.vue'
// import Events from '../views/Events/List.vue'
// import InstaFeeds from '../views/InstaFeeds.vue'
import EventForm from './Events/Form.vue'
</script>

<template>
  
  <main>
    <div class="container">
        <section class="serviceTab spaceSec">
            <div class="row">
                <div class="col-md-12 col-lg-12">
                    <div id="exTab2" class="container tabSec" v-motion-pop-bounce>	
                        <ul  class="nav nav-pills">
                            <li class="active"> <a  href="#1a" data-toggle="tab"><span><img src="@/assets/images/event.png"></span> <label>Event Management & Promotions</label></a></li>
                            <li><a href="#2a" data-toggle="tab"><span><img src="@/assets/images/brand.png"></span> <label>Brand & Product Launch</label></a></li>
                            <li><a href="#3a" data-toggle="tab"><span><img src="@/assets/images/marketing.png"></span> <label>Online and Offline Marketing</label></a></li>
                            
                        </ul>
                        
                    <div class="tab-content clearfix">
                    <div class="tab-pane active" id="1a">
                        <p>We help you organize, manage, promote, and make your event success! With over 2 decades of experience in hosting events, our team of professionals will help you:</p>
                        <ul class="listStyle">
                            <li>Plan: We help you with site selection, budget planning, timeline co-ordination, attendee registration, speaker set-up, food, beverages and everything else you’ll need for an amazing event.</li> 

                            <li>Promote: We’ll boost your attendance numbers through a series of promotional videos, street promotions, online ads, and more. From designing and distributing flyers in your local neighborhood to running a big digital campaign, we can do it all. </li>

                            <li>Manage: We ensure everything runs smooth as silk. We take care of your guest’s needs, any last-minute changes, and all other management related details.</li>
                        </ul>
                    </div>
                    <div class="tab-pane" id="2a">
                            <p>We help you organize, manage, promote, and make your event success! With over 2 decades of experience in hosting events, our team of professionals will help you:</p>
                        <ul class="listStyle">
                            <li>Plan: We help you with site selection, budget planning, timeline co-ordination, attendee registration, speaker set-up, food, beverages and everything else you’ll need for an amazing event.</li> 


                            <li>Manage: We ensure everything runs smooth as silk. We take care of your guest’s needs, any last-minute changes, and all other management related details.</li>
                        </ul>
                    </div>
                    
                    <div class="tab-pane" id="3a">
                            <p>We help you organize, manage, promote, and make your event success! With over 2 decades of experience in hosting events, our team of professionals will help you:</p>
                        <ul class="listStyle">
                            <li>Plan: We help you with site selection, budget planning, timeline co-ordination, attendee registration, speaker set-up, food, beverages and everything else you’ll need for an amazing event.</li> 

                            <li>Online ads, and more. From designing and distributing flyers in your local neighborhood to running a big digital campaign, we can do it all. </li>

                            <li>Manage: We ensure everything runs smooth as silk. We take care of your guest’s needs.</li>
                        </ul>
                    </div>
        
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>

        <section class="socialEvent spaceSec">
            <div class="row">
                <div class="col-md-7 col-lg-7">
                    <h2 class="secTitle">Social Event</h2>
                    <p>From a super sweet 16 party to a 50th anniversary, and celebrations, Money Train Events LLC will handle all the details and logistics so you can enjoy being the host at your own party. From the large and lavish social gatherings to intimate parties, leave the planning, details and stress to us!</p> 

                    <p>Even the smallest of gathers requires planning. We love to create memorable parties with decadent details that blow even seasoned guests away.</p>
                </div>
                <div class="col-md-5 col-lg-5"><img src="@/assets/images/social-event.jpg" class="secImg"></div>
            </div>
        </section>
        <section class="serviceList spaceSec">
            <div class="row">
                <div class="col-md-9 col-lg-9">
                    <h3>We provide a variety of services, including:</h3>
                    <ul class="listStyle">
                                    <li>Scouting a venue</li>
                                    <li>Developing a theme</li>
                                    <li>Coordinating paper goods with a stationery vendor</li>
                                    <li>Organizing a tasting with up to three caterers</li>
                                    <li>Recommending up to three florists (if necessary)</li>
                                    <li>Recommending up to three photographers (if necessary)</li>
                                    <li>Managing your guest list</li>
                                    <li>Assisting with rentals</li>
                                </ul>
                </div>
                <div class="col-md-3 col-lg-3"><img src="@/assets/images/provideService.png" class="secImg"></div>
            </div>
        </section>
        <section class="rangeEvent spaceSec">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <div class="rangeEventP">
                        <h3>We Offer A<br> Range of Event.</h3>
                        <p>Suspendisse neque viverra donec magnis etiam. Sed sed pellentesque tempor posuere nisi cum neque suspendisse. Erat et comm odo pharetra faucibus ultricies. </p>
                    </div>
                </div>
                <div class="col-md-8 col-lg-8 text-right">
                    <img src="@/assets/images/rangeofevent1.jpg" class="secImg">&nbsp;&nbsp;&nbsp;&nbsp;<img src="@/assets/images/rangeofevent2.jpg" class="secImg">
                </div>
            </div>
        </section>  
        <section class="SreventSec spaceSec" style="padding-top: 0;">
            <div class="row">
                <div class="col-md-12 col-lg-12 text-center">
                        <h2 class="secTitle">Makes it Easy to Create Your Event.</h2>
                </div>
            </div>
            <div class="row yrEvent">
                <div class="col-md-6 col-lg-6">
                        <img src="@/assets/images/createyourEvent.jpg" class="secImg">
                </div>
                <div class="col-md-6 col-lg-6">
                        <div class="eventPl">
                            <h4>1. Consultation</h4>
                            Viverra donec magnis etiam. Sed sed pellente sque tempor posuere nisi cum neque suspe et comm odo pharetra.
                        </div>
                        <div class="eventPl">
                            <h4>2. Planning</h4>
                            Donec magnis etiam. Sed sed pellente sque tempor posuere nisi cum neque suspe ndisse.t et comm odo.
                        </div>
                        <div class="eventPl">
                            <h4>3. Execution</h4>
                            Magnis etiam. Sed sed pellente sque tempor posuere nisi cum neque suspe ndisse. Erat et comm odo pharetra.
                        </div>
                        <a href="#" class="viewBtn">Book Now</a>
                </div>
            </div>
        </section>
        <section class="SreventSec spaceSec" style="padding-top: 0;">
            <div class="edckcustom-container" style="margin: 0 auto;">
                <div class="row">
                    <div class="col-md-12 col-lg-12 text-center">
                            <h2 class="secTitle">Lets discuss on call : <i class="fa-light fa-phone" style="font-size: 35px;"></i> (888) 457-1114</h2>
                            <span class="secSubTitle">Feel free to contact us via call</span>
                    </div>
                </div>
            </div>
            <br><br><br>
            <div class="sectionfrstTop" style="margin-bottom: 0;">
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/cocktail-party.jpg">
                            <span>Cocktail Party</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/Golden-parties.jpg">
                            <span>Golden parties</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/birthday.jpg">
                            <span>Birthdays</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/Theme-parties.jpg">
                            <span>Theme parties</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/reunions.jpg">
                            <span>Reunions</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/Graduation.jpg">
                            <span>Graduation</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/holidayparty.jpg">
                            <span>Holiday party </span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList bounceIn animated">
                            <img src="@/assets/images/special-occasions.jpg">
                            <span>Special Occasions</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="itemList itemListVall bounceIn animated">
                        <a href="#">
                            <span>View All</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="SreventSec spaceSec" style="padding-top: 0;  padding-bottom: 0;">
            <div class="edckcustom-container" style="margin: 0 auto;">
                <div class="row">
                    <div class="col-md-12 col-lg-12 text-center">
                            <h2 class="secTitle">MTEG Timeline</h2>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12 col-lg-12 text-center">
                            <img src="@/assets/images/video.jpg" class="secImg">
                    </div>
                </div>
            </div>
        </section>
        

        <section class="sectionTestimonial sectionSrTestimonial spaceSec">
		    <div class="row">
				<div class="col-md-12 col-lg-12">
						<h2 class="secTitle">People’s party experience</h2>
				</div>
		    </div>
		    <div class="row post-box-tst owl-carousel-ser-tst owl-carousel owl-theme">
                <div class="post-grid">
                    <div class="post-content animatable bounceInLeft">
                        <div class="postTitle">
                            <img src="@/assets/images/quote.png" style="width: auto;">
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
                </div>
				<div class="post-grid">
					<div class="post-content">
						<div class="postTitle">
						    <img src="@/assets/images/quote.png" style="width: auto;">
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
				</div>
						
				<div class="post-grid">
					<div class="post-content">
						<div class="postTitle">
							<img src="@/assets/images/quote.png" style="width: auto;">
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
				</div>
						
			</div>
        </section>
		
	


	
		
		<section class="sectionContact spaceSec" style="padding-top: 0;">
            <EventForm/>
        </section>

	</div>
  </main>
</template>
