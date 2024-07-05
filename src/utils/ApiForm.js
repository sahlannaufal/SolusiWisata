import axios from "axios";
import { getTokenUserFromLocalStorage, removeTokenUserFromLocalStorage } from "./TokenManager";


const ApiForm = axios.create({
    baseURL: 'http://103.149.177.42:3333',
    timeout: 600 * 1000,
    headers: {
        "Content-Type": "multipart/form-data",
        "accept": "application/json",
    },
});

const onRequestSuccess = (config) => {
    const token = getTokenUserFromLocalStorage();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
};

const onRequestError = (error) => Promise.reject(error)
const onResponseSuccess = (response) => response.data
const onResponseError = (error) => {
    if (error.response?.status === 401)
    return Promise.reject(error.response ? error.response.data : error)
}

ApiForm.interceptors.request.use(onRequestSuccess, onRequestError)
ApiForm.interceptors.response.use(onResponseSuccess, onResponseError)

export default ApiForm