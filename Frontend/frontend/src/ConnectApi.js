import axios from 'axios'
const API = axios.create({
    baseURL: "https://shop-backend-sooty.vercel.app",
    withCredentials: true, // Change to true only if you’re using credentials
});
export default API
