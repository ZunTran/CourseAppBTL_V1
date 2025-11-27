import axios from "axios";
const API_BASE_URL = "https://thanhduong.pythonanywhere.com";

export const endpoints = {
    categories: '/categories/',
     courses: '/courses/',
};

export default axios.create({
    baseURL: API_BASE_URL,
});

export const authApi=()=>{
    return axios.create({
        baseURL:API_BASE_URL,
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    });
}
