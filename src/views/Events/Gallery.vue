<script setup>

</script>

<template>
    <div class="container">
        <div class="sectionfrstTop">
          <h2 class="secTitle" v-motion-pop-bounce-visible-once>Creating Memorable Events</h2>
          <p style="color: #000; font-weight: 500;" v-motion-pop-bounce-visible-once>Having a celebration is supposed to be fun, so leave your stress at home and let us do the work for you!</p>
        </div>
        
        <div class="sectionFilterGallery">
            <div id="exTab1" class="container tabSec" v-motion-pop-bounce-visible-once>	
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
      data-lightbox-content="@/assets/images/vd1.jpg"> <img src="@/assets/images/vd1.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="@/assets/images/vd2.jpg"> <img src="@/assets/images/vd2.jpg"></a>
                </div>
                
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="@/assets/images/vd3.jpg"> <img src="@/assets/images/vd3.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="@/assets/images/vd4.jpg"> <img src="@/assets/images/vd4.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="@/assets/images/vd5.jpg"> <img src="@/assets/images/vd5.jpg"></a>
                </div>
                <div class="itemGl">
                  <a href="#lightbox" class="lightbox-toggle"
      data-lightbox-type="image"
      data-lightbox-content="@/assets/images/vd6.jpg"> <img src="@/assets/images/vd6.jpg"></a>
                </div>
              </div>
              </div>
              <div class="viewBtnSec" v-motion-pop-bounce-visible-once><a href="#" class="viewBtn">View Portfolio</a></div>
            </div>
          </div>
        </div>
    </div>
</template>