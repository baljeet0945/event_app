<script setup>
import EventGallery from '../views/Events/Gallery.vue'
import InstaFeeds from '../views/InstaFeeds.vue'
import EventForm from './Events/Form.vue'
</script>

<template>
  <main>
    <section class="sectionfrst spaceSec">
      <EventGallery/>
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <InstaFeeds/>
    </section>
    
    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <EventForm/>
    </section>
  </main>
</template>
