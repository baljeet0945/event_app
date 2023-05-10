<script setup>
import { RouterLink, RouterView} from 'vue-router'
import Header from './views/Layout/Header.vue'
import Footer from './views/Layout/Footer.vue'
</script>

<template>
  <Header v-if="!$route.meta.hideNavigation"/>

  <RouterView />

  <Footer v-if="!$route.meta.hideNavigation"/>
</template>

