import { ref, computed } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', () => { 
  const cart = ref([])  
  const cartCount = ref(0) 

  const cartPriceTotal = computed(() => {
    let total = 0;
    cart.value.filter((item) => {
        total += (item.ticketInQueue * item.eventTicketsPrice);
    });   
    return total     
  })
  
  const addToCart = (item) => {  
    let found = cart.value.find(event => event.id == item.id );
    if(found){
      found.ticketInQueue++;
    }else{  
      cartCount.value++  
      item.ticketInQueue = 1      
      cart.value.push(item)
    }     
  }

  const updateToCart = (itemId, value) => {  
    let found = cart.value.find(event => event.id == itemId );
    if(found){
      found.ticketInQueue = value
    }    
  }
  
  const removeToCart = (item) => {  
    cartCount.value--
    let index = cart.value.indexOf(item);    
    cart.value.splice(index,1);
  }

  return {cart, addToCart, updateToCart, removeToCart, cartPriceTotal, cartCount}

}, {persist: { storage: sessionStorage, key: 'cart'}})
