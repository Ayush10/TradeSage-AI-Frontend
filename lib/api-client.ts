import axios, { AxiosError, AxiosInstance } from 'axios';
import { API_BASE_URL, API_ENDPOINTS, getAuthHeaders } from './api-config';

// Constants
const API_TIMEOUT = 5000;
export const STORAGE_KEY = 'tradesage_auth';

// Custom error class for API errors
export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Types
export interface LoginResponse {
  user: User;
  token: string;
  refresh_token: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: 'ADMIN' | 'USER';
}

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
  user_type: 'USER' | 'ADMIN';
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: getAuthHeaders(),
  withCredentials: true
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem(STORAGE_KEY);
    const token = authData ? JSON.parse(authData).token : null;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('API Error:', error);
    
    if (error.response) {
      // Handle specific error cases
      if (error.response.status === 409) {
        throw new APIError('User already exists with this email');
      }
      const message = error.response.data?.message || 'An unexpected error occurred';
      throw new APIError(message, error.response.status);
    }
    if (error.code === 'ECONNABORTED') {
      throw new APIError('Request timeout. Please try again.');
    }
    if (!error.response) {
      throw new APIError('Network error. Please check your connection.');
    }
    throw error;
  }
);

// Auth API methods
export const authApi = {
  async checkHealth() {
    try {
      console.log('Checking backend health at:', API_BASE_URL);
      const response = await api.get(API_ENDPOINTS.health, {
        timeout: 2000 // Shorter timeout for health check
      });
      console.log('Health check response:', response.status);
      return response.status === 200;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  },

  async checkRegistrationEndpoint(): Promise<boolean> {
    try {
      const response = await api.options(API_ENDPOINTS.auth.register);
      return response.status === 200 || response.status === 204;
    } catch (error) {
      console.error('Registration endpoint check failed:', error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await api.post<LoginResponse>(API_ENDPOINTS.auth.login, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError('Login failed. Please try again.');
    }
  },

  async register(data: RegisterData): Promise<void> {
    try {
      // First check if registration endpoint is available
      const isEndpointAvailable = await this.checkRegistrationEndpoint();
      if (!isEndpointAvailable) {
        throw new APIError('Registration service is currently unavailable');
      }

      const response = await api.post(API_ENDPOINTS.auth.register, data);
      console.log('Registration response:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
      if (error instanceof APIError) {
        throw error;
      }
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        throw new APIError('User already exists with this email');
      }
      throw new APIError('Registration failed. Please try again.');
    }
  },

  async verifyToken(token: string): Promise<boolean> {
    try {
      const response = await api.get(API_ENDPOINTS.auth.verify, {
        headers: getAuthHeaders(token)
      });
      return response.status === 200;
    } catch (error) {
      console.error('Token verification error:', error);
      return false;
    }
  },

  async refreshToken(refreshToken: string): Promise<{ token: string }> {
    try {
      const response = await api.post('/auth/refresh-token', { 
        refresh_token: refreshToken 
      });
      return response.data;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError('Token refresh failed');
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post(API_ENDPOINTS.auth.logout);
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Logout error:', error);
      // Still remove local storage even if API call fails
      localStorage.removeItem(STORAGE_KEY);
    }
  }
};

// Helper function to check backend connectivity
export async function checkBackendConnection(): Promise<boolean> {
  try {
    console.log('Checking backend connection...');
    const isHealthy = await authApi.checkHealth();
    console.log('Backend connection status:', isHealthy);
    return isHealthy;
  } catch (error) {
    console.error('Backend connection error:', error);
    return false;
  }
}