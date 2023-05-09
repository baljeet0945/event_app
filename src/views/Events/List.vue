<script setup>
import EventCarousel from '../../components/EventCarousel.vue';
</script>
<template>
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
              <div class="tab-pane" id="conference">
                <div class="post-grid-container">
                <div class="row post-box-cnt owl-carousel-bl owl-carousel owl-theme">
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
                <div class="row post-box-cnt owl-carousel-bl owl-carousel owl-theme">
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
</template>