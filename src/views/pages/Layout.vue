<script setup>
import { ref } from 'vue'
import   Header  from '@/components/HeaderComponent.vue';
import   Footer  from '@/components/FooterComponent.vue';
import InquiryModal  from '@/components/InquiryModalComponent.vue';

document.querySelector('body').style.backgroundColor = '#ffffff'

</script>
<template>
    <Header/>
        <router-view />
        <section>
			<InquiryModal />
		</section>
    <Footer/>
</template>
