import { createContext } from "react";

import type { AuthSession, User } from "@/types/models";

export type LoginInput = { email: string; password: string };
export type AuthContextValue = {
  isAuthenticated: boolean;
  login: (input: LoginInput) => Promise<void>;
  logout: () => void;
  session: AuthSession | null;
  updateUser: (user: Partial<User>) => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
