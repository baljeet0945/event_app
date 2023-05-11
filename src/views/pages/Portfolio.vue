<script setup>

import { EventGallery, InquiryForm, InstaFeed} from '@/components';
</script>

<template>
  <main>
    <section class="sectionfrst spaceSec">
      <EventGallery/>
    </section>

    <section class="sectionfrst spaceSec" style="padding-top: 0;">
      <InstaFeed/>
    </section>
    
    <section class="sectionContact spaceSec" style="padding-top: 0;">
      <InquiryForm/>
    </section>
  </main>
</template>
