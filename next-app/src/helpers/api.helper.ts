import axios from 'axios';
import Cookies from 'js-cookie';
import { DEFAULT_LOGIN_PATH } from '@/routes';
import { removeCookies } from './common.helper';

// Axios instance with default settings
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL for API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to include the auth token in headers
http.interceptors.request.use(
  (config) => {
    // Retrieve the token from cookies
    let token;

    if (typeof window !== 'undefined') {
      // Client-side: Get token using js-cookie
      token = Cookies.get('auth_token');
    } else {
      // Server-side: Get token using Next.js cookies API
      // token = getTokenFromCookies();
    }

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        removeCookies('auth_token');
        // Redirect to login or handle unauthorized access
        if (typeof window !== 'undefined') {
          window.location.href = DEFAULT_LOGIN_PATH;
        }
      }
      return Promise.reject(error);
    }
  }
);

// Export the Axios instance
export default http;
