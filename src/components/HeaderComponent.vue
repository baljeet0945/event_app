<script setup>
import { watch, ref} from 'vue'
import {useRoute } from 'vue-router'
const route = useRoute()

import { useAuthStore } from '@/stores/auth.store';
const authStore = useAuthStore();
const { authUser, logout } = authStore;
const headerClass = ref('inner-header')
// You can watch the property for triggering some other action on change
watch(() => route.path, () => {
  if(route.path == '/'){
    headerClass.value = 'header';
  }else{
    headerClass.value = 'inner-header';
  }
// Optionally you can set immediate: true config for the watcher to run on init
}, { immediate: true });

</script>
<template>
  <header id="header" :class="headerClass">
    <div class="top-head">
          <div class="container">
          <div class="row headerTop">
            <div class="col-md-2 col-lg-2">
              <div class="site-branding"> 
                  <a href="#" rel="home"><img src="@/assets/images/logo.png"></a>
              </div>
            </div>
            <div class="col-md-7 col-lg-7 navTop">
                <nav class="navbar navbar-expand-lg">
                  <div class="">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">                    
                      <router-link class="nav-link" to="/">Home</router-link>
                      <router-link class="nav-link" to="/about">About Us</router-link>
                      <router-link class="nav-link" to="/service">Services</router-link>
                      <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
                      <router-link class="nav-link" to="/event">Event</router-link>
                      <router-link class="nav-link" to="/contact">Contact</router-link>                   
                    </div>
                  </div>
                  </div>
                </nav>
            </div>
            <div class="col-md-3 col-lg-3">           
              <div class="top-btn">
                <div class="dropdown-center" v-if="authUser">
                  <a class="nav-link dropdown-toggle dropdown-toggle-split" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="@/assets/images/user.png" width="50">
                  </a>
                  <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                    <li><router-link class="dropdown-item" to="/event">Saved Events</router-link></li>
                    <li><router-link class="dropdown-item" @click="logout" to="/login">Logout</router-link></li>
                  </ul>
                </div>
                <router-link class="t-btn" to="/login" v-if="!authUser">Login</router-link>  
                <a class="t-btn" href="#Inquiry">Book Now</a>                
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="top-banner" v-if="route.path == '/'">
      <div class="container">
      <div class="row">
        <div class="col-md-9 col-lg-9">
          <div class="banner-txt">
            <h4 v-motion-left-in>Make your event</h4>
            <img src="@/assets/images/stand-out.png" v-motion-pop-bounce>
            <h5 v-motion-left-in><img src="@/assets/images/play.png"> &nbsp; &nbsp;Recent Event Shoot</h5>
          </div>
        </div>
        <div class="col-md-3 col-lg-3 topVideo">
        <div class="more-products-nav">

          <div class="vertical-slider">
            <div class="vs-slides">
              <div class="vs-slides-inner">
           
                <div class="vs-controls">
                  <div class="vs-control up deactivate"><i><img src="@/assets/images/topNav.png"></i></div>
                  <div class="vs-control down"><i><img src="@/assets/images/btNav.png"></i></div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>
      </div>
    </div>

    <div class="inner-top-banner" v-if="route.path == '/about'" style="background-image: url('src/assets/images/about-banner.jpg')" >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="pageTitle">
              <h1 v-motion-pop-bounce>About Us</h1>
              <div class="breadCrum" v-motion-pop-bounce><a href="#">Home</a> / About us</div>
            </div>
          </div>
        </div>
      </div>
	  </div>

    <div class="inner-top-banner" v-if="route.path == '/service'" style="background-image: url('src/assets/images/events.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="pageTitle">
              <h1 v-motion-pop-bounce>Services</h1>
              <div class="breadCrum" v-motion-pop-bounce><a href="#">Home</a> / Services</div>
            </div>
          </div>
        </div>
		  </div>
	  </div>

    <div class="inner-top-banner" v-if="route.path == '/portfolio'" style="background-image: url('src/assets/images/portfolio.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="pageTitle">
              <h1 v-motion-pop-bounce>Portfolio</h1>
              <div class="breadCrum" v-motion-pop-bounce><a href="#">Home</a> / Portfolio</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inner-top-banner" v-if="route.path == '/event'" style="background-image: url('src/assets/images/events.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="pageTitle">
              <h1 v-motion-pop-bounce>Events</h1>
              <div class="breadCrum" v-motion-pop-bounce><a href="#">Home</a> / <a href="#">Events</a> / Upcoming Events</div>
            </div>
          </div>
        </div>
      </div>
	  </div>

    <div class="inner-top-banner" v-if="route.path == '/contact'" style="background-image: url('src/assets/images/contact.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="pageTitle">
              <h1 v-motion-pop-bounce>Contact</h1>
              <div class="breadCrum" v-motion-pop-bounce><a href="#">Home</a> / Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </header>
</template>
