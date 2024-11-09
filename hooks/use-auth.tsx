"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { authApi, checkBackendConnection, APIError, STORAGE_KEY } from "@/lib/api-client";
import { toast } from "sonner";

// Constants
const DEMO_USER = {
  email: 'demo@example.com',
  password: 'demo123'
};

// Types and Interfaces
interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: 'ADMIN' | 'USER';
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  backendAvailable: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegistrationData) => Promise<void>;
  logout: () => void;
}

interface RegistrationData {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password: string;
  user_type: 'ADMIN' | 'USER';
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse auth state:', e);
        }
      }
    }
    return { user: null, token: null, refreshToken: null };
  });
  
  const [loading, setLoading] = useState(true);
  const [backendAvailable, setBackendAvailable] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Save auth state to localStorage
  useEffect(() => {
    if (authState.user || authState.token) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authState));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [authState]);

  // Check backend connection and verify token on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const isBackendAvailable = await checkBackendConnection();
        setBackendAvailable(isBackendAvailable);
        console.log('Backend available:', isBackendAvailable);

        if (!isBackendAvailable) {
          console.warn("Backend server is not available, falling back to demo mode");
          return;
        }

        if (authState.token) {
          try {
            const isValid = await authApi.verifyToken(authState.token);
            if (!isValid) {
              throw new Error('Token invalid');
            }
          } catch (error) {
            console.warn("Token verification failed, attempting refresh");
            if (authState.refreshToken) {
              try {
                const { token } = await authApi.refreshToken(authState.refreshToken);
                setAuthState(prev => ({ ...prev, token }));
              } catch (refreshError) {
                console.warn("Token refresh failed, clearing auth state");
                setAuthState({ user: null, token: null, refreshToken: null });
                if (!pathname?.startsWith('/auth/')) {
                  router.push('/auth/login');
                }
              }
            }
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      // Check if using demo credentials
      if (!backendAvailable && email === DEMO_USER.email && password === DEMO_USER.password) {
        const demoAuthState = {
          user: {
            id: '1',
            email: DEMO_USER.email,
            first_name: 'Demo',
            last_name: 'User',
            user_type: 'USER' as const
          },
          token: 'demo-token',
          refreshToken: 'demo-refresh-token'
        };

        setAuthState(demoAuthState);
        toast.success('Demo login successful');
        router.push('/dashboard');
        return;
      }

      // Regular backend login
      const { user, token, refresh_token } = await authApi.login(email, password);
      
      setAuthState({
        user,
        token,
        refreshToken: refresh_token
      });

      toast.success("Login successful");
      router.push('/dashboard');
      
    } catch (error) {
      if (error instanceof APIError) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegistrationData) => {
    try {
      setLoading(true);

      if (!backendAvailable) {
        toast.error("Registration is not available in demo mode");
        return;
      }

      await authApi.register(data);
      toast.success("Registration successful! Please log in.");
      router.push('/auth/login');
    } catch (error) {
      if (error instanceof APIError) {
        toast.error(error.message);
      } else {
        toast.error("Registration failed. Please try again.");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthState({ user: null, token: null, refreshToken: null });
    localStorage.removeItem(STORAGE_KEY);
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        loading,
        backendAvailable,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}