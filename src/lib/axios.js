import axios from 'axios';

/**
 * This is the axios file for write the 
 * base url and use where we need this
 * 
 * @author meganathan
 */

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_LOCAL_URL,
    withCredentials: true,
});

