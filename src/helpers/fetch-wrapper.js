import { useAuthStore } from '@/stores/auth.store';
const baseUrl = `${import.meta.env.VITE_API_URL}`;
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (apiRoute, body) => {
        const requestOptions = {
            method,
            headers: authHeader(baseUrl+apiRoute)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(baseUrl+apiRoute, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { authUser } = useAuthStore();
    const isLoggedIn = !!authUser;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${authUser}` };
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    // check for error response
    // if (!response.ok) { 
    //     // get error message from body or default to response status
    //     const error = (data && data.message) || response.status;
    //     console.log(data)
    //     return Promise.reject(error);
    // }    
    return data;
}
