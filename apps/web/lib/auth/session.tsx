"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { apiClient } from "../api/client";
import { UserSummary } from "@roundtable/shared";

const ACCESS = "proof_token";
const REFRESH = "proof_refresh";

export function saveSession(token: string, refreshToken?: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(ACCESS, token);
    if (refreshToken) {
      localStorage.setItem(REFRESH, refreshToken);
    }
  }
}

export function accessToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS);
}

export function clearSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
  }
}

interface AuthContextValue {
  user: UserSummary | null;
  loading: boolean;
  token: string | null;
  login: (email: string, pass: string) => Promise<UserSummary>;
  register: (name: string, email: string, pass: string) => Promise<UserSummary>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSummary | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshSession = async () => {
    try {
      const storedToken = accessToken();
      if (!storedToken) {
        setUser(null);
        setLoading(false);
        return;
      }
      setToken(storedToken);
      const res = await apiClient<{ user: UserSummary }>("/auth/me", { token: storedToken });
      setUser(res.user);
    } catch {
      setUser(null);
      clearSession();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  const login = async (email: string, password: string): Promise<UserSummary> => {
    const res = await apiClient<{ user: UserSummary; tokens: { accessToken: string } }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.tokens?.accessToken) {
      saveSession(res.tokens.accessToken);
      setToken(res.tokens.accessToken);
    }
    setUser(res.user);
    return res.user;
  };

  const register = async (name: string, email: string, password: string): Promise<UserSummary> => {
    const res = await apiClient<{ user: UserSummary; tokens: { accessToken: string } }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    if (res.tokens?.accessToken) {
      saveSession(res.tokens.accessToken);
      setToken(res.tokens.accessToken);
    }
    setUser(res.user);
    return res.user;
  };

  const logout = async () => {
    try {
      await apiClient("/auth/logout", { method: "POST" });
    } catch {
      // Ignore network errors on logout
    } finally {
      clearSession();
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        login,
        register,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
