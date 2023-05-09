<script setup>
import Services from '../views/Services/List.vue'
import EventGallery from '../views/Events/Gallery.vue'
import Events from '../views/Events/List.vue'
import InstaFeeds from '../views/InstaFeeds.vue'
import EventForm from './Events/Form.vue'
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
      <Events/>
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <InstaFeeds/>
    </section>

    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <EventForm/>
    </section>
  </main>
</template>
