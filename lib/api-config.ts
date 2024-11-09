// API Configuration
export const API_BASE_URL = 'http://localhost:8080'; // Removed /api/v1 since it might not match backend

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    verify: '/auth/verify',
    logout: '/auth/logout',
  },
  health: '/health'
} as const;

// API Request Headers
export const getAuthHeaders = (token?: string) => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Credentials': 'true',
  'Origin': 'http://localhost:3000',
  ...(token ? { 'Authorization': `Bearer ${token}` } : {})
});