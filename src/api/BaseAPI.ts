import axios from 'axios';
import type { AxiosRequestConfig } from 'axios'

// Create axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_PATH_API,
});

// Add a request interceptor to inject the Authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtTokenUser');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Generic POST function
const post = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    // Re-throw a formatted error
    throw error?.response?.data?.message || 'Something went wrong';
  }
};

export default {
  post,
};
