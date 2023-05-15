import { ref } from 'vue'
import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';
import { router }  from '@/router';
import { useToast } from 'vue-toastification'

export const useAuthStore = defineStore('auth', () => { 
    const toast = useToast();
    const auth = ref({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user'))      
    })     
  
    const login = async (email, password) => {
        try {
            const response = await fetchWrapper.post('signin', { email, password });
                 
             // store user details and jwt in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(response.data));
             // redirect to previous url or default to home page
             router.push('/');
        } catch (error) {
            toast('Login failed!');                
        }
    }

    const signup = async (data) => {
        try {
            const response = await fetchWrapper.post('signup', data);
            toast('Signup success!');    
            
        } catch (error) {
            toast('Signup failed!');            
        }
      
    }

    const logout = () => {
        auth.value.user = null;
        localStorage.removeItem('user');
        router.push('/login');
    }
  
    return { auth, login, logout, signup}
  })

