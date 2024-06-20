import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000', // Laravel backend URL
    withCredentials: true, // Important for handling cookies
});

instance.defaults.xsrfCookieName = 'XSRF-TOKEN';
instance.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

export default instance;
