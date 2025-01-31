import axios from 'axios'
const API = axios.create({
    baseURL: "https://shop-backend-sooty.vercel.app",
    withCredentials: true,  
});

export default API
