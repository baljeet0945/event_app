<script setup>
import   Header  from '@/components/HeaderComponent.vue';
import   Footer  from '@/components/FooterComponent.vue';
</script>
<template>
    <Header/>
        <router-view />
    <Footer/>
</template>
