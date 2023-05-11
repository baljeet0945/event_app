<script setup>
import { onMounted } from 'vue'
import { useServiceStore } from '@/stores'
import { storeToRefs } from "pinia";
const store = useServiceStore()
const {services} = storeToRefs (store)
const { getServices } = store;

onMounted(() => {
    getServices()
})
</script>

<template>
    <div class="sectionfrstTop">
        <div class="row">
            
             <div class="col-md-4 col-lg-4" v-for="service in services" :key="service.id">               
                <div class="itemList" v-motion-pop-bounce-visible-once>
                <img :src="service.featureImage" alt="service image">
                <span>{{service.title}}</span>
                </div>
            </div>        
        
            <div class="col-md-4 col-lg-4">
                <div class="itemList itemListVall" v-motion-pop-bounce-visible-once>
                    <a href="#"><span>View All</span></a>
                </div>
            </div>
        </div>
    </div>
</template>