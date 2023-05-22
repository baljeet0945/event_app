import { ref } from 'vue'
import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';
import { router }  from '@/router';
import { useToast } from 'vue-toastification'

export const useAuthStore = defineStore('auth', () => { 
    const toast = useToast()
    const authUser  = ref(JSON.parse(localStorage.getItem('token')))  
    const user  = ref([])   
    const login = async (email, password) => {       
        const response = await fetchWrapper.post('signin', { email, password });
        if(response.message == 'success'){
            authUser.value =  response.data;
            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(response.data));
            // redirect to previous url or default to home page
            router.push('/');
        }else{
            toast.error(response.data);      
        } 
    } 
    
    const getUser = async () => {          
        const response = await fetchWrapper.get('profile');    
        user.value = response.data
    }

    const logout = () => {
        authUser.value = null;
        localStorage.removeItem('token');
        router.push('/login');
    } 

    return { authUser, login, logout, user, getUser}
})

