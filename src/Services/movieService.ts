import axios from 'axios';
import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = 'http://localhost:3030';

export interface Movie {
    id: string;
    title: string;
    releaseDate: string;
}

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

export const getMovies = async () => {
    const response = await baseInstance.get('movies');
    return response.data;
};

export const getMovieById = async (id: string) => {
    const response = await baseInstance.get(`movies/${id}`);
    return response.data;
};

export const createMovie = async (movie: Omit<Movie, 'id'>) => {
    const response = await baseInstance.post('movies', movie);
    return response.data;
};

export const updateMovie = async (id: string, movie: Partial<Movie>) => {
    const response = await baseInstance.put(`movies/${id}`, movie);
    return response.data;
};

export const deleteMovie = async (id: string) => {
    const response = await baseInstance.delete(`movies/${id}`);
    return response.data;
};