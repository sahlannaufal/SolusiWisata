import axios from "axios";
import { getTokenUserFromLocalStorage, removeTokenUserFromLocalStorage } from "./TokenManager";


const Api = axios.create({
    baseURL: 'http://103.149.177.42:3333',
    timeout: 600 * 1000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    },
});

const onRequestSuccess = (config) => {
    const token = getTokenUserFromLocalStorage();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    console.log(token)
    return config;
};

const onRequestError = (error) => Promise.reject(error)
const onResponseSuccess = (response) => response.data
const onResponseError = (error) => {
    if (error.response?.status === 401) removeTokenUserFromLocalStorage()
    return Promise.reject(error.response ? error.response.data : error)
}

Api.interceptors.request.use(onRequestSuccess, onRequestError)
Api.interceptors.response.use(onResponseSuccess, onResponseError)

export default Api