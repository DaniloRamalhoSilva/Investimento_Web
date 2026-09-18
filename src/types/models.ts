export type User = {
  id: string;
  email: string;
  name: string;
  role?: string;
  avatarUrl?: string | null;
  theme?: "dark" | "light" | null;
};

export type AuthSession = {
  token: string;
  user: User;
};

export type LoginPayload = { email: string; password: string };
export type LoginResponse = { token: string; user: User };
