import { useMemo, useState, type ReactNode } from "react";

import {
  clearStoredSession,
  getStoredSession,
  storeSession,
} from "@/shared/api/apiClient";
import { login as requestLogin } from "@/shared/api/authApi";
import type { User } from "@/types/models";

import {
  AuthContext,
  type AuthContextValue,
  type LoginInput,
} from "./AuthStateContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState(() => getStoredSession());

  async function handleLogin(input: LoginInput) {
    const response = await requestLogin(input);
    const nextSession = { token: response.token, user: response.user };
    storeSession(nextSession);
    setSession(nextSession);
  }

  function handleLogout() {
    clearStoredSession();
    setSession(null);
  }

  function updateUser(user: Partial<User>) {
    setSession((current) => {
      if (!current) return current;
      const nextSession = { ...current, user: { ...current.user, ...user } };
      storeSession(nextSession);
      return nextSession;
    });
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(session),
      login: handleLogin,
      logout: handleLogout,
      session,
      updateUser,
    }),
    [session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
