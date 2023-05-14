import { ref, computed } from 'vue'
import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', () => { 
  const cart = ref([])   

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
        // const cartItem = {
        //   'id': item.id,
        //   'ticketInQueue': 1
        // }  
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
    let index = cart.value.indexOf(item);    
    cart.value.splice(index,1);
  }


  const getCartItems = async(cart) => {  
    try {
        const response = await fetchWrapper.get(`events-details/${slug}`);    
        eventDetail.value = response.data
    } catch (error) {
        // const alertStore = useAlertStore();
        // alertStore.error(error); 
        console.log(error);               
    }
  }

  const resetCart = () => {
    cart.value = []
  }

  const removeFromCart = (cart) =>{
    //window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  return {cart, addToCart, resetCart, getCartItems, updateToCart, removeToCart, cartPriceTotal}
}, {persist: true})
