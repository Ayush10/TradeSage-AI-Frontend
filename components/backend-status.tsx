"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { authApi } from "@/lib/api-client";

export default function BackendStatus() {
  const [isConnected, setIsConnected] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const isHealthy = await authApi.checkHealth();
        setIsConnected(isHealthy);
        if (isHealthy) {
          console.log('Backend connected successfully');
          toast.success("Backend connected successfully at port 8080");
        } else {
          console.warn('Backend health check failed');
          toast.error("Backend connection failed. Running in demo mode.");
        }
      } catch (error) {
        console.error('Backend connection error:', error);
        setIsConnected(false);
        toast.error("Backend connection failed. Running in demo mode.");
      } finally {
        setChecking(false);
      }
    };

    checkConnection();

    // Poll backend status every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  if (checking) return null;

  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full ${
      isConnected ? 'bg-green-500/10' : 'bg-red-500/10'
    }`}>
      {isConnected ? (
        <>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-500">Backend Connected</span>
        </>
      ) : (
        <>
          <XCircle className="h-4 w-4 text-red-500" />
          <span className="text-sm text-red-500">Demo Mode</span>
        </>
      )}
    </div>
  );
}