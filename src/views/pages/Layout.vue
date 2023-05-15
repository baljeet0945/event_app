<script setup>
import { ref } from 'vue'
import   Header  from '@/components/HeaderComponent.vue';
import   Footer  from '@/components/FooterComponent.vue';

document.querySelector('body').style.backgroundColor = '#ffffff'

</script>
<template>
    <Header/>
        <router-view />
    <Footer/>
</template>
