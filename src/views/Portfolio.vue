<script setup>

</script>

<template>
  <main>
    <section class="sectionfrst spaceSec">
      <div class="container">
        <div class="sectionfrstTop">
          <h2 class="secTitle animatable bounceIn">Creating Memorable Events</h2>
          <p style="color: #000; font-weight: 500;" class="animatable bounceIn">Having a celebration is supposed to be fun, so leave your stress at home and let us do the work for you!</p>
        </div>
        
        <div class="sectionFilterGallery">
            <div id="exTab1" class="container tabSec animatable bounceIn">	
              <ul  class="nav nav-pills">
                <li class="active">
                  <a  href="#1a" data-toggle="tab"><img src="@/assets/images/play=black.png"> &nbsp; Video Gallery</a>
                </li>
                <li><a href="#2a" data-toggle="tab"><img src="@/assets/images/photo-icon.png"> &nbsp; Photo Gallery</a>
                </li>
                
              </ul>

            <div class="tab-content clearfix">
              <div class="tab-pane active" id="1a">
              <div class="grid-container">
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="video"
      data-lightbox-content="https://www.youtube.com/embed/lapu8oJLtzY"> <img src="@/assets/images/vd1.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="video"
      data-lightbox-content="https://www.youtube.com/embed/D0UnqGm_miA"> <img src="@/assets/images/vd3.jpg"></a>
                </div>
                
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="video"
      data-lightbox-content="https://www.youtube.com/embed/D0UnqGm_miA"> <img src="@/assets/images/vd4.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="video"
      data-lightbox-content="https://www.youtube.com/embed/D0UnqGm_miA"> <img src="@/assets/images/vd6.jpg"></a>
                </div>
                
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="video"
      data-lightbox-content="https://www.youtube.com/embed/D0UnqGm_miA"> <img src="@/assets/images/vd2.jpg"></a>
                </div>
              </div>
              </div>
              <div class="tab-pane" id="2a">
                <div class="grid-container">
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="images/vd1.jpg"> <img src="@/assets/images/vd1.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="images/vd2.jpg"> <img src="@/assets/images/vd2.jpg"></a>
                </div>
                
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="images/vd3.jpg"> <img src="@/assets/images/vd3.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="images/vd4.jpg"> <img src="@/assets/images/vd4.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle" data-lightbox-type="image"
      data-lightbox-content="images/vd5.jpg"> <img src="@/assets/images/vd5.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="images/vd6.jpg"> <img src="@/assets/images/vd6.jpg"></a>
                </div>
              </div>
              </div>
        <div class="viewBtnSec animatable bounceIn"><a href="#" class="viewBtn">View Portfolio</a></div>
            </div>
            
          
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
   

    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <EventForm/>
    </section>
  </main>
</template>
