import axios from 'axios'
const API = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: false, // Change to true only if you’re using credentials
});
export default API