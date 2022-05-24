import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_SERVER;
export const LOCAL_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_SERVER;
const TOKEN_KEY = 'id-token';

const api = axios.create({
    baseURL: BASE_URL
});

export const apiServerLocal = axios.create({
    baseURL: LOCAL_BASE_URL
});

export const setToken = async (token: string) => {
    await window.localStorage.setItem(TOKEN_KEY, token);
    axios.defaults.headers.common['Authorization'] = token;
};

export const getToken = async () => {
    return await window.localStorage.getItem(TOKEN_KEY);
};

export default api;
