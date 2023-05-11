import { ref } from 'vue'
import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';
import { router }  from '@/router';
import { useAlertStore } from '@/stores';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore('auth', () => { 
    const auth = ref({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user'))      
    })     
  
    const login = async (email, password) => {
        try {
            const response = await fetchWrapper.post(`${baseUrl}signin`, { email, password });
                 
             // store user details and jwt in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(response.data));
             // redirect to previous url or default to home page
             router.push('/');
        } catch (error) {
            const alertStore = useAlertStore();
            alertStore.error(error);                
        }
    }

    const logout = () => {
        auth.value.user = null;
        localStorage.removeItem('user');
        router.push('/login');
    }
  
    return { auth, login, logout}
  })

