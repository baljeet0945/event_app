<script setup>
import { EventGallery, Services, InquiryForm, EventCarousel, InstaFeed} from '@/components';
</script>

<template>
  <main>    
    <section class="sectionfrst spaceSec">
      <div class="container">
        <div class="sectionfrstTop">
          <h2 class="secTitle" v-motion-pop-bounce-visible-once>Welcome</h2>
          <img src="@/assets/images/line-crv.png">
          <p class="secP" v-motion-pop-bounce-visible-once>From a super sweet 16 party to a 50th anniversary, and celebrations, <span style="color:#6DC461;">Money Train Events LLC</span> will handle all the details and logistics so you can enjoy being the host at your own party. </p>
        </div>
        <Services/>
      </div>
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <EventGallery/>
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <div class="container">
        <div class="sectionfrstTop">
          <h2 class="secTitle" v-motion-pop-bounce-visible-once>Upcoming Events Near You</h2>
        </div>
        
          <div class="sectionFilterGallery" v-motion-pop-bounce-visible-once>
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
                    <div class="row post-box-cnt">
                        <EventCarousel></EventCarousel>  
                    </div>
                  </div>
                </div>   
              </div> 
            </div>
          </div>
       </div>     
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <InstaFeed/>
    </section>

    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <InquiryForm/>
    </section>
  </main>
</template>