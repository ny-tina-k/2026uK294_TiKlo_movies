import axios from 'axios';
import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = 'http://localhost:3030';

export const baseInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

baseInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    
    const correctPath: boolean = config.url !== "login";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data;
};